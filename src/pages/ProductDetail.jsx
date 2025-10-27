import { useParams, useNavigate } from 'react-router-dom'
import { FiStar, FiShoppingCart, FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product not found</h2>
            <button onClick={() => navigate('/products')} className="btn btn-primary">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    navigate('/cart')
  }

  const increaseQuantity = () => setQuantity(q => q + 1)
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1))

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-image-section">
            <img 
              src={product.image} 
              alt={product.name}
              className="detail-image"
            />
          </div>
          
          <div className="product-info-section">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-name">{product.name}</h1>
            
            <div className="detail-rating">
              <div className="rating-stars">
                <FiStar className="star-icon filled" />
                <span>{product.rating}</span>
                <span className="reviews">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="detail-price">${product.price.toFixed(2)}</div>
            
            <p className="detail-description">{product.description}</p>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={decreaseQuantity} className="qty-btn">
                  <FiMinus />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button onClick={increaseQuantity} className="qty-btn">
                  <FiPlus />
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button onClick={handleAddToCart} className="btn btn-primary btn-large">
                <FiShoppingCart />
                Add to Cart
              </button>
            </div>

            <div className="product-features">
              <div className="feature">
                <strong>Free Shipping</strong> on orders over $50
              </div>
              <div className="feature">
                <strong>30-Day Returns</strong> for all products
              </div>
              <div className="feature">
                <strong>Secure Payment</strong> with 256-bit encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

