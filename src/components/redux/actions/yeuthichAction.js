import { createAsyncThunk } from "@reduxjs/toolkit";
import { addYeuth } from "../reducers/yeuthichReducer";
import BASE_URL from "../../../../env/port";


const api_url = `${BASE_URL}sanphamyeuthich`;

export const fetchYeuthic = () => {
    return async  dispatch => {
   
        await fetch(api_url).then(res => res.json()).then(data => {
            data.forEach(element => {
               dispatch(addYeuth(element)) 
            });
        }).catch(error => console.log(error))

    }
}

export const deleteYeuthApi = createAsyncThunk(
    'yeuth/deleteYeuthApi',

    async (id, thunkAPI) => await fetch(`${api_url}/${id}`, {
        method: 'DELETE',
    }).then(res => res.json()).then( () => {
        return id
    }).catch(error => thunkAPI.rejectWithValue(error.message) )
)

export const addYeuthAPI = createAsyncThunk(
    'yeuth/addYeuthAPI',
  
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


