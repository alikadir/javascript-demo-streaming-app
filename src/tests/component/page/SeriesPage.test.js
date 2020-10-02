import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SeriesPage from '../../../components/page/SeriesPage';

describe('SeriesPage Component Test', () => {
  test('Render and Fetch Data', async () => {
    render(
      <MemoryRouter>
        <SeriesPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const list = screen.getAllByTestId('card-id');
      expect(list.length).toBeGreaterThanOrEqual(21);
    });
  });
});
