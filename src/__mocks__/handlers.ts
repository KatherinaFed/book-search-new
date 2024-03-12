// import 'vite/client';
import { HttpResponse, http } from 'msw';
import { mockResponse, mockResponseItem } from './mockResponse';

export const handlers = [
  http.get('https://www.googleapis.com/books/v1/volumes', () => {
    return HttpResponse.json(mockResponse);
  }),
  http.get('https://www.googleapis.com/books/v1/volumes/:id', () => {
    return HttpResponse.json(mockResponseItem);
  })
];
