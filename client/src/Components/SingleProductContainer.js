import React from 'react';
import ProductInfo from '../Components/ProductInfo'
import ProductImage from '../Components/ProductImage'
import CompanyInfo from '../Components/CompanyInfo'
import Reviews from '../Components/Reviews'
import './SingleProductContainer.css'



const SingleProductContainer = ( {product, user} ) => {
    return(
        <div className="container">
            <div className='image'>
                <ProductImage product={product} />
            </div>
            <div className='product-info'>
                <ProductInfo product={product} />
            </div>
            <div className='company'>
                <CompanyInfo product={product} />
            </div>
            <div className='reviews'>
                <Reviews product={product} user={user} />
            </div>
        </div>
    )
}

export default SingleProductContainer;