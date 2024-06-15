import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Pricing from '@/components/Pricing'
import ProfileForm from '@/components/Form'
describe('Pricing', () => {
  it('renders a pricing', () => {
    render(<ProfileForm />)
 
    const heading = screen.getByLabelText('title')
 
    expect(heading).toBeInTheDocument()
  })
})