import { createSlice } from "@reduxjs/toolkit";
import { appActions } from "app/appSlice";
import { createAppAsyncThunk, handleServerError } from "common/utils";
import { cardsAPI } from "common/api/API";
import { CardType, ResponseCardsType } from "common/types";

const fetchCard = createAppAsyncThunk<ResponseCardsType, { _id: string }>
("card/fetch", async ({ _id }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await cardsAPI.fetch(_id);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return res.data;
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const createCard = createAppAsyncThunk<void, { question: string, answer: string }>
("card/create", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await cardsAPI.create(arg);
    await cardsAPI.fetch(res.data.cardsPack_id);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const deleteCard = createAppAsyncThunk<void, { _id: string }>
("card/delete", async ({ _id }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await cardsAPI.delete(_id);
    await cardsAPI.fetch(res.data.cardsPack_id);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const updateCard = createAppAsyncThunk<void, { _id: string, question: string }>
("card/update", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await cardsAPI.update(arg);
    await cardsAPI.fetch(res.data.cardsPack_id);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

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
      .addCase(fetchCard.fulfilled, (state, action) => {
        const { cards, cardsTotalCount, maxGrade, minGrade, pageCount, page, packUserId } = action.payload;
        state.cards = cards;
        state.cardsTotalCount = cardsTotalCount;
        state.maxGrade = maxGrade;
        state.minGrade = minGrade;
        state.pageCount = pageCount;
        state.page = page;
        state.packUserId = packUserId;
      });
  }
});

export const cardReducer = slice.reducer;
export const cardThunks = { fetchCard, createCard, deleteCard, updateCard };



