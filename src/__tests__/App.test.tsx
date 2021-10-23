import { render } from '@testing-library/react';
import App from '../App';

test('finds page links', () => {
  const { getByText } = render(<App />);
  const linkElement1 = getByText(/hem/i);
  const linkElement2 = getByText(/skattekonto qr/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
