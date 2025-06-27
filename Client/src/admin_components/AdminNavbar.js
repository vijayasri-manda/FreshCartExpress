import React, { useState } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBox, FaPlusCircle, FaShoppingBag, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Unavbar = () => {
  const get = localStorage.getItem('user');
  const userName = get ? JSON.parse(get).name : 'Admin';

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Navbar expand="lg" className={`custom-navbar ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <Navbar.Brand>
          <Link to="/uhome" className="brand-link">🛒 Grocery Web App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to="/Admin/dashboard" className="nav-item-link"><FaTachometerAlt /> Dashboard</Link>
            <Link to="/admin/users" className="nav-item-link"><FaUsers /> Users</Link>
            <Link to="/admin/all-products" className="nav-item-link"><FaBox /> Products</Link>
            <Link to="/admin/add-product" className="nav-item-link"><FaPlusCircle /> Add Product</Link>
            <Link to="/admin/orders" className="nav-item-link"><FaShoppingBag /> Orders</Link>
            <Link to="/" className="nav-item-link"><FaSignOutAlt /> Logout</Link>
            <span className="user-tag">({userName})</span>
            <Form.Check 
              type="switch"
              id="dark-mode-switch"
              label={darkMode ? <FaMoon /> : <FaSun />}
              onChange={toggleTheme}
              className="theme-toggle"
              title="Toggle Theme"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
