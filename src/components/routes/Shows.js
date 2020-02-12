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
    <div key={show.id} className="card-deck">
      <div className="show-div card">
        <Link to={`/shows/${show.id}`} className="card-header">
          <h6>
            <b>{`${show.title} (Season ${show.season_number})`}</b>
          </h6>
        </Link>
        <ul>
          <li><b>Network/Service</b>: {show.network}</li>
          <li><b>Number of Episodes</b>: {show.total_episodes}</li>
          <li><b>Date Released</b>: {show.release_date}</li>
        </ul>
        <br/>
        <div className="card-footer">
          <b>User Reviews </b>
          <Link to={`/shows/${show.id}`}>
            {`(${show.reviews.length})`}
          </Link>
        </div>
      </div>
      <div className="card">
        <iframe className="shows-iframe" src={`https://www.youtube.com/embed/${show.trailer_url.slice(-11)}?hd=1&amp;modestbranding=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
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
