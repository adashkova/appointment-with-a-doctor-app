import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';

import SearchField from '../src/containers/SearchField';

describe('SearchField component', () => {
  it('Visible SearchField', () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );
    const div = screen.getByTestId(/textField/i);
    expect(div).toBeVisible();
  });

  it('Visible SearchField Button', () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );
    const button = screen.getByTestId(/btn/i);
    expect(button).toBeTruthy();
  });
});
