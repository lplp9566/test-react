// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floorreducer"
import roleReducer from "./rolereducer"

 const store = configureStore({
    reducer:{
        floorAccess:floorReducer,
        roleReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store