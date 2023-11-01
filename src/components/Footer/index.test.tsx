import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'

const mockMeta = {
  url: 'https://example.com',
  metaphysicalCoffee: 'https://coffee.example.com',
  bugs: 'https://bugs.example.com',
}

const mockResume = {
  basics: {
    name: 'judit lázaro moyano',
  }
}

describe('Footer', () => {
  it('renders the coffee and bug links', () => {
    render(<Footer />)
    
    const coffeeLink = screen.getByText('Coffee time?')
    const bugLink = screen.getByText('Found a bug?')
    
    expect(coffeeLink).toBeInTheDocument()
    expect(bugLink).toBeInTheDocument()
  })
  
  it('renders the copyright text', () => {
    render(<Footer />)
    
    const copyrightText = screen.getByText(/All Rights Reserved/i)
    
    expect(copyrightText).toBeInTheDocument()
  })
})
