import { AppDispatch, AppRootStateType } from 'app/store';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseServerType } from "common/types";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: AppRootStateType
	dispatch: AppDispatch
	rejectValue: null | ResponseServerType
}>()
