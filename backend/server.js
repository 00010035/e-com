import express from "express";
import product from "./data/products.js";
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: "/./../../.env" });

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
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`server is working. PORT `));
