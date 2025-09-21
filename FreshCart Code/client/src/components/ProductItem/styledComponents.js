// import styled from 'styled-components';

// export const ProductContainer = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;  
//   padding: 10px;
//   margin-bottom: 15px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// export const ProductName = styled.h3`
//   font-size: 18px;
//   color: #333;
//   margin-bottom: 2px;
//   margin-top:10px;
// `;

// export const ProductDescription = styled.p`
//   color: #555;
//   margin-bottom: 10px;
// `;

// export const ProductPrice = styled.p`
//   font-weight: bold;
//   color: #22aaff;
// `;

// export const ProductImage = styled.img`
//   max-width: 100%;
//   height: 260px;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// export const Button = styled.button`
//   padding: 8px 16px;
//   background-color: lightgreen;
//   color: white;
//   border: none;
//   // border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: green;
//   }
// `;
// // import styled from 'styled-components';

// // export const ProductContainer = styled.div`
// //   border: 1px solid #ccc;
// //   border-radius: 8px;  
// //   padding: 10px;
// //   margin-bottom: 15px;
// //   background-color: #fff;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// // `;

// // export const ProductName = styled.h3`
// //   font-size: 18px;
// //   color: #333;
// //   margin-bottom: 2px;
// //   margin-top:10px;
// // `;

// // export const ProductDescription = styled.p`
// //   color: #555;
// //   margin-bottom: 10px;
// // `;

// // export const ProductPrice = styled.p`
// //   font-weight: bold;
// //   color: #22aaff;
// // `;

// // export const ProductImage = styled.img`
// //   max-width: 100%;
// //   height: 260px;
// //   border-radius: 8px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// // `;

// // export const ButtonContainer = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   margin-top: 10px;
// // `;

// // export const Button = styled.button`
// //   padding: 8px 16px;
// //   background-color: lightgreen;
// //   color: white;
// //   border: none;
// //   // border-radius: 4px;
// //   cursor: pointer;
// //   transition: background-color 0.3s ease;

// //   &:hover {
// //     background-color: green;
// //   }
// // `;


// import styled from 'styled-components';

// export const ProductContainer = styled.div`
//   border: 1px solid #e0e0e0;
//   border-radius: 12px;
//   padding: 16px;
//   margin-bottom: 20px;
//   background-color: #ffffff;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.05);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 8px 16px rgba(0,0,0,0.08);
//   }
// `;

// export const ProductImage = styled.img`
//   max-width: 100%;
//   height: 260px;
//   object-fit: cover;
//   border-radius: 10px;
//   margin-bottom: 12px;
// `;

// export const ProductName = styled.h3`
//   font-size: 20px;
//   color: #333;
//   margin: 8px 0;
//   text-align: center;
// `;

// export const ProductDescription = styled.p`
//   color: #666;
//   font-size: 14px;
//   text-align: center;
//   margin: 6px 0;
// `;

// export const ProductPrice = styled.p`
//   font-size: 16px;
//   font-weight: bold;
//   color: #28a745;
//   margin-bottom: 10px;
//   text-align: center;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   gap: 10px;
//   margin-top: 12px;
// `;

// export const Button = styled.button`
//   flex: 1;
//   padding: 10px 0;
//   background-color: #28a745;
//   color: white;
//   font-weight: 600;
//   font-size: 14px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   text-align: center;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #218838;
//   }

//   &:active {
//     background-color: #1e7e34;
//     transform: scale(0.98);
//   }
// `;
import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

export const ProductName = styled.h3`
  font-size: 20px;
  color: #333;
  margin-top: 12px;
  margin-bottom: 6px;
  font-weight: 600;
  text-align: center;
`;

export const ProductDescription = styled.p`
  color: #555;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  text-align: center;
  margin-bottom: 12px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

// ✅ Add to Cart Button
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1e7e34; /* darker green */
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);

  &:hover {
    background-color: #145a27; /* even darker on hover */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }
`;
