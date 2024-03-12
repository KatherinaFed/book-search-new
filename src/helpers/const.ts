import { ContentOption, DataBookParams } from './types';

export const getQueryParams = (
  searchData: string,
  categoryData: string,
  sortData: string,
  startIndex: number
) => {
  const searchTerms = searchData === '' ? 'books' : searchData;
  const filterBy = categoryData === 'all' ? '' : `+subject=${categoryData}`;
  const orderBy = sortData === 'relevance' ? '' : `&orderBy=${sortData}`;

  return `${searchTerms}${filterBy}${orderBy}&startIndex=${startIndex}&maxResults=15`;
};

export const categories: ContentOption[] = [
  { value: 'all', name: 'All' },
  { value: 'art', name: 'Art' },
  { value: 'biography', name: 'Biography' },
  { value: 'computers', name: 'Computers' },
  { value: 'history', name: 'History' },
  { value: 'medical', name: 'Medical' },
  { value: 'poetry', name: 'Poetry' },
];

export const sortingBy: ContentOption[] = [
  { value: 'relevance', name: 'Relevance' },
  { value: 'newest', name: 'Newest' },
];

export const DEFAULT_STATE: DataBookParams = {
  searchTerms: '',
  categoryData: 'all',
  sortData: 'relevance',
  startIndex: 0,
};
