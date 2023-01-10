import React, { useState, useEffect } from 'react';
import { useFetch } from "../hooks/useFetch";
import './CreateReview.css'
import Reviews from './Reviews';

const CreateReview = ({ product, user, reviews, setReviews, handleUpdateReviews}) => {

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    const { postData, data, error } = useFetch('/api/reviews', 'POST')
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        postData({ 
            star_rating: rating, 
            comment,
            user_id: user.id,
            product_id: product.id
        })
        handleUpdateReviews({ 
            star_rating: rating, 
            comment,
            user_id: user.id,
            product_id: product.id
        })
    }


  return (
    <div className="create">
        <h2 className="page-title">Write a Review</h2>

        <form onSubmit={handleSubmit}>
            <label>
                <span>Comment: </span>
                <input
                type="text"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                required
                />
            </label>
            <label>
                <span> rating: </span>
                <input
                type="number"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                required
                />
            </label>
            <span>    </span>
            <button className="btn">Submit</button>
            <br></br>
            <br></br>
            <br></br>
        </form>
    </div>
  )

}
export default CreateReview;