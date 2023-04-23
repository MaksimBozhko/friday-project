import { AnyAction, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "common/components/authorization/login/authSlice";
import { appReducer } from "app/appSlice";
import { cardsAPI } from "features/pack/CreateAPI"
import { packsAPI } from "features/packsList/packsAPI"


const rootReducer = combineReducers({
	auth: authReducer,
	app: appReducer,
	[cardsAPI.reducerPath]: cardsAPI.reducer,
	[packsAPI.reducerPath]: packsAPI.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware, packsAPI.middleware)
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;
