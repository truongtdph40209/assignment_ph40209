import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser } from "../reducers/userReducer";
import BASE_URL from "../../../../env/port";


const api_url = `${BASE_URL}user`;

export const fetchUser = () => {
    return async  dispatch => {
   
        await fetch(api_url).then(res => res.json()).then(data => {
            data.forEach(element => {
               dispatch(addUser(element)) 
            });
        }).catch(error => console.log(error))

    }
}


export const addUserAPI = createAsyncThunk(
    'user/addUserAPI',
  
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



