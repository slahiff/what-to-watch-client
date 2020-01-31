import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Reviews = props => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/reviews`)
      .then(res => setReviews(res.data.reviews))
      .catch(console.error)
  }, [])

  const reviewsArr = reviews.map(review => (
    <li key={review.id}>
      <Link to={`/reviews/${review.id}`}>{review.title}
      </Link>
    </li>
  ))

  return (
    <div>
      <h4>Reviews</h4>
      <ul>
        {reviewsArr}
      </ul>
    </div>
  )
}

export default Reviews
