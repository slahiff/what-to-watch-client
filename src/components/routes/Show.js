import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
// import Reviews from './Reviews'

const Show = props => {
  const [show, setShow] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/shows/${props.match.params.id}`)
      .then(res => setShow(res.data.show))
      .catch(console.error)
  }, [])

  if (!show) {
    return <p>Loading...</p>
  }

  const reviewsArr = show.reviews.map(review => (
    <div key={review.id} className="review-div card">
      <Link className="card-header" to={`/reviews/${review.id}`}>{review.title}
      </Link>
    </div>
  ))

  // const avgRating = show.reviews.reduce(reviews => (
  //
  // ))

  return (
    <Layout>
      <h4>{show.title + ' (Season ' + show.season_number + ')'}</h4>
      <iframe className="show-iframe mx-auto d-block" width="560" height="315" src={`https://www.youtube.com/embed/${show.trailer_url.slice(-11)}?hd=1&amp;modestbranding=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <br/>
      <ul>
        <li>Network/Streaming Service: {show.network}</li>
        <li>Number of Episodes: {show.total_episodes}</li>
        <li>Date Released: {show.release_date}</li>
      </ul>
      <br/>
      <Link to={'/create-review'}>
        <Button variant="outline-success" className="create-review-btn">
        Create a Review
        </Button>
      </Link>
      <br/>
      <h6>User Reviews:</h6>
      <div className="review-wrapper">{show.reviews.length !== 0 ? reviewsArr : <i className="no-reviews-message">No reviews yet...</i>}</div>
      <br/>
      <Link to="/shows">Back to all shows</Link>
    </Layout>
  )
}

export default Show
