import { configureStore } from '@reduxjs/toolkit'


import rootReducer from '../reducers/rootReducer';

const reducer = rootReducer;

const store = configureStore({
  reducer,
  // can apply middleware here
})

export default store;
