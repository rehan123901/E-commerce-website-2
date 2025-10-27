import { Link } from 'react-router-dom'
import { FiStar, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            className="product-image"
          />
          <div className="product-overlay">
            <button 
              className="quick-add-btn"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <FiShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-rating">
            <FiStar className="star-icon" />
            <span>{product.rating}</span>
            <span className="reviews">({product.reviews})</span>
          </div>
          <div className="product-price">${product.price.toFixed(2)}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

