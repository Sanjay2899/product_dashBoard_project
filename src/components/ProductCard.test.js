import { render, screen } from '@testing-library/react';
import ProductCard from '../components/productCard';

const product = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  image: 'https://via.placeholder.com/150',
};

test('renders product card', () => {
  render(<ProductCard product={product} />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
});
