// import Rating from "./components/rating";

const products = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    description: "Product 1 description",
    image: "/images/product-1.jpg",
    category: "Sell",
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    description: "Product 2 description",
    image: "/images/product-2.jpg",
    category: "Rent",
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    description: "Product 3 description",
    image: "/images/product-3.jpg",
    category: "Sell",
    rating: 5,
    numReviews: 10,
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    description: "Product 4 description",
    image: "/images/product-4.jpg",
    category: "Rent",
    rating: 4.0,
    numReviews: 10,
  },
  {
    _id: 5,
    name: "Product 5",
    price: 500,
    description: "Product 5 description",
    image: "/images/product-5.jpg",
    category: "Sell",
    rating: 2.5,
    numReviews: 10,
  },
  {
    __id: 6,
    name: "Product 6",
    price: 600,
    description: "Product 6 description",
    image: "/images/product-6.jpg",
    category: "Rent",
    rating: 1.5,
    numReviews: 10,
  },
];

module.exports = products;
