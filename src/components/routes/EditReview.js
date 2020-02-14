import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ReviewForm from '../shared/ReviewForm'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const ReviewEdit = props => {
  const [review, setReview] = useState({ title: '', body: '', rating: '', show_id: '' })
  const [updated, setUpdated] = useState(false)
  const { alert } = props

  useEffect(() => {
    axios(`${apiUrl}/reviews/${props.match.params.id}`)
      .then(res => setReview(res.data.review))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setReview(review => ({ ...review, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.persist()
    event.preventDefault()

    axios({
      url: `${apiUrl}/reviews/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token ${props.user.token}`
      },
      data: { review }
    })
      .then(() => setUpdated(true))
      .then(() => alert({
        heading: 'Huzzah!',
        message: messages.reviewEditSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Review Edit Failed',
          message: messages.reviewEditFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (updated) {
    return <Redirect to={`/reviews/${props.match.params.id}`} />
  }

  return (
    <Layout user={props.user}>
      <ReviewForm
        review={review}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/shows/${review.show_id}`}
      />
    </Layout>
  )
}

export default ReviewEdit
