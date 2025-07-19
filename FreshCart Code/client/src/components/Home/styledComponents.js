
// import styled from 'styled-components';

// export const HomeContainer = styled.section`
//   background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
//                     url('https://t3.ftcdn.net/jpg/03/07/15/28/360_F_307152868_ncMILWfZIhGoAEK8QsFDsScGiRaQMsL0.jpg');
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;
//   color: #000;
//   height: 100vh;
//   margin-top: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   position: relative;
//   overflow: hidden;
//   animation: fadeIn 1.5s ease-in-out;

//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       135deg,
//       rgba(0, 0, 0, 0.2) 0%,
//       rgba(0, 0, 0, 0.6) 100%
//     );
//     z-index: 1;
//   }
// `;

// export const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   position: relative;
//   z-index: 2;
// `;

// export const CenteredRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// export const ContentColumn = styled.div`
//   flex: 1;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0.6);
//   padding: 3rem;
//   border-radius: 15px;
//   backdrop-filter: blur(5px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//   transform: translateY(0);
//   transition: all 0.5s ease;
//   max-width: 800px;
//   margin: 0 2rem;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
//   }
// `;

// export const Heading = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 800;
//   margin-bottom: 1.5rem;
//   color: #fff;
//   text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
//   letter-spacing: 1px;
//   line-height: 1.2;
//   font-family: 'Montserrat', sans-serif;
//   animation: slideInDown 1s ease-out;

//   @keyframes slideInDown {
//     from {
//       transform: translateY(-50px);
//       opacity: 0;
//     }
//     to {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// export const Paragraph = styled.p`
//   font-size: 1.8rem;
//   color: rgba(255, 255, 255, 0.9);
//   margin-bottom: 2.5rem;
//   line-height: 1.6;
//   text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
//   animation: fadeInUp 1s ease-out 0.3s both;

//   @keyframes fadeInUp {
//     from {
//       transform: translateY(30px);
//       opacity: 0;
//     }
//     to {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }

//   @media (max-width: 768px) {
//     font-size: 1.3rem;
//   }
// `;

// export const PrimaryButton = styled.button`
//   padding: 20px 50px;
//   font-size: 1.8rem;
//   font-family: 'Bree Serif', serif;
//   border-radius: 50px;
//   font-weight: bold;
//   background: linear-gradient(135deg, #f030b6 0%, #ff3781 100%);
//   border: none;
//   color: white;
//   cursor: pointer;
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
//   box-shadow: 0 5px 15px rgba(240, 48, 182, 0.4);
//   animation: fadeInUp 1s ease-out 0.6s both;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(135deg, #ff3781 0%, #f030b6 100%);
//     z-index: -1;
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 25px rgba(240, 48, 182, 0.6);

//     &::before {
//       opacity: 1;
//     }
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 5px 12px rgba(240, 48, 182, 0.5);
//   }

//   @media (max-width: 768px) {
//     padding: 15px 40px;
//     font-size: 1.4rem;
//   }
// `;


import styled, { keyframes } from 'styled-components';

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const zoomEffect = keyframes`
  0% { background-size: 100%; }
  100% { background-size: 120%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Components
export const HomeContainer = styled.div`
  background-image: url('https://media.istockphoto.com/id/501140015/photo/fruits-and-vegetables-on-a-supermarket.jpg?s=612x612&w=0&k=20&c=V8KepoqM9HgopRAFMisou58-Ns5d-xdh6sJYT3DpEv8=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  animation: ${zoomEffect} 20s infinite alternate;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;

export const FloatingOffer = styled.div`
  position: fixed;
  top: 100px;
  right: -100px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  color: white;
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 5px 0 0 5px;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.8s forwards 1s, ${pulse} 2s infinite 2s;
  transform-origin: center;
  
  @keyframes slideIn {
    to { right: 0; }
  }
  
  .offer-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .discount {
    background: white;
    color: #ff6b6b;
    padding: 3px 8px;
    border-radius: 3px;
    font-weight: 700;
    animation: ${pulse} 1.5s infinite;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 2;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

export const ContentColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 2.5rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  animation: ${fadeIn} 1.2s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  @media (min-width: 768px) {
    flex: 0 0 70%;
    max-width: 70%;
  }

  @media (min-width: 992px) {
    flex: 0 0 55%;
    max-width: 55%;
  }
`;

export const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #2d6a4f;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  animation: textGlow 3s infinite alternate;
  
  @keyframes textGlow {
    0% { 
      text-shadow: 0 0 5px rgba(45, 106, 79, 0.5),
                   0 0 0 rgba(255, 255, 255, 0); 
    }
    100% { 
      text-shadow: 0 0 15px rgba(45, 106, 79, 0.8),
                   0 0 20px rgba(255, 255, 255, 0.6); 
    }
  }

  @media (min-width: 768px) {
    font-size: 3.8rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #2d6a4f, #1b4332);
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    background: linear-gradient(135deg, #1b4332, #2d6a4f);
  }
  
  .shop-link {
    color: white;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.5px;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

// New Sections
export const Section = styled.section`
  padding: 80px 0;
  position: relative;
  
  &.features-section {
    background: linear-gradient(to bottom, #f8fff8, #ffffff);
  }
  
  &.categories-section {
    background: #f9fbf8;
  }
  
  &.testimonials-section {
    background: linear-gradient(to bottom, #ffffff, #f8fff8);
  }
  
  &.newsletter-section {
    background: linear-gradient(135deg, #1b4332, #2d6a4f);
    color: white;
    text-align: center;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #1b4332;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #2d6a4f;
    margin: 15px auto;
    border-radius: 2px;
  }
  
  .newsletter-section & {
    color: white;
    
    &::after {
      background: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  animation: ${fadeIn} 0.8s ease-out;
  border: 1px solid rgba(45, 106, 79, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(45, 106, 79, 0.3);
  }
  
  .feature-icon {
    font-size: 2.5rem;
    color: #2d6a4f;
    margin-bottom: 20px;
    display: inline-block;
    transition: all 0.3s ease;
  }
  
  &:hover .feature-icon {
    transform: scale(1.2) rotate(5deg);
    color: #1b4332;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #1b4332;
    margin-bottom: 15px;
  }
  
  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

export const CategoryCard = styled.div`
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    z-index: 1;
  }
  
  h3 {
    position: relative;
    z-index: 2;
    color: white;
    font-size: 1.8rem;
    margin-bottom: 15px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .shop-btn {
    position: relative;
    z-index: 2;
    display: inline-block;
    background: rgba(255, 255, 255, 0.9);
    color: #2d6a4f;
    padding: 8px 20px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background: white;
      transform: scale(1.05);
    }
  }
`;

export const TestimonialSlider = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  height: 300px;
  overflow: hidden;
`;

export const TestimonialCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.8s ease;
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  &.active {
    opacity: 1;
    transform: translateX(0);
  }
  
  .rating {
    color: #ffc107;
    margin-bottom: 20px;
    font-size: 1.5rem;
    
    .star {
      margin: 0 3px;
    }
  }
  
  .testimonial-text {
    font-size: 1.3rem;
    line-height: 1.7;
    color: #333;
    margin-bottom: 25px;
    font-style: italic;
  }
  
  .testimonial-author {
    font-size: 1.2rem;
    color: #1b4332;
    font-weight: 600;
  }
`;

export const NewsletterForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
  
  .form-group {
    display: flex;
    gap: 10px;
    
    input {
      flex: 1;
      padding: 15px 20px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
      }
    }
    
    button {
      background: white;
      color: #2d6a4f;
      border: none;
      padding: 0 35px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #f8fff8;
        transform: scale(1.05);
      }
    }
  }
`;