import { render, screen } from '@testing-library/react'
import Site from '.'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'your-test-slug',
    },
    pathname: '/',
  }),
}))

describe('Site', () => {
  it('renders without crashing', async () => {
    render(<Site>Hello, dear world</Site>)

    await screen.findByText('Hello, dear world')
    await screen.findAllByText('Barcelona')
  })
})
