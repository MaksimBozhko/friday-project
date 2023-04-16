type FieldErrorType = {
	error: string
	field: string
}

export type ResponseServerType<D = {}> = {
	resultCode: number
	messages: Array<string>
	data: D
	fieldsErrors: FieldErrorType[]
}

