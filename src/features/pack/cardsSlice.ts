import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appActions } from "app/appSlice"
import { createAppAsyncThunk, handleServerError } from "common/utils"
import { cardsAPI } from "common/api/API"
import { CardType, CreateCardRequestType, FetchCardRequestType, ResponseCardsType } from "common/types"

const fetchCard = createAppAsyncThunk<ResponseCardsType, FetchCardRequestType>
("card/fetch", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await cardsAPI.fetch(arg)
    dispatch(appActions.setAppStatus({ status: "succeeded" }))
    return res.data
  } catch (e) {
    handleServerError(e, dispatch)
    return rejectWithValue(null)
  }
})

const createCard = createAppAsyncThunk<ResponseCardsType, CreateCardRequestType>
("card/create", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await cardsAPI.create(arg)
    const cards = await cardsAPI.fetch(res.data.cardsPack_id)
    dispatch(appActions.setAppStatus({ status: "succeeded" }))
    return cards.data
  } catch (e) {
    handleServerError(e, dispatch)
    return rejectWithValue(null)
  }
})

const deleteCard = createAppAsyncThunk<ResponseCardsType, { _id: string }>
("card/delete", async ({ _id }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await cardsAPI.delete(_id)
    const cards = await cardsAPI.fetch(res.data.cardsPack_id)
    dispatch(appActions.setAppStatus({ status: "succeeded" }))
    return cards.data
  } catch (e) {
    handleServerError(e, dispatch)
    return rejectWithValue(null)
  }
})

const updateCard = createAppAsyncThunk<ResponseCardsType, { _id: string, question: string, answer: string }>
("card/update", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await cardsAPI.update(arg)
    const cards = await cardsAPI.fetch(res.data.updatedCard._id)
    dispatch(appActions.setAppStatus({ status: "succeeded" }))
    return cards.data
  } catch (e) {
    handleServerError(e, dispatch)
    return rejectWithValue(null)
  }
})

const slice = createSlice({
  name: "pack",
  initialState: {
    cards: [] as CardType[],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: ""
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCard.fulfilled, (state, action) => setCards(state, action))
      .addCase(createCard.fulfilled, (state, action) => setCards(state, action))
      .addCase(updateCard.fulfilled, (state, action) => setCards(state, action))
      .addCase(deleteCard.fulfilled, (state, action) => setCards(state, action))
  }
})

export const cardReducer = slice.reducer
export const cardThunks = { fetchCard, createCard, deleteCard, updateCard }

const setCards = (state: any, action: PayloadAction<ResponseCardsType>) => {
  const { cards, cardsTotalCount, maxGrade, minGrade, pageCount, page, packUserId } = action.payload
  state.cards = cards
  state.cardsTotalCount = cardsTotalCount
  state.maxGrade = maxGrade
  state.minGrade = minGrade
  state.pageCount = pageCount
  state.page = page
  state.packUserId = packUserId
}


