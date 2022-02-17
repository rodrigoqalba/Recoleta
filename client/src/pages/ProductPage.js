import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleProductContainer from '../Components/SingleProductContainer';
import { useFetch } from './../hooks/useFetch'
import './ProductPage.css'


const ProductPage = ({user}) => {

console.log(user)
    const { id } = useParams()
    const url = '/api/products/' + id
    const { data: product } = useFetch(url)
    console.log(product)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='product-page'>
            {product && <SingleProductContainer product={product} user={user} />}
        </div>
    )
}

export default ProductPage;