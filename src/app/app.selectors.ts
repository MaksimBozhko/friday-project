import { AppRootStateType } from "app/store";

export const error = (state: AppRootStateType) => state.app.error
export const status = (state: AppRootStateType) => state.app.status
export const isInitialized = (state: AppRootStateType) => state.app.isInitialized