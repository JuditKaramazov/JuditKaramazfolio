import { render } from '@testing-library/react'
import Availability from '.'

describe('Availability', () => {
  it('renders correctly from data file values', () => {
    const { container } = render(<Availability />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
