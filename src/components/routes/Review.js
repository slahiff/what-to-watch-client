import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Review = props => {
  const [review, setReview] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/reviews/${props.match.params.id}`)
      .then(res => setReview(res.data.review))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/reviews/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!review) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/shows', state: { msg: 'Review succesfully deleted!' } }
    } />
  }

  return (
    <Layout>
      <h4>{review.title}</h4>
      <p>{review.body}</p>
      <p>Rating: {review.rating}</p>
      <button onClick={destroy}>Delete Review</button>
      <Link to={`/reviews/${props.match.params.id}/edit`}>
        <Button variant="outline-danger">
        Edit Review
        </Button>
      </Link>
      <Link to="/reviews">Back to all reviews</Link>
    </Layout>
  )
}

export default Review
