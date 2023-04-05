import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducers from './Reducers/productReducers';
import userReducer from './Reducers/userReducer';
import productDetailsReducer from './Reducers/productDetailsReducer';
import cartReducer from './Reducers/cartReducer';
import orderReducer from './Reducers/orderReducer';

export const store = configureStore({
  reducer: {
    product: productReducers,
    user: userReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    order:orderReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
