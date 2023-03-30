import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

app.use(notFound);
// error handler

app.use(errorHandler);

const PORT = process.env.PORT;
const aa = process.env.MONGO_URL;
app.listen(PORT, console.log(`server is working. ${PORT} `));
