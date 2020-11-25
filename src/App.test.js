import { render, screen } from '@testing-library/react';
import Kennel from './Kennel';

test('renders learn react link', () => {
  render(<Kennel />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
