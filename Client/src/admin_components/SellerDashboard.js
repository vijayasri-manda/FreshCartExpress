// SellerDashboard.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Container, Card, Button, Form, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import './SellerDashboard.css';

const SellerDashboard = () => {
    const sellerId = localStorage.getItem('sellerId');
    const [myProducts, setMyProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [formData, setFormData] = useState({
        productname: '',
        description: '',
        price: '',
        image: '',
        category: '',
        countInStock: '',
        rating: '',
    });
    const [key, setKey] = useState('myProducts');
    const [editingProductId, setEditingProductId] = useState(null);
    const myProductsRef = useRef(null);
    const addProductRef = useRef(null);

    const fetchMyProducts = useCallback(async () => {
        if (!sellerId) return;
        const res = await axios.get(`http://localhost:5100/seller/products/${sellerId}`);
        setMyProducts(res.data);
    }, [sellerId]);

    const fetchAllProducts = useCallback(async () => {
        const res = await axios.get('http://localhost:5100/seller/all-products');
        setAllProducts(res.data);
    }, []);

    useEffect(() => {
        fetchMyProducts();
        fetchAllProducts();
    }, [fetchMyProducts, fetchAllProducts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditProduct = (product) => {
        setFormData({
            productname: product.productname,
            description: product.description,
            price: product.price,
            image: product.image,
            category: product.category,
            countInStock: product.countInStock,
            rating: product.rating,
        });
        setEditingProductId(product._id);
        setKey('myProducts');
        setTimeout(() => {
            myProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleAddOrUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            if (editingProductId) {
                await axios.put(`http://localhost:5100/products/${editingProductId}`, {
                    ...formData,
                    sellerId,
                });
                alert('Product updated successfully!');
            } else {
                await axios.post('http://localhost:5100/seller/add-product', {
                    ...formData,
                    sellerId,
                });
                alert('Product added successfully!');
            }
            setFormData({
                productname: '',
                description: '',
                price: '',
                image: '',
                category: '',
                countInStock: '',
                rating: '',
            });
            setEditingProductId(null);
            fetchMyProducts();
            fetchAllProducts();
        } catch (error) {
            alert('Error saving product');
        }
    };

    const handleDeleteProduct = async (productId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');
        if (!confirmDelete) return;
        try {
            await axios.delete(`http://localhost:5100/products/${productId}`);
            fetchMyProducts();
            fetchAllProducts();
        } catch (error) {
            alert('Error deleting product');
        }
    };

    const scrollToMyProducts = () => {
        setKey('myProducts');
        setTimeout(() => {
            myProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const scrollToAddProduct = () => {
        setKey('myProducts');
        setTimeout(() => {
            addProductRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="seller-dashboard-bg">
            <Header />
            <Container style={{ marginTop: '8vh' }}>
                <h1 className="seller-dashboard-title">---------------------------------------</h1>
                <div className="seller-dashboard-cards">
                    <Card className="seller-dashboard-card">
                        <Card.Body>
                            <Card.Title>My Products</Card.Title>
                            <Card.Text>{myProducts.length} Products</Card.Text>
                            <Button variant="primary" onClick={scrollToMyProducts}>View My Products</Button>
                        </Card.Body>
                    </Card>
                    <Card className="seller-dashboard-card">
                        <Card.Body>
                            <Card.Title>Add Product</Card.Title>
                            <Card.Text>Add a new product to your store</Card.Text>
                            <Button variant="success" onClick={scrollToAddProduct}>Add Product</Button>
                        </Card.Body>
                    </Card>
                </div>
                <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                    <Tab eventKey="myProducts" title="My Products">
                        <div ref={addProductRef} />
                        <h4 className="seller-section-title">Add New Product</h4>
                        <Form onSubmit={handleAddOrUpdateProduct} className="mb-4 seller-product-form">
                            <Form.Group className="mb-2">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control name="productname" value={formData.productname} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" value={formData.description} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Price</Form.Label>
                                <Form.Control name="price" type="number" value={formData.price} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control name="image" value={formData.image} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Category</Form.Label>
                                <Form.Select name="category" value={formData.category} onChange={handleChange} required>
                                    <option value="">Select Category</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Dairy">Dairy</option>
                                    <option value="snacks">snacks</option>
                                    <option value="dryfruits">Dry Fruits</option>
                                    <option value="Beverages">Beverages</option>
                                    <option value="Meat and Seafood">Meat and Seafood</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Count In Stock</Form.Label>
                                <Form.Control name="countInStock" type="number" value={formData.countInStock} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control name="rating" type="number" value={formData.rating} onChange={handleChange} required />
                            </Form.Group>
                            <Button type="submit" className="mt-2 me-2">{editingProductId ? 'Update Product' : 'Add Product'}</Button>
                            {editingProductId && (
                                <Button variant="secondary" className="mt-2" onClick={() => {
                                    setFormData({
                                        productname: '',
                                        description: '',
                                        price: '',
                                        image: '',
                                        category: '',
                                        countInStock: '',
                                        rating: '',
                                    });
                                    setEditingProductId(null);
                                }}>
                                    Cancel
                                </Button>
                            )}
                        </Form>
                        <div ref={myProductsRef} />
                        <h4 className="seller-section-title">My Products</h4>
                        <div className="d-flex flex-wrap gap-3">
                            {myProducts.map((product) => (
                                <Card key={product._id} className="seller-product-card">
                                    <Card.Img variant="top" src={product.image} style={{ height: '180px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{product.productname}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>Price: ${product.price}</Card.Text>
                                        <Card.Text>Category: {product.category}</Card.Text>
                                        <Card.Text>Stock: {product.countInStock}</Card.Text>
                                        <Card.Text>Rating: {product.rating}</Card.Text>
                                        <Button variant="warning" onClick={() => handleEditProduct(product)} className="mt-2 me-2">Update</Button>
                                        <Button variant="danger" onClick={() => handleDeleteProduct(product._id)} className="mt-2">Delete</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="allProducts" title="All Products">
                        <h4 className="seller-section-title">All Products</h4>
                        <div className="d-flex flex-wrap gap-3">
                            {allProducts.map((product) => (
                                <Card key={product._id} className="seller-product-card">
                                    <Card.Img variant="top" src={product.image} style={{ height: '180px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{product.productname}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>Price: ${product.price}</Card.Text>
                                        <Card.Text>Category: {product.category}</Card.Text>
                                        <Card.Text>Stock: {product.countInStock}</Card.Text>
                                        <Card.Text>Rating: {product.rating}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};

export default SellerDashboard; 