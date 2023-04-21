import { AppRootStateType } from "app/store";

export const pack = (state: AppRootStateType) => state.pack
export const page = (state: AppRootStateType) => state.pack.page
export const pageCount = (state: AppRootStateType) => state.pack.pageCount
export const cardPacksTotalCount = (state: AppRootStateType) => state.pack.cardPacksTotalCount
export const cardPacks = (state: AppRootStateType) => state.pack.cardPacks
export const selectedPack = (cardsPack_id: string) => (state: AppRootStateType) => state.pack.cardPacks.find((pack) => pack._id === cardsPack_id)
