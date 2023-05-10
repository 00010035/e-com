import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/rating";
import Message from "../components/message";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/loader";
import { listProductDetails } from "../actions/productAction";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails || {};

  const { id } = useParams();
  useEffect(() => {
    console.log(match);
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToFavoriteHandler = () => {
    navigate(`/favorite/${id}`);
    // console.log("add to favorite");
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush" style={{ borderColor: "blue" }}>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>Category: {product.category}</ListGroup.Item>
              <ListGroup.Item>Location:{product.location}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item className="text-center d-flex">
                  <Button className="primary" onClick={addToFavoriteHandler}>
                    Add to Favorite
                  </Button>
                  <Button>Contact information</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
