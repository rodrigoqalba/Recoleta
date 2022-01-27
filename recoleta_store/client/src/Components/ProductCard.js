// import React, { useState } from "react";
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './ProductCard.css'

const ProductCard = ({products}) => {

  return (
    <div className="adventure-list">
      {products.map(product => (
        <div key={product.id} className='card'>
          <h1>{product.name}</h1>
          <h3>${product.price}</h3>
          <img src={product.image_url} style={{width: 200}}/>
          <Link to={`/product-page/${product.id}`}>Buy This</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;