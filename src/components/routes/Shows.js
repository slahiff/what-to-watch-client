import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Shows = props => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/shows`)
      .then(res => setShows(res.data.shows))
      .catch(console.error)
  }, [])

  const showsArr = shows.map(show => (
    <li key={show._id}>
      <Link to={`/shows/${show.id}`}>{show.title + ' (Season ' + show.season_number + ')'}</Link>
    </li>
  ))

  return (
    <div>
      <h4>Shows</h4>
      <ul>
        {showsArr}
      </ul>
    </div>
  )
}

export default Shows
