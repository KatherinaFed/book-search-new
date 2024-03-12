// import 'vite/client';
import { describe, expect, it } from 'vitest';
import { mockServer } from '../__mocks__/mockServer';
import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
import { useGetAllBooksQuery, useGetBookByIdQuery } from './bookService';
import { HttpResponse, http } from 'msw';
import { mockResponse, mockResponseItem } from '../__mocks__/mockResponse';

const server = mockServer();

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

describe('book service API', () => {
  it('should GET all data', async () => {
    server.use(
      http.get(`https://www.googleapis.com/books/v1/volumes?q=books`, () => {
        return HttpResponse.json(mockResponse);
      })
    );

    const { result } = renderHook(
      () =>
        useGetAllBooksQuery({
          searchTerms: '',
          categoryData: '',
          sortData: '',
          startIndex: 0,
        }),
      {
        wrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual(mockResponse);
    });
  });

  it('should GET a book by ID', async () => {
    server.use(
      http.get(
        'https://www.googleapis.com/books/v1/volumes/:id',
        ({ params }) => {
          const { id } = params;
          
          expect(id).toEqual('123');

          return HttpResponse.json(mockResponseItem);
        }
      )
    );

    const { result } = renderHook(() => useGetBookByIdQuery('123'), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual(mockResponseItem);
    });
  });
});
