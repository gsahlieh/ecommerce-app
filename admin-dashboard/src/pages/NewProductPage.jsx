import React, { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import { addProduct } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const NewProductPage = () => {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleCategories = (e) => {
    setCategories(e.target.value.split(','))
  }

  const handleClick = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const StorageRef = ref(storage, fileName)
    

    const uploadTask = uploadBytesResumable(StorageRef, file);
    navigate('/products')

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const product = { ...inputs, img: downloadURL, categories: categories}
              addProduct(product, dispatch)
            });
          }
        );

        navigate('/products')


  }


  return (
    <div>
      <div className='h-fit flex justify-center px-[7vw]'>
        <div className='flex flex-col justify-center md:w-2/3 bg-[#F7F9FB] rounded-[16px] shadow-md'>
            
            <h1 className='md:text-4xl text-3xl font-bold mx-auto my-8 text-center px-7 md:px-0'>CREATE NEW PRODUCT</h1>
            <form action="" className='flex flex-col w-full'>
                <div className='flex flex-col md:flex-row w-full md:w-[20vw] mx-auto justify-center'>
                    <input name='title' type="text" placeholder='Title' className='border-2 md:w-full mx-auto px-3 py-1 mb-4 rounded-lg' onChange={handleChange}/>
                </div>
                <div className='flex flex-col md:flex-row w-full md:w-[20vw] mx-auto justify-center'>
                    <input name='desc' type="text" placeholder='Description' className='border-2 md:w-full mx-auto px-3 py-5 mb-4 rounded-lg' onChange={handleChange}/>
                </div>
                <div className='flex flex-col md:flex-row w-full md:w-[20vw] mx-auto justify-center'>
                    <input name='price' type="number" placeholder='Price' className='border-2 md:w-full mx-auto px-3 py-1 mb-4 rounded-lg' onChange={handleChange}/>
                </div>
                <div className='w-[49vw] md:w-[20vw] flex flex-row mx-auto justify-between mb-3'>
                  <div className="w-full flex flex-row justify-between items-center">
                    <label className=' px-1'>Stock</label>
                    <select name="inStock"  className="w-2/3 ml-5 rounded-lg px-1 border-2" id="active" onChange={handleChange}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row w-full md:w-[20vw] mx-auto justify-center'>
                    <input type="text" placeholder='Categories (e.g. mens, jordan)' className='border-2 md:w-full mx-auto px-3 py-1 mb-4 rounded-lg' onChange={handleCategories}/>
                </div>
                <div className="w-[20vw] flex flex-col mx-auto justify-center ">
                    <label className='mb-1 text-center'>Image</label>
                    <div className='flex justify-end'>
                      <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                  </div>
                
                <button className='mt-4 w-fit rounded-lg cursor-pointer bg-green-600 text-white border-2 p-2 px-6 hover:bg-green-700 mx-auto mb-4' onClick={handleClick}>CREATE PRODUCT</button>
                
            </form>
        </div>
      </div>
  </div>
  )
}

export default NewProductPage