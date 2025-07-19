import styled from 'styled-components';

export const ProductContainer = styled.div`
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const ProductName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #222;
  margin: 10px 0 6px;
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
  line-height: 1.5;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2196f3;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  background: linear-gradient(to right, #2196f3, #21cbf3);
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(33, 203, 243, 0.4);
  }
`;
