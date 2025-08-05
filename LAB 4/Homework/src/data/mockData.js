export const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    category: "electronics",
    image: "/images/iphone 15.jpg",
    description: "Latest iPhone with titanium design, A17 Pro chip, and pro camera system with 5x telephoto"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    category: "electronics",
    image: "/images/downloadSamsung Galaxy S24 Ultra.jpg",
    description: "Flagship Android phone with S Pen, AI features, and 200MP camera with 100x Space Zoom"
  },
  {
    id: 3,
    name: "MacBook Pro M3",
    price: 1999,
    category: "electronics",
    image: "/images/MacBook Pro M3.jpg",
    description: "Professional laptop with M3 Pro chip, 14-inch Liquid Retina XDR display, and 18-hour battery"
  },
  {
    id: 4,
    name: "Nike Air Jordan 4 Retro",
    price: 200,
    category: "shoes",
    image: "/images/Nike Air Jordan 4 Retro.jpg",
    description: "Classic basketball shoes with premium leather upper and visible Air-Sole unit"
  },
  {
    id: 5,
    name: "Adidas Ultraboost 23",
    price: 190,
    category: "shoes",
    image: "/images/Adidas Ultraboost 23.jpg",
    description: "Premium running shoes with Boost midsole technology and Primeknit upper"
  },
  {
    id: 6,
    name: "Levi's 501 Original Jeans",
    price: 98,
    category: "clothing",
    image: "/images/Levi's 501 Original Jeans.jpg",
    description: "Iconic straight-fit jeans in premium selvedge denim with button fly"
  },
  {
    id: 7,
    name: "Nike Dri-FIT Training Shirt",
    price: 45,
    category: "clothing",
    image: "/images/Nike Dri-FIT Training Shirt.jpg",
    description: "Moisture-wicking athletic shirt with modern fit and breathable fabric"
  },
  {
    id: 8,
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    category: "electronics",
    image: "/images/AirPods Pro (2nd Gen).jpg",
    description: "Wireless earbuds with active noise cancellation, spatial audio, and MagSafe charging"
  },
  {
    id: 9,
    name: "PlayStation 5 Console",
    price: 499,
    category: "electronics",
    image: "/images/PlayStation 5 Console.jpg",
    description: "Next-gen gaming console with 4K gaming, ray tracing, and ultra-fast SSD"
  },
  {
    id: 10,
    name: "Ray-Ban Aviator Classic",
    price: 154,
    category: "accessories",
    image: "/images/Ray-Ban Aviator Classic.jpg",
    description: "Iconic aviator sunglasses with crystal lenses and gold-tone metal frame"
  },
  {
    id: 11,
    name: "Apple Watch Ultra 2",
    price: 799,
    category: "electronics",
    image: "/images/Apple Watch Ultra 2.jpg",
    description: "Rugged smartwatch with titanium case, precision GPS, and 36-hour battery life"
  },
  {
    id: 12,
    name: "Converse Chuck 70 High Top",
    price: 85,
    category: "shoes",
    image: "/images/Converse Chuck 70 High Top.jpg",
    description: "Premium canvas sneakers with vintage styling and enhanced comfort"
  },
  {
    id: 13,
    name: "Sony WH-1000XM5 Headphones",
    price: 399,
    category: "electronics",
    image: "/images/Sony WH-1000XM5 Headphones.jpg",
    description: "Industry-leading noise canceling headphones with 30-hour battery life"
  },
  {
    id: 14,
    name: "Patagonia Down Jacket",
    price: 299,
    category: "clothing",
    image: "/images/Patagonia Down Jacket.jpg",
    description: "Lightweight down jacket with 800-fill recycled down and weather-resistant shell"
  },
  {
    id: 15,
    name: "Rolex Submariner Watch",
    price: 8950,
    category: "accessories",
    image: "/images/Rolex Submariner Watch.jpg",
    description: "Luxury diving watch with Oystersteel case and unidirectional rotatable bezel"
  },
  {
    id: 16,
    name: "Canon EOS R5 Camera",
    price: 3899,
    category: "electronics",
    image: "/images/Canon EOS R5 Camera.jpg",
    description: "Professional mirrorless camera with 45MP full-frame sensor and 8K video recording"
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'accessories', name: 'Accessories' }
];

export const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-100', name: 'Under $100', min: 0, max: 100 },
  { id: '100-300', name: '$100 - $300', min: 100, max: 300 },
  { id: '300-1000', name: '$300 - $1,000', min: 300, max: 1000 },
  { id: '1000-5000', name: '$1,000 - $5,000', min: 1000, max: 5000 },
  { id: 'over-5000', name: 'Over $5,000', min: 5000, max: Infinity }
];
