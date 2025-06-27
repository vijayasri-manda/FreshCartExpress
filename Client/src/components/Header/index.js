import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaBox,
  FaHistory,
  FaUsers,
  FaPlusCircle,
  FaListAlt,
  FaTruck,
  FaLeaf
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(5); // Example cart count

  const navigate = useNavigate();

  const userToken = Cookies.get('jwtToken');
  const adminToken = localStorage.getItem('adminJwtToken');
  const sellerToken = localStorage.getItem('sellerToken');

  const promotions = [
    '🚚 FREE Delivery on Orders Over ₹500',
    '🔥 Flash Sale: 50% OFF on Organic Fruits!',
    '🎉 New Users Get 20% OFF First Order',
    '🥦 Fresh Produce Delivery Within 2 Hours'
  ];

  useEffect(() => {
    // Role detection
    if (adminToken) {
      setIsAdmin(true);
      setIsSeller(false);
      setIsUser(false);
    } else if (sellerToken) {
      setIsAdmin(false);
      setIsSeller(true);
      setIsUser(false);
    } else if (userToken) {
      setIsAdmin(false);
      setIsSeller(false);
      setIsUser(true);
    } else {
      setIsAdmin(false);
      setIsSeller(false);
      setIsUser(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [adminToken, sellerToken, userToken]);

  const onLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      Cookies.remove('jwtToken');
      localStorage.removeItem('adminJwtToken');
      localStorage.removeItem('sellerToken');
      setIsAdmin(false);
      setIsSeller(false);
      setIsUser(false);
      navigate('/login');
    }
  };

  return (
    <>
      {/* Promotional Marquee */}
      {!isAdmin && (
        <div className="promo-banner">
          <div className="marquee-content">
            {promotions.map((text, index) => (
              <span key={index} className="marquee-item">
                {text} &nbsp; • &nbsp;
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        fixed="top"
        expand="lg"
        className={`navbar-main ${scrolled ? 'navbar-scrolled' : ''} ${
          isAdmin ? 'navbar-admin' : isSeller ? 'navbar-seller' : 'navbar-user'
        }`}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to={
              isAdmin
                ? '/admin/dashboard'
                : isSeller
                ? '/seller/dashboard'
                : '/'
            }
            className="navbar-brand"
          >
            <div className="app-name">
              <span className="brand-first">FreshCart</span>
              <span className="brand-express">Express</span>
              <FaTruck className="truck-icon" />
              <FaLeaf className="leaf-icon" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">

              {/* Admin Nav Items */}
              {isAdmin && (
                <>
                  <Nav.Link as={NavLink} to="/admin/dashboard" className="nav-link highlight-item">
                    <FaHome className="nav-icon" /> <span className="nav-text">Dashboard</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/admin/all-products" className="nav-link highlight-item">
                    <FaBox className="nav-icon" /> <span className="nav-text">Products</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/admin/orders" className="nav-link highlight-item">
                    <FaHistory className="nav-icon" /> <span className="nav-text">Orders</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/admin/users" className="nav-link highlight-item">
                    <FaUsers className="nav-icon" /> <span className="nav-text">Users</span>
                  </Nav.Link>
                </>
              )}

              {/* Seller Nav Items */}
              {isSeller && !isAdmin && (
                <>
                  <Nav.Link as={NavLink} to="/seller/dashboard" className="nav-link highlight-item">
                    <FaHome className="nav-icon" /> <span className="nav-text">Dashboard</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/seller/add-product" className="nav-link highlight-item">
                    <FaPlusCircle className="nav-icon" /> <span className="nav-text">Add Product</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/seller/products" className="nav-link highlight-item">
                    <FaListAlt className="nav-icon" /> <span className="nav-text">My Products</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/seller/orders" className="nav-link highlight-item">
                    <FaHistory className="nav-icon" /> <span className="nav-text">Orders</span>
                  </Nav.Link>
                </>
              )}

              {/* User Nav Items */}
              {isUser && !isAdmin && !isSeller && (
                <>
                  <Nav.Link as={NavLink} to="/" className="nav-link highlight-item">
                    <FaHome className="nav-icon" /> <span className="nav-text">Home</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/my-cart" className="nav-link highlight-item">
                    <div className="cart-container">
                      <FaShoppingCart className="nav-icon cart-icon" />
                      {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                      )}
                    </div>
                    <span className="nav-text">My Cart</span>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/my-orders" className="nav-link highlight-item">
                    <FaHistory className="nav-icon" /> <span className="nav-text">My Orders</span>
                  </Nav.Link>
                </>
              )}

              {/* No one logged in */}
              {!isAdmin && !isSeller && !isUser && (
                <div className="d-flex login-buttons">
                  <Button
                    variant="outline-light"
                    as={Link}
                    to="/login"
                    className="me-2 login-btn gradient-btn shake-on-hover"
                  >
                    <FaUser /> <span className="btn-text">User Login</span>
                  </Button>
                  <Button
                    variant="outline-light"
                    as={Link}
                    to="/seller/login"
                    className="me-2 login-btn gradient-btn shake-on-hover"
                  >
                    <FaUser /> <span className="btn-text">Seller Login</span>
                  </Button>
                  <Button
                    variant="light"
                    as={Link}
                    to="/admin/login"
                    className="admin-login-btn gradient-btn pulse-on-hover"
                  >
                    <span className="btn-text">Admin Portal</span>
                  </Button>
                </div>
              )}

              {/* Logout */}
              {(isAdmin || isSeller || isUser) && (
                <Button
                  onClick={onLogout}
                  className="logout-btn gradient-btn shake-on-hover"
                >
                  <FaSignOutAlt /> <span className="btn-text">Logout</span>
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
