import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchPackRequestType, ResponsePackType } from "common/types"

const baseUrl = "https://neko-back.herokuapp.com/2.0/"

export const packsAPI = createApi({
  reducerPath: 'packsAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  tagTypes: ['Pack'],
  endpoints: (builder) => ({
    getPacks: builder.query<ResponsePackType, FetchPackRequestType>({
      query: (options) => ({
        url: `cards/pack`,
        method: 'GET',
        params: options,
      }),
      providesTags: ['Pack']
    }),
    createPack: builder.mutation({
      query: (cardsPack) => ({
        url: '/cards/pack',
        method: 'POST',
        body: {cardsPack},
      }),
      invalidatesTags: ['Pack']
    }),
    updatePack: builder.mutation({
      query: (cardsPack) => ({
        url: '/cards/pack',
        method: 'PUT',
        body: {cardsPack},
      }),
      invalidatesTags: ['Pack']
    }),
    deletePack: builder.mutation({
      query: (id) => ({
        url: `/cards/pack?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pack']
    }),
  }),
})

export const { useGetPacksQuery, useCreatePackMutation, useUpdatePackMutation, useDeletePackMutation } = packsAPI