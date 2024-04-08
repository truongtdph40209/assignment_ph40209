
import {createSlice} from '@reduxjs/toolkit';
import { addYeuthAPI, deleteYeuthApi } from '../actions/yeuthichAction';


const initialState = {
    listYeuthich: [],

};

const YeuthSlice = createSlice({
  name: 'yeuth',
  initialState,
  reducers: {

    addYeuth(state, action) {
      state.listYeuthich.push(action.payload)
    }
    
  },

  extraReducers: builder => {
    //delete
    builder.addCase(deleteYeuthApi.fulfilled, (state, action) => {

      state.listYeuthich = state.listYeuthich.filter(row => row.id !== action.payload)

    }).addCase(deleteYeuthApi.rejected, (state , action) => {
      console.log('Delete todo rejected:', action.error.message);
    });


    //add
    builder.addCase(addYeuthAPI.fulfilled, (state, action) => {

      state.listYeuthich.push(action.payload)

    }).addCase(addYeuthAPI.rejected, (state, action) => {
      console.log('add todo rejected:', action.error.message);
    })



  }
});

export const { addYeuth } = YeuthSlice.actions;

export default YeuthSlice.reducer;
