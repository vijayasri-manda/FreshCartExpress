
import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../components/Header';

const commonFields = [
  { controlId: 'email', label: 'Email', type: 'email' },
  { controlId: 'password', label: 'Password', type: 'password' },
];

const SellerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const sellerToken = localStorage.getItem('sellerToken'); // ✅ Fixed: Match with Header.js

  useEffect(() => {
    if (sellerToken) {
      navigate('/seller/dashboard'); // ✅ Ensure route exists
    }
  }, [navigate, sellerToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5100/seller-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.sellerToken) {
          localStorage.setItem('sellerToken', data.sellerToken); // ✅ Consistent key
          localStorage.setItem('sellerId', data.seller._id);
          localStorage.setItem('sellerName', data.seller.firstname);
          alert('Seller login successful');
          navigate('/seller-dashboard'); // ✅ Updated redirect
        } else {
          alert('Invalid seller credentials');
        }
      } else {
        alert("Email or Password didn't match");
      }
    } catch (error) {
      alert('Error during seller login: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage:
          "url('https://img.freepik.com/free-photo/wooden-surface-looking-out-market_23-2147701350.jpg?ga=GA1.1.762873447.1750411487&semt=ais_hybrid&w=740')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <Header />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh', paddingTop: '10vh' }}
      >
        <Card
          className="shadow p-4"
          style={{
            width: '400px',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '18px',
          }}
        >
          <Card.Body>
            <h2 className="mb-4 text-center">Seller Login</h2>
            <Form onSubmit={handleSubmit}>
              {commonFields.map((field) => (
                <Form.Group
                  style={{ textAlign: 'start', marginBottom: '10px' }}
                  controlId={field.controlId}
                  key={field.controlId}
                >
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    name={field.controlId}
                    value={formData[field.controlId]}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              ))}
              <Button type="submit" className="btn btn-primary w-100 mt-3">
                Login
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Don't have an account?{' '}
              <Link to="/seller-register" className="text-decoration-none">
                Sign Up here
              </Link>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SellerLogin;
