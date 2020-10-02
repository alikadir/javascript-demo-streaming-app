import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../components/app/App';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/dom';

describe('Application Main Test', () => {
  test('Render', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const selectedElement = screen.getByText(/DEMO Streaming/i);
    expect(selectedElement).toBeInTheDocument();
  });
  test('Click Series Button and Fetch All Series', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const seriesElement = screen.getByText(/Popular Series/i);
    seriesElement.click();
    await waitFor(() => {
      const list = screen.getAllByTestId('card-id');
      expect(list.length).toBeGreaterThanOrEqual(21);
    });
  });
});
