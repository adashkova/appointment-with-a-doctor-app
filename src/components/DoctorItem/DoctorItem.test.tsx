import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/store';

import DoctorItem from '.';

describe('DoctorItem component', () => {
  it('IsDisabled or visible', () => {
    render(
      <Provider store={store}>
        <Router>
          <DoctorItem
            idx={5}
            doctor={{
              id: 6,
              avatar:
                'https://media.istockphoto.com/vectors/doctor-icon-design-vector-id1163876251?k=20&m=1163876251&s=612x612&w=0&h=3uVSSBeevGWRNiBqEUoYP7Q1rzEFxijL1s-CuobbAFU=',
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
  });
});
