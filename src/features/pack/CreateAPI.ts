import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://neko-back.herokuapp.com/2.0/"

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (options) => ({
        url: `cards/card`,
        method: 'GET',
        params: options,
      }),
    }),
    createCard: builder.mutation({
      query: (cardBody) => ({
        url: '/cards/card',
        method: 'POST',
        body: {card: cardBody},
      }),
    }),
  }),
})

export const { useCreateCardMutation, useGetCardsQuery } = cardsAPI