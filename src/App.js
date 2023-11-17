// App.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
import ProductDescription from './components/ProductDescription';
import ProductImage from './components/ProductImage';

import 'bootstrap/dist/css/bootstrap.min.css';

const yourFirstName = "Computer"; // Replace with your first name
const greetingMessage = yourFirstName ? `Hello, ${yourFirstName}!` : 'Hello, there!';
const hasImage = yourFirstName ? true : false;
const imageStyle = {
  width: '200px',
  height: '150px',
};

const App = () => {
  return (
    <div className="container mt-4">
      <h1>Product Information</h1>
      <Card style={{ width: '18rem' }}>
        <ProductImage />
        <Card.Body>
          <Card.Title><ProductName /></Card.Title>
          <Card.Text>
            <ProductPrice />
            <ProductDescription />
          </Card.Text>
        </Card.Body>
      </Card>
      {hasImage && (
        <div className="mt-4">
          <img src="Images/hand-wave.png" alt="Your First Name Image" style={imageStyle}/>
        </div>
      )}
      <p className="mt-4">{greetingMessage}</p>
    </div>
  );
};

export default App;
