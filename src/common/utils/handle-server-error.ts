import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';
import { appActions } from "app/appSlice";

/**
 * Обрабатывает ошибки сети, возникающие при отправке запросов на сервер
 * @param {unknown} e - Ошибка, которая произошла при отправке запроса на сервер
 * @param {Dispatch} dispatch - Функция dispatch из библиотеки Redux для отправки actions
 * @returns {void}
 */
export const handleServerError = (e: unknown, dispatch: Dispatch) => {
	const err = e as Error | AxiosError<{ error: string }>
	if (axios.isAxiosError(err)) {
		const error = err.response?.data.error ? err.response?.data.error : err.message
		dispatch(appActions.setAppError({error}))
	} else {
		dispatch(appActions.setAppError({error: `Native error ${err.message}`}))
	}
}
