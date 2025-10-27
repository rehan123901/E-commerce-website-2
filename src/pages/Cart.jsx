import { Link } from 'react-router-dom'
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <FiShoppingBag className="empty-icon" />
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      <FiMinus />
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                    aria-label="Remove item"
                  >
                    <FiTrash2 />
                  </button>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Items ({getTotalItems()})</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{getTotalPrice() > 50 ? 'Free' : '$9.99'}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${(getTotalPrice() + (getTotalPrice() > 50 ? 0 : 9.99)).toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-primary btn-block">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

