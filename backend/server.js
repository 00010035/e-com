const express = require("express");
const app = express();
const product = require("./data/products");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/products", (req, res) => {
  res.json(product);
});
app.get("/api/products/:id", (req, res) => {
  const object = product.find((p) => p._id === Number(req.params.id));
  res.json(object);
});
app.listen(4000, console.log("server is working"));
