import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appActions } from "app/appSlice";
import { createAppAsyncThunk, handleServerAppError, handleServerNetworkError } from "common/utils";
import { authAPI } from "common/api/API";
import { FieldValues } from "react-hook-form";

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, FieldValues>
("auth/login", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await authAPI.login(arg);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    dispatch(appActions.setAppInitialized({ isInitialized: true }));
    return { isLoggedIn: true };
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  }
});


const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
("auth/logout", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await authAPI.logout();
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return { isLoggedIn: false };
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  }
});

const initializeApp = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
("app/initializeApp", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await authAPI.me();
    dispatch(authActions.isLoggedIn(true));
    return { isLoggedIn: true };
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  } finally {
    dispatch(appActions.setAppInitialized({ isInitialized: true }));
  }
});

const register = createAppAsyncThunk<{ isRegister: boolean }, FieldValues>
("auth/register", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await authAPI.register(arg);
    return { isRegister: true };
  } catch (e) {
    handleServerNetworkError(e, dispatch);
    return rejectWithValue(null);
  }
});


const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isRegister: false
  },
  reducers: {
    isLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegister = action.payload.isRegister;
      })
    // .addCase(initializeApp.fulfilled, (state, action) => {
    //   state.isLoggedIn = action.payload.isLoggedIn;
    // });
  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { login, logout, initializeApp, register };



