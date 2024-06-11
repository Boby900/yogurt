import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Pricing from '@/components/Pricing'
describe('Page', () => {
  it('renders a heading', () => {
    render(<Pricing />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})