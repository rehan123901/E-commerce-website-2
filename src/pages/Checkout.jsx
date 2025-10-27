import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Checkout.css'

const Checkout = () => {
  const navigate = useNavigate()
  const { items, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order processing
    setTimeout(() => {
      clearCart()
      setOrderPlaced(true)
    }, 1000)
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <FiCheckCircle className="success-icon" />
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
            <button onClick={() => navigate('/')} className="btn btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    navigate('/cart')
    return null
  }

  const shipping = getTotalPrice() > 50 ? 0 : 9.99
  const total = getTotalPrice() + shipping

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>
        
        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <section className="form-section">
              <h2>Shipping Information</h2>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2>Payment Information</h2>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </section>

            <button type="submit" className="btn btn-primary btn-large btn-block">
              Place Order
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {items.map(item => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

