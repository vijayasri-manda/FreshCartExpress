// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import ProductItem from '../ProductItem';
// import Header from '../Header';

// const ProductsContainer = styled.div`
//   margin-top: 10vh;
//   padding: 20px;
//   text-align: start;
// `;

// const Heading = styled.h2`
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 20px;
//   margin-top: 40px;
// `;

// const StyledList = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 20px;
//   max-width: 270px;
// `;

// const SearchBar = styled.input`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 20px;
// `;

// const CategoryFilter = styled.select`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 20px;
// `;

// const FiltersContainer = styled.div`
//   display:flex;
//   align-items:center;
//   gap:30px;
//   margin-top:30px;
//   @media and (max-width:768px){
//     flex-direction:column;
//   }
// `

// const Products = () => {
//   const api = 'http://localhost:5100/products';
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all'); // State for selected category

//   useEffect(() => {
//     // Fetch products from the API and update the state
//     fetch(api)
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   // Function to handle changes in the search input
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to handle changes in the category filter
//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   // Function to filter products based on the selected category and search query
//   const filteredProducts = products.filter((product) => {
//     const productNameMatchesSearch =
//       product.productname.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       searchQuery.trim() === '';

//     if (selectedCategory === 'all') {
//       return productNameMatchesSearch;
//     } else {
//       return (
//         productNameMatchesSearch && product.category.toLowerCase() === selectedCategory
//       );
//     }
//   });

//   // Get unique category values from products
//   const categories = [
//     ...new Set(products.map((product) => product.category.toLowerCase())),
//   ];

//   // Add 'All' as an option to select all categories
//   categories.unshift('all');

//   return (
//     <div>
//       <Header/>
//     <ProductsContainer>
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             {/* <img className="d-block w-100" src="https://img.freepik.com/premium-vector/vegetable-grocery-delivery-promotion-facebook-cover-web-banner-social-media-post-template_584651-68.jpg" alt="First slide" /> */}
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="https://img.freepik.com/free-vector/beautiful-banner-floral-leaves-template_21799-2812.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="Second slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="https://img.freepik.com/free-psd/spring-sale-social-media-cover-template_47987-15231.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="Third slide" />
//           </div>
//         </div>
//         <a className="carousel-control-prev" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       <FiltersContainer style={{gap:'20px'}}>
//         <div className='w-100'>
//         <h3>Search By Product Name</h3>
//       <SearchBar
//         type="text"
//         placeholder="Search by product name"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//         </div>

//       {/* Create the category filter dropdown */}
//       <div className='w-100'>
//       <h3>Filter By Category</h3>
//       <CategoryFilter onChange={handleCategoryChange} value={selectedCategory}>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </CategoryFilter></div>
//       </FiltersContainer>

//       <Heading>Products</Heading>
//       <StyledList>
//         {filteredProducts.map((product) => (
//           <ListItem key={product._id}>
//             <ProductItem
//               id={product._id}
//               img={product.image}
//               name={product.productname}
//               description={product.description}
//               price={product.price}
//             />
//           </ListItem>
//         ))}
//       </StyledList>
//     </ProductsContainer>  
//     </div>
//   );
// };

// export default Products;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import ProductItem from '../ProductItem';
// import Header from '../Header';

// const ProductsContainer = styled.div`
//   margin-top: 10vh;
//   padding: 20px;
//   text-align: start;
// `;

// const Heading = styled.h2`
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 20px;
//   margin-top: 40px;
// `;

// const StyledList = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 20px;
//   max-width: 270px;
// `;

// const SearchBar = styled.input`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 20px;
// `;

// const CategoryFilter = styled.select`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 20px;
// `;

// const FiltersContainer = styled.div`
//   display:flex;
//   align-items:center;
//   gap:30px;
//   margin-top:30px;
//   @media and (max-width:768px){
//     flex-direction:column;
//   }
// `

// const Products = () => {
//   const api = 'http://localhost:5100/products';
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all'); // State for selected category

//   useEffect(() => {
//     // Fetch products from the API and update the state
//     fetch(api)
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   // Function to handle changes in the search input
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to handle changes in the category filter
//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   // Function to filter products based on the selected category and search query
//   const filteredProducts = products.filter((product) => {
//     const productNameMatchesSearch =
//       product.productname.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       searchQuery.trim() === '';

//     if (selectedCategory === 'all') {
//       return productNameMatchesSearch;
//     } else {
//       return (
//         productNameMatchesSearch && product.category.toLowerCase() === selectedCategory
//       );
//     }
//   });

//   // Get unique category values from products
//   const categories = [
//     ...new Set(products.map((product) => product.category.toLowerCase())),
//   ];

//   // Add 'All' as an option to select all categories
//   categories.unshift('all');

//   return (
//     <div>
//       <Header/>
//     <ProductsContainer>
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             {/* <img className="d-block w-100" src="https://img.freepik.com/premium-vector/vegetable-grocery-delivery-promotion-facebook-cover-web-banner-social-media-post-template_584651-68.jpg" alt="First slide" /> */}
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="https://img.freepik.com/free-vector/beautiful-banner-floral-leaves-template_21799-2812.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="Second slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src="https://img.freepik.com/free-psd/spring-sale-social-media-cover-template_47987-15231.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="Third slide" />
//           </div>
//         </div>
//         <a className="carousel-control-prev" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       <FiltersContainer style={{gap:'20px'}}>
//         <div className='w-100'>
//         <h3>Search By Product Name</h3>
//       <SearchBar
//         type="text"
//         placeholder="Search by product name"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//         </div>

//       {/* Create the category filter dropdown */}
//       <div className='w-100'>
//       <h3>Filter By Category</h3>
//       <CategoryFilter onChange={handleCategoryChange} value={selectedCategory}>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </CategoryFilter></div>
//       </FiltersContainer>

//       <Heading>Products</Heading>
//       <StyledList>
//         {filteredProducts.map((product) => (
//           <ListItem key={product._id}>
//             <ProductItem
//               id={product._id}
//               img={product.image}
//               name={product.productname}
//               description={product.description}
//               price={product.price}
//             />
//           </ListItem>
//         ))}
//       </StyledList>
//     </ProductsContainer>  
//     </div>
//   );
// };

// export default Products;



import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ProductItem from '../ProductItem';
import Header from '../Header';

// 🔶 Animation for scrolling banner
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// ✅ Discount Banner styling
const AnimatedBanner = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #ff5f6d, #ffc371);
  padding: 12px 0;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
`;

const BannerText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${scroll} 15s linear infinite;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
`;

// 🛒 Main Product Container
const ProductsContainer = styled.div`
  margin-top: 10vh;
  padding: 20px;
`;

// 🔠 Title
const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 40px 0 20px;
`;

// 💠 Product Grid
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  max-width: 270px;
`;

// 🔍 Search Input
const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const CategoryFilter = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 20px;
`;

// 🧰 Filter Layout
const FiltersContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Products = () => {
  const api = 'http://localhost:5100/products';
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.productname.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map((p) => p.category.toLowerCase()))];

  return (
    <div>
      {/* ✅ Top Header */}
      <Header />

      <ProductsContainer>
        {/* ✅ Banner inside ProductsContainer, above filters */}
        <AnimatedBanner>
          <BannerText>
            🎉 Big Offer! 60% OFF on all grocery essentials! Use Code: SAVE60 🛒
          </BannerText>
        </AnimatedBanner>

        {/* ✅ Search and Category Filters */}
        <FiltersContainer>
          <div style={{ flex: 1 }}>
            <h3>Search by Product Name</h3>
            <SearchBar
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3>Filter by Category</h3>
            <CategoryFilter onChange={handleCategoryChange} value={selectedCategory}>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </CategoryFilter>
          </div>
        </FiltersContainer>

        {/* 🛒 Product Cards */}
        <Heading>Products</Heading>
        <StyledList>
          {filteredProducts.map((product) => (
            <ListItem key={product._id}>
              <ProductItem
                id={product._id}
                img={product.image}
                name={product.productname}
                description={product.description}
                price={product.price}
              />
            </ListItem>
          ))}
        </StyledList>
      </ProductsContainer>
    </div>
  );
};

export default Products;





