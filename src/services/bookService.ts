import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookItem, BookResponse, DataBookParams } from '../helpers/types';
import { getQueryParams } from '../helpers/const';
import noImg from '../assets/noImg.jpg';

export const bookServiceApi = createApi({
  reducerPath: 'books',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    // GET ALL BOOKS
    getAllBooks: builder.query<BookResponse, DataBookParams>({
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
        };
      },
      transformResponse: (response: BookResponse) => {
        return {
          ...response,
          items: response.items.map((book: BookItem) => {
            book.volumeInfo.categories = book.volumeInfo.categories || [''];
            book.volumeInfo.authors = book.volumeInfo.authors || [''];
            book.volumeInfo.imageLinks = book.volumeInfo.imageLinks || {
              thumbnail: noImg,
            };

            return book;
          }),
        };
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.startIndex) {
          const updatedCache = {
            ...currentCache,
            totalItems: newItems.totalItems,
            items: [...currentCache.items, ...newItems.items],
          };
      
          return updatedCache;
        }

        if (arg.categoryData || arg.searchTerms || arg.sortData) {
          return newItems;
        }

        return currentCache;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.startIndex !== previousArg?.startIndex
      },
      providesTags: ['Books'],
    }),
    // GET A BOOK BY ID
    getBookById: builder.query<BookItem, string>({
      query: (bookID) =>
        `volumes/${bookID}?key=${import.meta.env.VITE_APP_API_KEY}`,
      providesTags: ['Books'],
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery } = bookServiceApi;
