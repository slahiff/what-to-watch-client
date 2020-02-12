import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const ReviewForm = ({ review, show, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit} className="review-form">

    <label>Rating</label>
    <input
      placeholder="0-100"
      value={review.rating}
      name="rating"
      type="number" min="0" max="100"
      onChange={handleChange}
    />

    <label>Title</label>
    <input
      name="title"
      placeholder="Title"
      value={review.title}
      onChange={handleChange}
    />

    <label>Comment</label>
    <textarea
      rows="5" cols="50" wrap="physical"
      placeholder="Excellent series, highly recommend..."
      name="body"
      value={review.body}
      onChange={handleChange}
      className="text"
    ></textarea>

    <label>Show ID</label>
    <input
      placeholder="show_id"
      value={review.show_id}
      name="show_id"
      className="show-id-field"
      type="number" min="1"
      onChange={handleChange}
    />

    <br/>
    <br/>

    <Button type="submit" variant="outline-primary">
    Submit
    </Button>

    <Link to={cancelPath}>
      <Button variant='outline-danger'>
      Cancel
      </Button>
    </Link>
  </form>
)

export default ReviewForm
