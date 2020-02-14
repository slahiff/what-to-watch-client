import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const Review = props => {
  const [review, setReview] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { alert } = props

  useEffect(() => {
    axios(`${apiUrl}/reviews/${props.match.params.id}`)
      .then(res => setReview(res.data.review))
      .catch(error => {
        alert({
          heading: 'Error Getting Reviews',
          message: messages.reviewIndexFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/reviews/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${props.user.token}`
      },
      data: { }
    })
      .then(() => setDeleted(true))
      .then(() => alert({
        heading: 'Succesfully Deleted Review',
        message: messages.reviewEditSuccess,
        variant: 'success'
      }))

      .catch(error => {
        alert({
          heading: 'Error Deleting Review',
          message: messages.reviewEditFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (!review) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/shows', state: { msg: 'Review succesfully deleted!' } }
    } />
  }

  // const authenticatedOptions = (
  //   <Fragment>
  //     <Button variant="outline-danger" onClick={destroy}>Delete Review</Button>
  //     <Link to={`/reviews/${props.match.params.id}/edit`}>
  //       <Button variant="outline-warning">Edit Review</Button>
  //     </Link>
  //   </Fragment>
  // )

  return (
    <Layout user={props.user}>
      <h4>{review.title}</h4>
      <p>{review.body}</p>
      <p>Rating: {review.rating}</p>
      <Button variant="outline-danger" onClick={destroy}>Delete Review</Button>
      <Link to={`/reviews/${props.match.params.id}/edit`}>
        <Button variant="outline-warning">Edit Review</Button>
      </Link>
      <Link to={`/shows/${review.show_id}`}>Back to Show Page</Link>
    </Layout>
  )
}

export default Review
