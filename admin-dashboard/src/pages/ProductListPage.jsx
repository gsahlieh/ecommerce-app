import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { productRows } from '../assets/defaultData';
import { MdDelete } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../redux/apiCalls';
import { deleteProductStart } from '../redux/productRedux';

const ProductListPage = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className='flex flex-row items-center'>
            <img  src={params.row.img} alt="" className="w-[50px] h-[50px] rounded-full mr-4" />
            <p className='truncate '>{params.row.title}</p>
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='w-full flex flex-row justify-center'>
            <Link to={"/product/" + params.row._id}>
              
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
    <div className="h-[42.9vh] p-5">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={row=> row._id}
        pageSize={5}
        checkboxSelection
        />
    </div>
  );
  
}

export default ProductListPage