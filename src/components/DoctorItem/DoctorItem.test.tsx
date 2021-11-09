import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/store';

import DoctorItem from '.';

describe('DoctorItem component', () => {
  it('IsDisabled or visible or notEmpty Link', () => {
    render(
      <Provider store={store}>
        <Router>
          <DoctorItem
            idx={5}
            doctor={{
              id: 6,
              name: 'Oliver Garcia',
              speciality: 'Osteopaths',
              clients: [],
            }}
          />
        </Router>
      </Provider>
    );
    const div = screen.getByTestId(/DoctorLink/i);
    expect(div).toBeVisible();
    expect(div).not.toBeDisabled();
    expect(div).not.toBeEmptyDOMElement();
  });
});
