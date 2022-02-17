import React, { useEffect, useState } from 'react';
import './Reviews.css'
// import CreateReview from './CreateReview';
import CreateReview from '../Components/CreateReview'

const Reviews = ({ product, user }) => {
    const [reviews, setReviews] = useState(product.reviews)
    
    useEffect(() => {console.log('rendered')}, [reviews])

    const handleUpdateReviews = (review) => {
        const newReview = [...reviews, review]
        setReviews(newReview)
    }

    return(
        <div className='reviews'>
            <div className='reviews_header'>
                <h1>Reviews</h1>
                <div>
                {reviews?.map(review => (
                <div key={review?.id} className='review'>
                <h3 className='username'>{user.username} | verified purchase</h3>
                <h4>{review?.star_rating} stars</h4>
                <br></br>
                <h4>{review?.comment}</h4>
                <br></br>
                <br></br>
                <br></br>
                </div>
                ))}
                </div>
            </div>
            <CreateReview reviews={reviews} user={user} product={product} setReviews={setReviews} handleUpdateReviews={handleUpdateReviews}/>
        </div>
    )
}

export default Reviews;