import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import ProfileForm from '../src/components/Form'

test('Page', () => {
  render(<Home />)
  expect(screen.getAllByText(/yogurt/i)).toBeDefined()
})
test('Form', () => {
  render(<ProfileForm />)
  expect(screen.getAllByText(/yogurt/i)).toBeDefined()
})