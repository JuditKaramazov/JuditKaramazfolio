import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ScrollToTop from '.'

describe('ScrollToTop', () => {
  it('can be correctly clicked before it scrolls back to top', () => {
    const { container } = render(<ScrollToTop />);
    const scrollToTopButton = container.querySelector('.up')

    fireEvent.click(scrollToTopButton)

    expect(scrollToTopButton).toHaveStyle({ display: 'none' })
  })
})
