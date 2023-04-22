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

export type FetchPackRequestType = Partial<{
	packName: string
	user_id: string
	min: number
	max: number
	page: number
	pageCount: string
	sortPacks: any
}>

export type CreatePackRequestType = Partial<{
	name: string
	deckCover: string
	private: boolean
}>

export type UpdatePackRequestType = Partial<{
	_id: string
	name: string
}>

//card types

export type FetchCardRequestType = {
	cardsPack_id: string
	cardAnswer?: string
	cardQuestion?: string
	min?: number
	max?: number
	page?: number
	pageCount?: number
	sortCards?: any
}

export type CreateCardRequestType = Partial<{
	cardsPack_id: string
	question: string
	answer: string
	grade?: number
	shots?: number
	answerImg?: string
	questionImg?: string
	questionVideo?: string
	answerVideo?:string
}>

export type UpdateCardRequestType = Partial<{
	_id: string
	question: string
	answer: string
	grade?: number
	shots?: number
	answerImg?: string
	questionImg?: string
	questionVideo?: string
	answerVideo?:string
}>