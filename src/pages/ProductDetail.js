import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../features/favourites/favouriteSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);

  const isFavourite = favourites.some(p => p.id === Number(id));

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(product.id));
    } else {
      dispatch(addFavourite(product));
    }
  };

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.title} style={{ width: '100%' }} />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <h4>${product.price}</h4>
              <Button variant={isFavourite ? 'danger' : 'primary'} onClick={toggleFavourite}>
                {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;