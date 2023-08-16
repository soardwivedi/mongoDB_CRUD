const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

//connect to db
mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("connected to db"));
// console.log("connected to db.");

//import routes
const productRoutes = require("./routes/product");

//Middlewares
app.use(express.json());

// route Middlewares
app.use("/api/products", productRoutes);

let port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// change in code.
