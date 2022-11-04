import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import { addUser } from '../redux/apiCalls';

const NewUserPage = () => {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const StorageRef = ref(storage, fileName)
    

    const uploadTask = uploadBytesResumable(StorageRef, file);

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
              const user = { ...inputs, img: downloadURL }
              addUser(user, dispatch)
            });
          }
        );


  }
  
  return (
    <div>
      <div className='h-fit flex justify-center px-[7vw] py-[3vh]'>
            <div className='flex flex-col justify-center md:w-2/3 bg-[#F7F9FB] rounded-[16px] shadow-md'>
                
                <h1 className='text-4xl font-bold mx-auto my-8 text-center'>Create New User</h1>
                <form action="" className='flex flex-col w-full'>
                    <div className='flex flex-col md:flex-row mx-7 justify-center'>
                        <input type="text" placeholder='Full Name' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 md:mr-9 rounded-lg'/>
                        <input name='username' type="text" placeholder='Username' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 rounded-lg' onChange={handleChange}/>

                    </div>
                    <div className='flex flex-col md:flex-row mx-7 justify-center'>
                        <input name='email' type="text" placeholder='Email Address' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 md:mr-9 rounded-lg' onChange={handleChange}/>
                        <input name='password' type="password" placeholder='Password' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 rounded-lg' onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col md:flex-row mx-7 justify-center'>
                        <input type="text" placeholder='Phone Number' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 md:mr-9 rounded-lg'/>
                        <input type="text" placeholder='Address' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4'/>
                    </div>
                    <div className='flex flex-col md:flex-row mx-7 justify-between mb-3'>
                      <div className="flex flex-col md:w-1/2 w-full mb-2">
                        <label className='mb-1 font-semibold text-center md:text-left'>Gender</label>
                        <div className="flex md:justify-start justify-center ">
                          <input type="radio" name="gender" id="male" value="male" className='mr-1 hover:cursor-pointer'/>
                          <label for="male" className='mr-3'>Male</label>
                          <input type="radio" name="gender" id="female" value="female" className='mr-1 hover:cursor-pointer'/>
                          <label for="female" className='mr-3'>Female</label>
                          <input type="radio" name="gender" id="other" value="other" className='mr-1 hover:cursor-pointer'/>
                          <label for="other">Other</label>
                        </div>
                      </div>
                      <div className="md:w-1/2 w-full flex md:flex-col flex-row pl-5 md:items-start items-center">
                        <label className=' mb-1 px-1 mr-3'>Active</label>
                        <select className="w-full rounded-lg px-1 border-2" name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    
                    </div>
                    <div className="flex flex-col mx-auto">
                        <label className='mb-1 text-center'>Image</label>
                        <div className='flex w-fit'>
                          <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                      </div>
                   
                    <button className='mt-4 w-fit rounded-lg cursor-pointer bg-green-600 text-white border-2 p-2 px-6 hover:bg-green-700 mx-auto mb-4' onClick={handleClick}>CREATE USER</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewUserPage