import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from '.';

describe('Navbar component', () => {
  it('Is rendered NavBar', () => {
    render(<Navbar />);
    const div = screen.getByTestId(/NavBar/i);
    expect(div).toBeTruthy();
  });

  it('isVisible NavBar', () => {
    render(<Navbar />);
    const div = screen.queryByTestId(/NavBar/i);
    expect(div).toBeVisible();
  });
});
