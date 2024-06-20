import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProfileForm from '@/components/Form'
import {expect, jest, test} from '@jest/globals';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers

describe('Home', () => {
  it('renders a heading', () => {
    render(<ProfileForm />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})