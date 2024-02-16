import React, { useState } from 'react';
import ProductComponent from '../components/ProductComponent';
import Navbar from '../components/Navbar';
import '../styles/Home.scss';
import img1 from '../images/product-bgd.jpg';
import { useNavigate } from 'react-router-dom';
import { Search } from '@carbon/icons-react';


function Home() {
  const products = [
    { key: "1", domains:['Weather Data','Mobile App data'], name: "Product 1", url:'product1',by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "2", domains:['Legal Data','Healthcare data'],  name: "Product 2", url:'product2', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "3", domains:['Brand data','Mobile App data'],  name: "Product 3", url:'product3', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "4", domains:['Environmental Data','Weather data'],  name: "Product 4", url:'product4', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [activeDomain, setActiveDomain] = useState(null);

  const handleDomainSelect = (domain) => {
    setActiveDomain(domain === activeDomain ? null : domain);
  }

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);
  }

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const domainMatch = activeDomain ? product.domains.includes(activeDomain) : true;
    return nameMatch && domainMatch;
  });

  const inputStyle = {
    marginTop: '30px',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '1rem',
    width: '80%',
    position: 'relative', 
  };

  const searchIconStyle = {
    position: 'relative',
    top: '50%',
    right: '40px',
    color: '#666',
  };

  let domains=['Weather Data','Healthcare Data','Legal Data','Brand Data','Mobile App Data','Environmental Data'];

 const domainsListStyle={
  marginTop:'15px',
 }

 const small={
  fontSize:'0.67rem',
  textAlign:'center',
  marginTop:'3px',
  marginBottom:'3px'
 }
 const domainButtonStyle = {
  marginBottom: '5px',
  marginTop:'5px',
  display:'inline-block'
};
  return (
    <div>
      <Navbar />
      <div className="productpage-header">
        <h1>Data Products</h1>
        <p style={{ marginTop: '10px', marginBottom:'20px' }}>
          Duis Bibendum neque egestas congue quisque egestas diam in arcu cursus. Massa tincidunt dui ut ornare
          lectus. A diam maecenas sed enim ut. Cras semper auctor neque vitae tempus quam pellentesque nec nam.
        </p>
        <div style={{ position: 'relative' }}>
          <input
            placeholder="Enter term to search..."
            type="text"
            style={inputStyle}
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <span style={searchIconStyle}><Search/></span>
        </div>
        
      </div>

      <div className='productpage-header'>
      <h3>Filter by domain</h3>
      <div style={domainsListStyle}>
          {domains.map((domain) => (
            <span
              key={domain}
              className='domain-list'
              onClick={() => handleDomainSelect(domain)}
              style={{ backgroundColor: domain === activeDomain ? '#7FC7D9' : '#F2F1EB' , ...domainButtonStyle}}
            >
              <span style={small}>⚫</span> {domain}
            </span>
          ))}
        </div>
     
      </div>


      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductComponent
            key={product.key}
            name={product.name}
            desc={product.desc}
            img={product.img}
            by={product.by}
            url={product.url}
            domains={product.domains}
            productStage="product"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
