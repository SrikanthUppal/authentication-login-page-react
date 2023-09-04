// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-logout-button-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="logo-image"
      />
      <button className="btn-image" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-btn"
        />
      </button>
      <div className="nav-list-items-container">
        <ul className="nav-list-container">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Cart</li>
        </ul>
        <button type="button" className="desktop-logout-btn">
          Logout
        </button>
      </div>
    </div>
    <ul className="nav-items-icons-container">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-icon"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
          alt="nav products"
          className="nav-icon"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-icon"
        />
      </li>
    </ul>
  </nav>
)
export default Header
