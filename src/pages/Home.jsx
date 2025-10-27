import { Link } from 'react-router-dom'
import { FiArrowRight, FiTrendingUp, FiShield, FiTruck } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Home.css'

const Home = () => {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover Premium Products
              <span className="gradient-text"> For Your Lifestyle</span>
            </h1>
            <p className="hero-description">
              Shop the latest trends in electronics, fashion, and home essentials. 
              Quality products with exceptional service.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Shop Now
                <FiArrowRight />
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FiTruck />
              </div>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <h3>Best Prices</h3>
              <p>Competitive pricing guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/products" className="view-all-link">
              View All <FiArrowRight />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

