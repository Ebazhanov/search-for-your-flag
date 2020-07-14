import React from 'react';
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Search from "../components/search-field/Search";

afterEach(cleanup)

test('renders App', async () => {
    const { getByTestId} = render(<Search />);
    await waitFor(() => screen.getByRole('heading'))
    const inputFiled = getByTestId('search-field');
    expect(inputFiled).toBeInTheDocument();
});
