export interface BookItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    description: string;
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories?: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
}

export interface BookResponse {
  kind: string;
  totalItems: number;
  items: BookItem[];
}

export interface DataBookParams {
  searchTerms: string;
  categoryData: string;
  sortData: string;
  startIndex: number;
}

export interface ContentOption {
  value: string;
  name: string;
}

export interface SearchBaseProps {
  setFilterBy: (value: string) => void;
  filterBy: string;
  setOrderBy: (value: string) => void;
  orderBy: string;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}
