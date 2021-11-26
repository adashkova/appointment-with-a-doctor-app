import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { NavBar } from '../../pageLayouts/navBar'

describe('Navbar component', () => {
  it('Is rendered NavBar', () => {
    render(<NavBar />)
    const div = screen.getByTestId(/NavBar/i)
    expect(div).toBeTruthy()
  })

  it('isVisible NavBar', () => {
    render(<NavBar />)
    const div = screen.queryByTestId(/NavBar/i)
    expect(div).toBeVisible()
  })
})
