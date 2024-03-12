import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// For unit tests
export const mockServer = () => {
  const server = setupServer(...handlers);

  // Enable the API mocking before tests.
  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());
  
  // Disable the API mocking after the tests finished.
  afterAll(() => server.close());

  return server;
};
