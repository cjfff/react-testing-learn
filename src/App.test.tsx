import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('url is correct', async () => {
  render(<App />);
  const linkElement = (await screen.getByTestId(
    "learn-link"
  )) as HTMLLinkElement;
  expect(linkElement.href).toContain('cjfff')
});
