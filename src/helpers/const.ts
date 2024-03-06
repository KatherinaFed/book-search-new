export const getQueryParams = (
  searchData: string,
  categoryData: string,
  sortData: string,
  startIndex: number
) => {
  const searchTerms = searchData === '' ? 'books' : searchData;
  const filterBy = categoryData === 'all' ? '' : `+subject=${categoryData}`;
  const orderBy = sortData === 'relevance' ? '' : `&orderBy=${sortData}`;

  return `${searchTerms}${filterBy}${orderBy}&startIndex=${startIndex}`;
};
