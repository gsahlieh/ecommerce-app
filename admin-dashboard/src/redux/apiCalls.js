import { publicRequest, userRequest } from '../requestMethods'
import { 
    getProductStart,
    getProductFailure,
    getProductSuccess,
    deleteProductStart,
    deleteProductFailure,
    deleteProductSuccess,
    updateProductStart,
    updateProductFailure,
    updateProductSuccess,
    addProductStart,
    addProductFailure,
    addProductSuccess,

 } from './productRedux'
import { loginFailure, loginStart, loginSuccess, addUserStart, addUserFailure, addUserSuccess, } from './userRedux'

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    }catch(e){
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())

    try{
        const res = await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())

    try{
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())

    try{

        dispatch(updateProductSuccess({id, product}))
    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())

    try{
        const res = await userRequest.post('/products', product)
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure())
    }
}

export const addUser = async (user, dispatch) => {
    dispatch(addUserStart())

    try{
        const res = await userRequest.post('/auth/register', user)
        dispatch(addUserSuccess(res.data))
    }catch(err){
        console.log(err)
        dispatch(addUserFailure())
    }
}