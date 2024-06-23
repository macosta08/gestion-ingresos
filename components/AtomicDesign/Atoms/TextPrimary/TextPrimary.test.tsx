import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextPrimary from '.'

test('renders the correct text', () => {
  const text = 'Hello, World!'
  render(<TextPrimary text={text} />)
  
  const headingElement = screen.getByText(text)
  
  expect(headingElement).toBeInTheDocument()
})


