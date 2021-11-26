import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from '../../components/forms/appointmentForm'

describe('AppointmentForm component', () => {
  it('on initial render appointment form is visible', () => {
    render(<AppointmentForm />)
    const form = screen.getByTestId(/appointmentForm/i)
    expect(form).toBeVisible()
  })

  it('on initial render first name input is visible', () => {
    render(<AppointmentForm />)
    const input = screen.queryByTestId(/firstNameInput/i)
    expect(input).toBeVisible()
  })

  it('if data is entered button is anabled', async () => {
    render(<AppointmentForm />)

    await act(async () => {
      userEvent.type(screen.getByTestId(/timePicker/i), '11:15 am')
      userEvent.type(screen.getByTestId(/datePicker/i), '11 09 2021')
      userEvent.type(screen.getByPlaceholderText(/First Name/i), 'Mary')
      userEvent.type(screen.getByPlaceholderText(/Last Name/i), 'Smith')
    })

    expect(screen.getByRole('button').getAttribute('disabled')).toBe('')
  })

  it('on initial render last name input is visible', () => {
    render(<AppointmentForm />)
    const input = screen.queryByTestId(/lastNameInput/i)
    expect(input).toBeVisible()
  })

  it('on initial render Date picker is visible', () => {
    render(<AppointmentForm />)
    const datePicker = screen.queryByTestId(/datePicker/i)
    expect(datePicker).toBeVisible()
  })

  it('on initial render Time picker is visible', () => {
    render(<AppointmentForm />)
    const datePicker = screen.queryByTestId(/timePicker/i)
    expect(datePicker).toBeVisible()
  })

  it('on initial render submit button is visible', async () => {
    render(<AppointmentForm />)
    const button = await screen.findByRole('button')
    expect(button).toBeVisible()
  })

  it('on initial render submit button is disabled', async () => {
    render(<AppointmentForm />)
    const button = await screen.findByRole('button')
    expect(button).toBeDisabled()
  })
})
