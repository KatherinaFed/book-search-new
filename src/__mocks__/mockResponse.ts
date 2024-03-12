export const mockResponse = {
  kind: 'books#volumes',
  totalItems: 100,
  items: [
    {
      kind: 'books#volume',
      id: 'N0EEAAAAMBAJ',
      etag: 'VEydPFPCGik',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/N0EEAAAAMBAJ',
      volumeInfo: {
        title: 'Some book',
        publishedDate: '1936-11-23',
        description: 'some description',
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 50,
        printType: 'MAGAZINE',
        categories: ['true crime'],
        averageRating: 4,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        authors: ['John Doe'],
        contentVersion: 'some version',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?smallThumbnail',
          thumbnail: 'http://books.google.com/books/content?thumbnail',
        },
        language: 'en',
        previewLink: 'http://books.google.de/books?preview',
        infoLink: 'http://books.google.de/books?infoLink',
        canonicalVolumeLink:
          'https://books.google.com/books/about/canonicalVolumeLink',
      },
      saleInfo: {
        country: 'DE',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'DE',
        viewability: 'ALL_PAGES',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?webReaderLink',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: 'some textSnippet',
      },
    },
  ],
};

export const mockResponseItem = {
  kind: 'books#volume',
  id: '123',
  etag: 'VEydPFPCGik',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/N0EEAAAAMBAJ',
  volumeInfo: {
    title: 'Some book',
    publishedDate: '1936-11-23',
    description: 'some description',
    readingModes: {
      text: false,
      image: true,
    },
    pageCount: 50,
    printType: 'MAGAZINE',
    categories: ['true crime'],
    averageRating: 4,
    ratingsCount: 4,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    authors: ['John Doe'],
    contentVersion: 'some version',
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?smallThumbnail',
      thumbnail: 'http://books.google.com/books/content?thumbnail',
    },
    language: 'en',
    previewLink: 'http://books.google.de/books?preview',
    infoLink: 'http://books.google.de/books?infoLink',
    canonicalVolumeLink:
      'https://books.google.com/books/about/canonicalVolumeLink',
  },
  saleInfo: {
    country: 'DE',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'DE',
    viewability: 'ALL_PAGES',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink: 'http://play.google.com/books/reader?webReaderLink',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet: 'some textSnippet',
  },
};
