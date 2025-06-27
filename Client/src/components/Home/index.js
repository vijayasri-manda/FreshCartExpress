
import React, { useState, useEffect } from 'react';
import { 
  HomeContainer, 
  Container, 
  CenteredRow, 
  ContentColumn, 
  Heading, 
  Paragraph, 
  PrimaryButton,
  Section,
  SectionTitle,
  FeaturesContainer,
  FeatureCard,
  CategoryGrid,
  CategoryCard,
  TestimonialSlider,
  TestimonialCard,
  NewsletterForm,
  FloatingOffer
} from "./styledComponents";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../Contact';
import Header from '../Header';
import { FaShoppingBasket, FaTruck, FaLeaf, FaPercent, FaStar } from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Categories data
  const categories = [
    { id: 1, name: 'Fresh Fruits', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf' },
    { id: 2, name: 'Vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37' },
    { id: 3, name: 'Dairy & Eggs', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150' },
    { id: 4, name: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
    { id: 5, name: 'Meat & Seafood', image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1' },
    { id: 6, name: 'Beverages', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7' },
  ];

  // Testimonials data
  const testimonials = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      text: 'FreshCart Express has revolutionized my grocery shopping! The produce is always fresh and delivery is lightning fast.', 
      rating: 5 
    },
    { 
      id: 2, 
      name: 'Michael Chen', 
      text: 'I love the quality of their organic products. The app is easy to use and their customer service is excellent.', 
      rating: 4 
    },
    { 
      id: 3, 
      name: 'Emma Rodriguez', 
      text: 'As a busy mom, this service saves me hours each week. The selection is great and prices are competitive.', 
      rating: 5 
    },
  ];

  // Features data
  const features = [
    { id: 1, icon: <FaTruck />, title: 'Fast Delivery', description: 'Get orders delivered in under 2 hours' },
    { id: 2, icon: <FaLeaf />, title: 'Fresh Guarantee', description: '100% fresh produce or money back' },
    { id: 3, icon: <FaPercent />, title: 'Best Prices', description: 'Price match guarantee on all items' },
    { id: 4, icon: <FaShoppingBasket />, title: 'Easy Returns', description: 'Hassle-free returns within 48 hours' },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header/>
      
      {/* Floating Special Offer */}
      <FloatingOffer>
        <div className="offer-content">
          <span className="discount">30% OFF</span>
          <span>First Order • Use Code: FRESH30</span>
        </div>
      </FloatingOffer>
      
      <HomeContainer className="home-container">
        <Container>
          <CenteredRow>
            <ContentColumn>
              <Heading>Farm Fresh to Your Door</Heading>
              <Paragraph>
                Discover the freshest produce, pantry staples, and gourmet groceries 
                handpicked and delivered straight to your kitchen
              </Paragraph>
              <PrimaryButton>
                <Link to='/shopping' className="shop-link">Shop Fresh Now</Link>
              </PrimaryButton>
            </ContentColumn>
          </CenteredRow>
        </Container>
      </HomeContainer>
      
      {/* Features Section */}
      <Section className="features-section">
        <Container>
          <SectionTitle>Why Choose FreshCart Express?</SectionTitle>
          <FeaturesContainer>
            {features.map((feature) => (
              <FeatureCard key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesContainer>
        </Container>
      </Section>
      
      {/* Categories Section */}
      <Section className="categories-section">
        <Container>
          <SectionTitle>Popular Categories</SectionTitle>
          <CategoryGrid>
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                className="category-card"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="overlay"></div>
                <h3>{category.name}</h3>
                <Link to={`/shopping?category=${category.name}`} className="shop-btn">Shop Now</Link>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </Container>
      </Section>
      
      {/* Testimonials Section */}
      <Section className="testimonials-section">
        <Container>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <TestimonialSlider>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                className={index === currentSlide ? 'active' : ''}
              >
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </TestimonialCard>
            ))}
            <div className="slider-controls">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={index === currentSlide ? 'active' : ''}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </TestimonialSlider>
        </Container>
      </Section>
      
      {/* Newsletter Section */}
      <Section className="newsletter-section">
        <Container>
          <SectionTitle>Join Our Fresh Community</SectionTitle>
          <NewsletterForm>
            <p>Subscribe to get exclusive offers, recipes, and fresh tips</p>
            <div className="form-group">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </NewsletterForm>
        </Container>
      </Section>
      
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default Home;