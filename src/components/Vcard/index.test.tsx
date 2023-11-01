import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Vcard from '.'

describe('Vcard', () => {
  beforeEach(() => {
    global.URL.createObjectURL = jest.fn()
  })

  it('renders correctly', () => {
    const { container } = render(<Vcard />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('starts download after clicking the button', async () => {
    render(<Vcard />)
    const button = await screen.findByText('Add to addressbook')
    fireEvent.click(button)
    await waitFor(() => global.URL.createObjectURL)
  })
})
