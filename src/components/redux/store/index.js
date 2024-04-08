
import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import yeuthichReducer from '../reducers/yeuthichReducer';
import userReducer from '../reducers/userReducer';


export default configureStore({
  reducer: {
    listPro: productReducer,
    listYeuthich: yeuthichReducer,
    listUser: userReducer,
    
  },
});
