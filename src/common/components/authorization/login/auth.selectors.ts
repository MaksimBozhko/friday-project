import { AppRootStateType } from "app/store";

export const isLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
export const isRegister = (state: AppRootStateType) => state.auth.isRegister
export const id = (state: AppRootStateType) => state.auth.id
export const getName = (state: AppRootStateType) => state.auth.name
export const getAvatar = (state: AppRootStateType) => state.auth.avatar
export const email = (state: AppRootStateType) => state.auth.email