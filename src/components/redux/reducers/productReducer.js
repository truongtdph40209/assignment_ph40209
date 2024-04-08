
import {createSlice} from '@reduxjs/toolkit';
import { addTodoAPI, deleteTodoApi } from '../actions/productAction';



const initialState = {
    listPro: [],

};

const ProSlice = createSlice({
  name: 'pro',
  initialState,
  reducers: {

    addPro(state, action) {
      state.listPro.push(action.payload)
    }
    
  },

//   extraReducers: builder => {
//     //delete
//     builder.addCase(deleteTodoApi.fulfilled, (state, action) => {

//       state.listPro = state.listPro.filter(row => row.id !== action.payload)

//     }).addCase(deleteTodoApi.rejected, (state , action) => {
//       console.log('Delete todo rejected:', action.error.message);
//     });


//     //add
//     builder.addCase(addTodoAPI.fulfilled, (state, action) => {

//       state.listTodo.push(action.payload)

//     }).addCase(addTodoAPI.rejected, (state, action) => {
//       console.log('add todo rejected:', action.error.message);
//     })

//     // //update
//     // builder.addCase(updateTodoApi.fulfilled, (state, action) => {
//     //   const {id, tieude, mota, ngay, loai, sotien} = action.payload

//     //   const todo = state.listTodo.find(row => row.id === id)

//     //   if (todo) {
//     //     todo.tieude = tieude;
//     //     todo.mota = mota;
//     //     todo.ngay = ngay;
//     //     todo.loai = loai;
//     //     todo.sotien = sotien;
//     //   }
//     // })

//     // builder.addCase(toggleTodoApi.fulfilled, (state, action) => {
//     //   const { id,  status } = action.payload;
//     //   // tìm bản ghi phù hợp với tham số truyền vào
//     //   const todo = state.listTodo.find(row => row.id === id);
//     //   // update
      
//     //   if (todo ) {
//     //     todo.status = status; // gán giá trị
//     //   }

//     // })


//   }
});

export const { addPro } = ProSlice.actions;

export default ProSlice.reducer;
