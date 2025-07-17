import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../features/favourites/favouriteSlice';
import ProductCard from '../components/productCard';

const Favourites = () => {
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const removeFromFavourites = (id) => {
    dispatch(removeFavourite(id));
  };

  return (
    <Container className="mt-4">
      <h2>Favourite Products</h2>
      {favourites.length === 0 ? (
        <Alert variant="info" className="mt-3">
          No products in favourites.
        </Alert>
      ) : (
        <Row>
          {favourites.map(product => (
  <Col md={4} className="mb-3" key={product.id}>
    <ProductCard
      product={product}
      onRemove={removeFromFavourites}
      showRemove={true}
    />
  </Col>
))}
        </Row>
      )}
    </Container>
  );
};

export default Favourites;