import { createSlice } from "@reduxjs/toolkit";
import { appActions } from "app/appSlice";
import { createAppAsyncThunk, handleServerError } from "common/utils";
import { packsAPI } from "common/api/API";

const fetchPack = createAppAsyncThunk<ResponsePackType, void>
("pack/fetch", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await packsAPI.fetch();
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return res.data;
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const createPack = createAppAsyncThunk<void, { name: string }>
("pack/create", async ({ name }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    await packsAPI.create(name);
    await packsAPI.fetch();
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const deletePack = createAppAsyncThunk<void, { id: string }>
("pack/delete", async ({ id }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    await packsAPI.delete(id);
    await packsAPI.fetch();
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const updatePack = createAppAsyncThunk<void, { id: string, name: string }>
("pack/update", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    await packsAPI.update(arg);
    await packsAPI.fetch();
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const slice = createSlice({
  name: "pack",
  initialState: {
    cardPacks: [] as PackType[],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPack.fulfilled, (state, action) => {
        const { cardPacks, cardPacksTotalCount, maxCardsCount, minCardsCount, page, pageCount } = action.payload;
        state.cardPacks = cardPacks;
        state.cardPacksTotalCount = cardPacksTotalCount;
        state.maxCardsCount = maxCardsCount;
        state.minCardsCount = minCardsCount;
        state.page = page;
        state.pageCount = pageCount;
      });
  }
});

export const packReducer = slice.reducer;
export const packThunks = { fetchPack, createPack, deletePack, updatePack };

export type ResponsePackType = {
  cardPacks: PackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}
export type PackType = {
  _id: string
  user_id: string
  name: string
  user_name: string
  cardsCount: number
  grade: number
  created: string
  updated: string
}

export type ResponseCardType = {
  cards: any
}



