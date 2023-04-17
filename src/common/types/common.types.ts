
//error types
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

//card types
export type ResponseCardsType = {
	cards: CardType[]
	cardsTotalCount: number
	maxGrade: number
	minGrade: number
	page: number
	pageCount: number
	packUserId: string
}
export type CardType = {
	answer: string
	question: string
	cardsPack_id: string
	grade: number
	shots: number
	user_id: string
	created: string
	updated: string
	_id: string
}

//pack types
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