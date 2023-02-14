// import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from '@reduxjs/toolkit'
// import  reducer  from './reducer'
// // export default configureStore({
// //   reducer: {reducer},
// // })
// export const store = createStore(
//     reducer
//     );
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import  reducer  from './reducer'

export const store = createStore(reducer, applyMiddleware(thunk));