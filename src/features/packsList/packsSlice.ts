import { createSlice } from "@reduxjs/toolkit";
import { appActions } from "app/appSlice";
import { createAppAsyncThunk, handleServerError } from "common/utils";
import { packsAPI } from "common/api/API";
import { CreatePackRequestType, FetchPackRequestType, PackType, ResponsePackType } from "common/types";

const fetchPack = createAppAsyncThunk<ResponsePackType, FetchPackRequestType>
("pack/fetch", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await packsAPI.fetch(arg);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return res.data;
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const createPack = createAppAsyncThunk<void, CreatePackRequestType>
("pack/create", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    await packsAPI.create(arg);
    await packsAPI.fetch({});
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
    await packsAPI.fetch({});
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
    await packsAPI.fetch({});
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