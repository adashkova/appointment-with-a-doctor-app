import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import SpecialityFiltration from '../../containers/specialityFiltration'
import store from '../../store'

describe('SpecialityFiltration component', () => {
  test('rendered specialityFiltration', () => {
    render(
      <Provider store={store}>
        <SpecialityFiltration />
      </Provider>,
    )
    const select = screen.getByTestId(/specialityFiltration/i)
    expect(select).toBeVisible()
  })
})
