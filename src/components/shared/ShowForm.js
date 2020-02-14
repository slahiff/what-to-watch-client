import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const ShowForm = ({ show, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit} className="show-form">

    <label>Show Title</label>
    <input
      placeholder="Game of Thrones"
      value={show.title}
      name="title"
      required
      onChange={handleChange}
    />

    <label>Season Number</label>
    <input
      type="number"
      name="season_number"
      placeholder="1"
      required
      value={show.season_number}
      onChange={handleChange}
    />

    <label>Total Episodes</label>
    <input
      type="number"
      name="total_episodes"
      placeholder="1"
      required
      value={show.total_episodes}
      onChange={handleChange}
    />

    <label>Network/Streaming Service</label>
    <input
      placeholder="Netfelix, HBO, CBS..."
      value={show.network}
      name="network"
      required
      onChange={handleChange}
    />

    <label>Released Date</label>
    <input
      type="date"
      placeholder="YYYY-MM-DD"
      value={show.release_date}
      name="release_date"
      onChange={handleChange}
    />

    <label>Youtube Trailer URL</label>
    <input
      placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      value={show.trailer_url}
      name="trailer_url"
      required
      onChange={handleChange}
    />

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

export default ShowForm
