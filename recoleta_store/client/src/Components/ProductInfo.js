import React from 'react';
import './ProductInfo.css'

const ProductInfo = ( {product} ) => {
    return (
        <div className='product'>
            <h1 className='name'>{product.name}</h1>
            <div className='line'></div>
            <div className='product-info'>
                <div>
                    <h2>${product.price}</h2>
                    <h6>(1-100 units)</h6>
                </div>
                <br></br>
                <div>
                    <h4>Colors</h4>
                    <h5>{product.colors}</h5>
                </div>
                <br></br>
                <div>
                    <h4>Size</h4>
                    <h5>{product.size}</h5>
                </div>
                <br></br>
                <div>
                    <h4>Dimensions</h4>
                    <h5>{product.dimensions}</h5>
                </div>
                <br></br>
                <div>
                    <h4>Weight</h4>
                    <h5>{product.weight}</h5>
                </div>
                <br></br>
                <div>
                    <h4>Shipping Method</h4>
                    <h5>{product.shipping_method}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default ProductInfo