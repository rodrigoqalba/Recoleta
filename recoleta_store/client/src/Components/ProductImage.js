import React from 'react';
import './ProductImage.css'

const ProductImage = ( {product} ) => {
    return (
        <div>
            <img src={product.image_url} className='product_image'/>
        </div>
    )
}

export default ProductImage
