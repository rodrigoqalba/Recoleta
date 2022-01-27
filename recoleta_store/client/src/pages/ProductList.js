import React, { useEffect, useState } from "react";
import { useFetch } from '../hooks/useFetch'
import ProductContainer from "../Components/ProductContainer";
import './ProductList.css'


function ProductList() {

  const { data } = useFetch('/api/products')

  return (
    <>    
      <h1 className="product-name">Products</h1>
      <div className="product-list">
        {data && <ProductContainer products={data} />}
      </div>
    </>
  );
}

export default ProductList;