import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';

function ProductList() {
  const dispatch = useDispatch();
  const { items, categories } = useSelector(state => state.products);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filtered = items
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (category ? p.category === category : true))
    .sort((a, b) =>
      sort === 'asc' ? a.price - b.price : sort === 'desc' ? b.price - a.price : 0
    );

  return (
    <Container>
      <h2 className="my-4">Product Dashboard</h2>
      <Form className="mb-3">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search by title"
              onChange={e => setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select onChange={e => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map(c => (
                <option key={c}>{c}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select onChange={e => setSort(e.target.value)}>
              <option value="">Sort by price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      <Row>
      {filtered.map(product => (
  <Col md={4} className="mb-3" key={product.id}>
    <ProductCard product={product} />
  </Col>
))}
      </Row>
    </Container>
  );
}

export default ProductList;