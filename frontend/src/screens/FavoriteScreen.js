import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Message from "../components/message.js";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteAction";

const FavoriteScreen = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productId = id;

  const favorite = useSelector((state) => state.favorite);
  const { favoriteItems } = favorite;

  useEffect(() => {
    if (productId) {
      dispatch(addToFavorite(productId));
    }
  }, [dispatch, productId]);

  const removeFromFavoriteHandler = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <Row>
      <Col>
        <h1>Favorite Items</h1>
        {favoriteItems.length === 0 ? (
          <Message>
            Your favorite list is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {favoriteItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={5}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>

                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => dispatch(removeFromFavorite(item.product))}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default FavoriteScreen;
