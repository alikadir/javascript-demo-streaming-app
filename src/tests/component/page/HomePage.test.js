import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../../components/page/HomePage';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage Component Test', () => {
  test('Render', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const seriesElement = screen.getByText(/Popular Series/i);
    const moviesElement = screen.getByText(/Popular Movies/i);

    expect.assertions(2);
    expect(seriesElement).toBeInTheDocument();
    expect(moviesElement).toBeInTheDocument();
  });
});
