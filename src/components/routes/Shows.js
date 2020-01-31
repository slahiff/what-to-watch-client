import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Shows = props => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/shows`)
      .then(res => setShows(res.data.shows))
      .catch(console.error)
  }, [])

  const showsArr = shows.map(show => (
    <div key={show.id} className="show-div">
      <Link to={`/shows/${show.id}`}>
        <h6>
          <b>{`${show.title} (Season ${show.season_number})`}</b>
        </h6>
      </Link>
      <ul>
        <li><b>Network/Service</b>: {show.network}</li>
        <li><b>Number of Episodes</b>: {show.total_episodes}</li>
        <li><b>Date Released</b>: {show.release_date}</li>
        <br/>
        <b>User Reviews </b>
        <Link to={`/shows/${show.id}`}>
          {`(${show.reviews.length})`}
        </Link>
      </ul>
    </div>
  ))

  return (
    <Layout>
      <h4>Shows</h4>
      <div className="show-wrapper">
        {showsArr}
      </div>
    </Layout>
  )
}

export default Shows
