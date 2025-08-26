require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Schemas
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [String],
  variants: [{ size: String, color: String, stock: Number }],
  category: String
});
const Product = mongoose.model('Product', productSchema);

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  variant: { size: String, color: String },
  quantity: Number
});

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [cartItemSchema]
});
const Cart = mongoose.model('Cart', cartSchema);

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  variant: { size: String, color: String },
  quantity: Number,
  price: Number
});

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [orderItemSchema],
  status: { type: String, default: 'pending' },
  address: String,
  payment: String,
  createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', orderSchema);

// Product endpoints
app.get('/api/products', async (req, res) => {
  const { search = '', category = '', page = 1, limit = 10 } = req.query;
  const query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (category) query.category = category;
  const products = await Product.find(query).skip((page-1)*limit).limit(Number(limit));
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// Cart endpoints
app.get('/api/cart/:userId', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.product');
  res.json(cart || { items: [] });
});

app.post('/api/cart/:userId', async (req, res) => {
  let cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) cart = new Cart({ userId: req.params.userId, items: [] });
  cart.items = req.body.items;
  await cart.save();
  res.json(cart);
});

// Order endpoints
app.post('/api/orders', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

app.get('/api/orders/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

app.put('/api/orders/:orderId', async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
  res.json(order);
});

app.listen(process.env.PORT || 3003, () => {
  console.log('E-commerce server running');
});
