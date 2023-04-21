import { AppRootStateType } from "app/store";

export const card = (state: AppRootStateType) => state.card
export const cards = (state: AppRootStateType) => state.card.cards
export const page = (state: AppRootStateType) => state.card.page
export const cardsTotalCount = (state: AppRootStateType) => state.card.cardsTotalCount
export const pageCount = (state: AppRootStateType) => state.card.pageCount