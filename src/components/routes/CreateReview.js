import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ReviewForm from '../shared/ReviewForm'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const ReviewCreate = (props) => {
  const [review, setReview] = useState({ title: '', body: '', rating: '', show_id: '' })
  const [createdReviewId, setCreatedReviewId] = useState(null)
  const { alert } = props

  const handleChange = event => {
    event.persist()
    setReview(review => ({ ...review, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/reviews`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { review }
    })
      .then(res => setCreatedReviewId(res.data.review.id))
      .then(() => alert({
        heading: 'Review created, huzzah!!',
        message: messages.reviewCreateSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Shucks...',
          message: messages.reviewCreateFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (createdReviewId) {
    return <Redirect to={`/shows/${review.show_id}`} />
  }

  return (
    <Layout>
      <ReviewForm
        review={review}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/shows/${review.show_id}`}
      />
    </Layout>
  )
}

export default ReviewCreate
