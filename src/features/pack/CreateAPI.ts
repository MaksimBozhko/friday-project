import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://neko-back.herokuapp.com/2.0/"

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  tagTypes: ['Card'],
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (options) => ({
        url: `cards/card`,
        method: 'GET',
        params: options,
      }),
      providesTags: ['Card']
    }),
    createCard: builder.mutation({
      query: (cardBody) => ({
        url: '/cards/card',
        method: 'POST',
        body: {card: cardBody},
      }),
      invalidatesTags: ['Card']
    }),
    updateCard: builder.mutation({
      query: (cardBody) => ({
        url: '/cards/card',
        method: 'PUT',
        body: {card: cardBody},
      }),
      invalidatesTags: ['Card']
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/cards/card?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card']
    }),
  }),
})

export const { useCreateCardMutation, useGetCardsQuery, useUpdateCardMutation, useDeleteCardMutation } = cardsAPI