import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPro } from "../reducers/productReducer";


const api_url = 'http://192.168.43.174:3000/sanphamhot';

export const fetchProducts = () => {
    return async  dispatch => {
   
        await fetch(api_url).then(res => res.json()).then(data => {
            data.forEach(element => {
               dispatch(addPro(element)) 
            });
        }).catch(error => console.log(error))

    }
}

export const deleteProApi = createAsyncThunk(
    'pro/deleteTodos',

    async (id, thunkAPI) => await fetch(`${api_url}/${id}`, {
        method: 'DELETE',
    }).then(res => res.json()).then( () => {
        return id
    }).catch(error => thunkAPI.rejectWithValue(error.message) )
)

export const addProAPI = createAsyncThunk(
    'pro/addProAPI',
  
    async (objTodo, thunkAPI) => await fetch(api_url, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(objTodo)
    }).then(res => res.json()).then(data => {
        return data
    }).catch(err => thunkAPI.rejectWithValue(err.message) )
)

export const updateProApi = createAsyncThunk(
    'pro/updateProApi',

    async (objUpdate, thunkAPI) => await fetch(`${api_url}/${objUpdate.id}`, {
        method: 'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(objUpdate.data)
    }).then(res => res.json()).then(data => {
        return data
    }).catch(err => thunkAPI.rejectWithValue(err.message) )
)

