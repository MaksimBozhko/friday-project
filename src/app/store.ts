import { AnyAction, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "common/components/authorization/login/authSlice";
import { appReducer } from "app/appSlice";
import { packReducer } from "features/packsList/packsSlice";
import { cardReducer } from "features/pack/cardsSlice";
import { cardsAPI } from "features/pack/CreateAPI"


const rootReducer = combineReducers({
	auth: authReducer,
	app: appReducer,
	pack: packReducer,
	card: cardReducer,
	[cardsAPI.reducerPath]: cardsAPI.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware)
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;
