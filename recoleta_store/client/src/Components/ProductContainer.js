import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer({products}) {
    return (
        <main>
            <ul className='cards'>
                <ProductCard products={products}/>
            </ul>
        </main>
    )
}

export default ProductContainer;