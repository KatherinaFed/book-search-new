import { fireEvent, render, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SearchForm from './SearchForm';
import React from 'react';

describe('SearchForm', () => {
  const setSearchDataMock = vi.fn();
  const setStartIndexMock = vi.fn();

  const { getByPlaceholderText, getByRole } = render(
    <SearchForm
      setSearchData={setSearchDataMock}
      setStartIndex={setStartIndexMock}
    />
  );

  it('should have input and button', () => {
    const inputElement = getByPlaceholderText(/Search a book.../i);
    const buttonElement = getByRole('button');

    expect(inputElement).toBeDefined();
    expect(buttonElement).toBeDefined();
  });

  it('should submit a form with data', async () => {
    const testInput = 'Harry Potter';

    vi.spyOn(React, 'useState').mockImplementationOnce((init?: string) => [
      init,
      setSearchDataMock,
    ]);

    const inputElement = getByPlaceholderText(/Search a book.../i);
    inputElement.focus();
    await userEvent.type(inputElement, testInput);

    const buttonElement = getByRole('button');
    await userEvent.click(buttonElement);

    await waitFor(() => {
      expect(setSearchDataMock).toHaveBeenCalledWith(testInput);
      expect(setStartIndexMock).toHaveBeenCalledWith(0);
      expect(inputElement.getAttribute('value')).toBe('');
    });
  });
});
