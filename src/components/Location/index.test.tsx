import { render } from '@testing-library/react'
import Location from '.'

jest.mock('../../hooks/useLocation', () => ({
  useLocation: () => ({
    now: {
      city: 'Barcelona',
      country_code: 'ES',
      country: 'Spain',
    },
  }),
}))

describe('Location', () => {
  it('renders location information when provided', () => {
    const { getByText } = render(<Location />)
    
    expect(getByText('Barcelona')).toBeInTheDocument()
    expect(getByText('Now')).toBeInTheDocument()
  })
})
