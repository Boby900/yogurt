import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

test('Page', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: `  The internet's coolest creator <br /> teams use Yogurt.` })).toBeDefined()
})