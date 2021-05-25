import { render, screen } from '@testing-library/react';
import App from './App';
import Button from 'elements/Button/Button'

test("should not allowed click button if disabled is present",()=>{
  const {container} = render(<Button type="link" isExternal></Button>)
  expect(container.querySelector('a')).toBeInTheDocument()
})