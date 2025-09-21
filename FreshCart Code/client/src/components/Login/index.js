
import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';
import Header from '../Header';

const commonFields = [
    { controlId: 'email', label: 'Email', type: 'email' },
    { controlId: 'password', label: 'Password', type: 'password' },
];

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const token = Cookies.getItem('jwtToken');
    const adminToken = localStorage.getItem('adminJwtToken');

    useEffect(() => {
        if (token) {
            navigate('/');
        } else if (adminToken) {
            navigate('/admin/all-products');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5100/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.token) {
                    Cookies.setItem('jwtToken', data.token, { expires: 30 });
                    Cookies.setItem('userId', data.user._id);
                    Cookies.setItem('userName', data.user.firstname);
                    alert('Login Successful');
                    navigate('/');
                } else if (data.jwtToken) {
                    localStorage.setItem('adminJwtToken', data.jwtToken, { expires: 30 });
                    Cookies.setItem('userName', data.user.firstname);
                    navigate('/admin/dashboard');
                }
            } else {
                alert("Email or Password didn't match");
            }
        } catch (error) {
            alert('Error during login:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Blurred background image layer */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj906vtVMZ5E2WMd1Q7Xeab8mASvHdiq9Zv-tNDWmr7W5YirYVh0Y3lHil0hsF_pek4kw&usqp=CAU')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    zIndex: -1,
                }}
            ></div>

            <Header />
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '10vh' }}>
                <Card
                    className="shadow p-4"
                    style={{
                        width: '400px',
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(2px)',
                        borderRadius: '12px',
                    }}
                >
                    <Card.Body>
                        <h2 className="mb-4">Login</h2>
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
                            <Button type="submit" className="btn-primary w-100 mt-3">
                                Login
                            </Button>
                        </Form>
                        <p className="mt-3">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Login;
