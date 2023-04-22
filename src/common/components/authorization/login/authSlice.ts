import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appActions } from "app/appSlice";
import { createAppAsyncThunk, handleServerError } from "common/utils";
import { authAPI, ResponseUserType } from "common/api/API";
import { FieldValues } from "react-hook-form";

const login = createAppAsyncThunk<ResponseUserType, FieldValues>
("auth/login", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    const res = await authAPI.login(arg);
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return res.data;
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
("auth/logout", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: "loading" }));
    await authAPI.logout();
    dispatch(appActions.setAppStatus({ status: "succeeded" }));
    return { isLoggedIn: false };
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const initializeApp = createAppAsyncThunk<ResponseUserType, void>
("app/initializeApp", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await authAPI.me();
    dispatch(authActions.isLoggedIn(true));
    return res.data;
  } catch (e) {
    return rejectWithValue(null);
  } finally {
    dispatch(appActions.setAppInitialized({ isInitialized: true }));
  }
});

const register = createAppAsyncThunk<{ isRegister: boolean }, FieldValues>
("auth/register", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    await authAPI.register(arg);
    return { isRegister: true };
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null);
  }
});

const forgotPassword = createAppAsyncThunk<void, FieldValues>
("auth/forgotPassword", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    await authAPI.forgotPassword(arg);
  } catch (e) {
    handleServerError(e, dispatch);
  }
});

const setNewPassword = createAppAsyncThunk<void, FieldValues>
("auth/setNewPassword", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    await authAPI.setNewPassword(arg);
  } catch (e) {
    handleServerError(e, dispatch);
  }
});

const updateProfile = createAppAsyncThunk<{name: string, avatar: string}, {name: string, avatar: string}>
("auth/updateProfile", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await authAPI.updateProfile(arg);
    return { name: res.data.updatedUser.name, avatar: res.data.updatedUser.avatar }
  } catch (e) {
    handleServerError(e, dispatch);
    return rejectWithValue(null)
  }
});


const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isRegister: false,
    id: "",
    name: "",
    email: "",
    publicCardPacksCount: 0,
    avatar: '',
  },
  reducers: {
    isLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, setUser)
      .addCase(initializeApp.fulfilled, setUser)
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegister = action.payload.isRegister;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.avatar = action.payload.avatar;
      })
  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { login, logout, initializeApp, register, forgotPassword, setNewPassword, updateProfile };

type LoginResponse = {
  _id: string;
  name: string;
  email: string;
  publicCardPacksCount: number;
  avatar?: string;
}
type AuthState = {
  isLoggedIn: boolean;
  isRegister: boolean;
  id: string;
  name: string;
  email: string;
  publicCardPacksCount: number;
  avatar: string;
}

function setUser(state: AuthState, action: PayloadAction<LoginResponse >) {
  const { _id, name, email, publicCardPacksCount, avatar } = action.payload;
  const ava = avatar ? avatar : "";
  state.id = _id;
  state.name = name;
  state.email = email;
  state.publicCardPacksCount = publicCardPacksCount;
  state.avatar = ava;
  state.isLoggedIn = true;
}



