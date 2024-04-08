
import {createSlice} from '@reduxjs/toolkit';
import { addUserAPI } from '../actions/userAction';




const initialState = {
    listUser: [],

};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    addUser(state, action) {
      state.listUser.push(action.payload)
    }
    
  },

  extraReducers: builder => {

    builder.addCase(addUserAPI.fulfilled, (state, action) => {

      state.listUser.push(action.payload)

    }).addCase(addUserAPI.rejected, (state, action) => {
      console.log('add user rejected:', action.error.message);
    })

   

  }
});

export const { addUser } = UserSlice.actions;

export default UserSlice.reducer;
