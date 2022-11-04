import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { userRows } from "../assets/defaultData";
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { userRequest } from '../requestMethods';
import noProfilePic from '../assets/no-profile-pic.webp'


const UserListPage = () => {
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await userRequest.get('users')
        setUsers(res.data)
      }catch{}
    }
    getUsers()

  }, [users])

  const handleDelete = (id) => {
    const deleteUser = async () => {
      try{
        const res = await userRequest.delete(`users/${id}`)
      }catch{}
    }
    deleteUser()
    users.splice(users.findIndex((user) => user._id === id), 1)

  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex flex-row items-center">
            <img className="w-[32px] h-[32px] rounded-full  mr-4" src={params.row.img || noProfilePic} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "password", headerName: "Encrypted Password", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='w-full flex flex-row justify-center'>
            <Link to={"/user/" + params.row._id}>
              
              <button className="bg-blue-600 px-2 py-1 rounded-lg text-white flex-row flex items-center mr-2">
                <div className='flex items-center mr-1'>
                  <FiEdit2 size={15} />
                </div> 
                <p>Edit</p>
                  </button>
            </Link>
            <div className='flex items-center'>
              <MdDelete size={30} className='text-red-600 cursor-pointer' onClick={() => handleDelete(params.row._id)}/>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-[46vh] p-5">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={row=> row._id}
        pageSize={5}
        checkboxSelection
        
      />
    </div>
  );
}

export default UserListPage