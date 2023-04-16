import { AnyAction, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({

})

export const store = configureStore({
	reducer: rootReducer,
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;
