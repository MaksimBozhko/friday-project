import { AppRootStateType } from "app/store";

export const isLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
export const isRegister = (state: AppRootStateType) => state.auth.isRegister