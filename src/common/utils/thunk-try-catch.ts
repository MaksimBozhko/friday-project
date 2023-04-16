import { AppDispatch, AppRootStateType } from 'app/store';
import { handleServerError } from 'common/utils/handle-server-error';
import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
// import { appActions } from 'app/app.reducer';
import { ResponseServerType } from 'common/types';

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<AppRootStateType, any, AppDispatch, null | ResponseServerType>, logic: Function) => {
	const {dispatch, rejectWithValue} = thunkAPI
	// dispatch(appActions.setAppStatus({status: 'loading'}))
	try {
		return await logic()
	} catch (e) {
		handleServerError(e, dispatch)
		return rejectWithValue(null)
	} finally {
		// dispatch(appActions.setAppStatus({status: 'idle'}))
	}
}

