import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SellerRegister = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5100/seller-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Seller registered successfully!');
                navigate('/seller/login');
            } else {
                const data = await response.json();
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            alert('Error during registration: ' + error);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: "url('https://img.freepik.com/free-photo/wooden-surface-looking-out-market_23-2147701350.jpg?ga=GA1.1.762873447.1750411487&semt=ais_hybrid&w=740')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
        }}>
            <Header />
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '10vh' }}>
                <Card className="shadow p-4" style={{ width: '400px', background: 'rgba(255,255,255,0.85)', borderRadius: '18px' }}>
                    <Card.Body>
                        <h2 className="mb-4">Seller Registration</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-2">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="firstname" value={formData.firstname} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lastname" value={formData.lastname} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" value={formData.username} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                            </Form.Group>
                            <Button type="submit" className="w-100 mt-3">Register</Button>
                        </Form>
                        <p className="mt-3">
                            Already have an account? <Link to="/seller/login">Login</Link>
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default SellerRegister; 