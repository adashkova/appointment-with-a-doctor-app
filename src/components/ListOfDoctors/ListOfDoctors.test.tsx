import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/store';

import ListOfDoctors from '.';

describe('ListOfDoctors component', () => {
  it('Visible ListOfDoctors', () => {
    render(
      <Provider store={store}>
        <Router>
          <ListOfDoctors />
        </Router>
      </Provider>
    );
    const div = screen.getByTestId(/listOfDoctors/i);
    expect(div).toBeVisible();
  });

  it('ListOfDoctors button', () => {
    render(
      <Provider store={store}>
        <Router>
          <ListOfDoctors />
        </Router>
      </Provider>
    );
    const button = screen.queryByTestId(/btnListOfDoctors/i);
    expect(button).not.toBeInTheDocument();
  });
});
