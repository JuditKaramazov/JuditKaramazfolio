import React from 'react'
import { render, screen } from '@testing-library/react'
import Overview from '.'

describe('Overview', () => {
  it('renders correctly', () => {
    render(<Overview />);
    
    const sectionTitle = screen.getByText('/overview')
    expect(sectionTitle).toBeInTheDocument()
    
    const technologies = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Python', 'Swift', 'React', 'Astro', 'Next.js', 'Jest', 'Cafelito ☕️']
    technologies.forEach((tech) => {
      const techElement = screen.getByText(tech)
      expect(techElement).toBeInTheDocument()
    })

    const downloadCVLink = screen.getByText('Download CV')
    expect(downloadCVLink).toBeInTheDocument()
    expect(downloadCVLink).toHaveAttribute('href', '/JuditKaramazovCV.pdf')
  })
})
