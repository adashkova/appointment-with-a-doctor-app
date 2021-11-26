import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../store'

import SearchField from '../containers/searchField'

describe('SearchField component', () => {
  it('Visible SearchField', () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>,
    )
    const div = screen.getByTestId(/textField/i)
    expect(div).toBeVisible()
  })

  it('Visible SearchField Button', () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>,
    )
    const button = screen.getByTestId(/btn/i)
    expect(button).toBeTruthy()
  })
})
