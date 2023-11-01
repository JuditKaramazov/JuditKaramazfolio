import React from 'react';
import { render, screen } from '@testing-library/react';
import BrandLogo from '.';

jest.mock('next/router', () => ({
    useRouter: () => ({
      pathname: '/about',
    }),
}))

const resumeData = {
  basics: {
    name: 'judit lázaro moyano',
    label: 'developer, philologist & tightrope walker',
  },
}

describe('BrandLogo', () => {
  it('renders correctly the component main information', () => {
    render(<BrandLogo />)
    const largeTitle = screen.getByRole('heading', { name: /judit lázaro moyano/i })
    const jobTitle = screen.getByText(/developer, philologist & tightrope walker/i)

    expect(largeTitle).toBeInTheDocument()
    expect(jobTitle).toBeInTheDocument()
  })
})
