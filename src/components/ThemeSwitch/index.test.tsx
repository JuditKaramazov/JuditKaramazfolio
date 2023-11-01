import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import ThemeSwitch, { getIconName } from '.'

describe('ThemeSwitch', () => {
  afterEach(cleanup)

  it('renders correctly', async () => {
    render(<ThemeSwitch />)
    const button = await screen.findByRole('combobox')
    expect(button).toBeInTheDocument()
  })

  it('allows button to be clicked', async () => {
    render(<ThemeSwitch />)
    const button = await screen.findByRole('combobox')
    fireEvent.click(button)
  })

  it('gets icons by their name', () => {
    let theme = 'light'
    const icon = getIconName(theme)
    expect(icon).toBe('Sun')

    theme = 'dark'
    const icon2 = getIconName(theme)
    expect(icon2).toBe('Moon')

    theme = 'system'
    const icon3 = getIconName(theme)
    expect(icon3).toBe('Contrast')
  })
})
