import { Link } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Header.css'

const Header = () => {
  const { getTotalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemCount = getTotalItems()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">ShopHub</span>
          </Link>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/cart" className="cart-link" onClick={() => setMobileMenuOpen(false)}>
              <FiShoppingCart />
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </Link>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

