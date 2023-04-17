import { AnyAction, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "common/components/authorization/login/authSlice";
import { appReducer } from "app/appSlice";
import { packReducer } from "features/packsList/packsSlice";
import { cardReducer } from "features/pack/cardsSlice";


const rootReducer = combineReducers({
	auth: authReducer,
	app: appReducer,
	pack: packReducer,
	card: cardReducer
})

export const store = configureStore({
	reducer: rootReducer,
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;
