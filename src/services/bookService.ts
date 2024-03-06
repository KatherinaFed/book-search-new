import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BooksResponse, DataBookParams } from '../helpers/types';
import { getQueryParams } from '../helpers/const';

export const bookServiceApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    // GET ALL BOOKS
    getAllBooks: builder.query<BooksResponse[], void>({
      query: () => '/volumes?q=books',
      providesTags: ['Books'],
    }),
    // GET BOOKS BY SEARCH PARAMS
    getBooksBySearch: builder.query<BooksResponse[], DataBookParams>({
      query: (dataParams) => {
        const queryParams = getQueryParams(
          dataParams.searchTerms,
          dataParams.categoryData,
          dataParams.sortData,
          dataParams.startIndex
        );

        return {
          url: `volumes?q=${queryParams}&key=${
            import.meta.env.VITE_APP_API_KEY
          }`,
          params: {
            startIndex: 0,
            maxResults: 30,
          },
        };
      },
      providesTags: ['Books'],
    }),
    // GET A BOOK BY ID
    getBookById: builder.query<BooksResponse, string>({
      query: (bookID) =>
        `volumes/${bookID}?key=${import.meta.env.VITE_APP_API_KEY}`,
      providesTags: ['Books'],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBooksBySearchQuery,
  useGetBookByIdQuery,
} = bookServiceApi;
