const Product = require("../model/Product");

//add new product
const product_create = async (req, res) => {
  const data = req.body;
  const product = new Product({
    title: data.title,
    price: data.price,
    image: data.image,
    details: data.details
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update product
const product_update = async (req, res) => {
  const data = req.body;
  try {
    const product = {
      title: data.title,
      price: data.price,
      image: data.image,
      details: data.details
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.send(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

//Get all product
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

// get single product
const product_single = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {}
};

//delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  product_single,
  product_all,
  product_create,
  product_update,
  product_delete
};
