import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreateCardRequestType, FetchCardRequestType, ResponseCardsType, UpdateCardRequestType } from "common/types"

const baseUrl = "https://neko-back.herokuapp.com/2.0/"

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  tagTypes: ['Card'],
  endpoints: (builder) => ({
    getCards: builder.query<ResponseCardsType, FetchCardRequestType>({
      query: (options) => ({
        url: `cards/card`,
        method: 'GET',
        params: options,
      }),
      providesTags: ['Card']
    }),
    createCard: builder.mutation<any, CreateCardRequestType>({
      query: (cardBody) => ({
        url: '/cards/card',
        method: 'POST',
        body: {card: cardBody},
      }),
      invalidatesTags: ['Card']
    }),
    updateCard: builder.mutation<any, UpdateCardRequestType>({
      query: (cardBody) => ({
        url: '/cards/card',
        method: 'PUT',
        body: {card: cardBody},
      }),
      invalidatesTags: ['Card']
    }),
    deleteCard: builder.mutation<any, string>({
      query: (id) => ({
        url: `/cards/card?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card']
    }),
  }),
})

export const { useCreateCardMutation, useGetCardsQuery, useUpdateCardMutation, useDeleteCardMutation } = cardsAPI