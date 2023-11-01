import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  it('renders correctly', async () => {
    render(<Header currentSlug={''} />)

    await screen.findByText('judit lázaro moyano')
    await screen.findAllByText('Barcelona')
  })

  it('renders small', async () => {
    render(<Header small currentSlug={''} />)
  })
})
