import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onRemove, showRemove }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ objectFit: 'contain', height: '200px' }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '1rem' }}>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>

        <Link to={`/product/${product.id}`}>
          <Button variant="primary" className="me-2">
            View
          </Button>
        </Link>

        {showRemove && (
          <Button variant="danger" onClick={() => onRemove(product.id)}>
            Remove
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;