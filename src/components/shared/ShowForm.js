// import React from 'react'
// import { Link } from 'react-router-dom'
//
// import Button from 'react-bootstrap/Button'
//
// const ReviewForm = ({ review, show, handleSubmit, handleChange, cancelPath }) => (
//   <form onSubmit={handleSubmit} className="review-form">
//
//     <label>Rating</label>
//     <input
//       placeholder="0-100"
//       value={review.rating}
//       name="rating"
//       type="number" min="0" max="100"
//       onChange={handleChange}
//     />
//
//     <label>Title</label>
//     <input
//       name="title"
//       placeholder="Title"
//       required
//       value={review.title}
//       onChange={handleChange}
//     />
//
//     <label htmlFor="review-form">Comment</label>
//     <textarea
//       placeholder="Excellent series, highly recommend..."
//       form="review-form" name="comment" id="review-form"
//       cols="60" rows="10" wrap="soft" value={review.body} onChange={handleChange}>
//       Type
//     </textarea>
//
//     <Button type="submit" variant="outline-primary">
//     Submit
//     </Button>
//
//     <Link to={cancelPath}>
//       <Button variant='outline-danger'>
//       Cancel
//       </Button>
//     </Link>
//   </form>
// )
//
// export default ReviewForm
