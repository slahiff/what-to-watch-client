import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ReviewForm from '../shared/ReviewForm'
import Layout from '../shared/Layout'

const ReviewEdit = props => {
  const [review, setReview] = useState({ title: '', body: '', rating: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/reviews/${props.match.params.id}`)
      .then(res => setReview(res.data.review))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()

    setReview({ ...review, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.persist()
    event.preventDefault()

    axios({
      url: `${apiUrl}/reviews/${props.match.params.id}`,
      method: 'PATCH',
      data: { review }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/reviews/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <ReviewForm
        review={review}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/reviews/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default ReviewEdit
