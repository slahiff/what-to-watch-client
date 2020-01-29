import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

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

  return (
    <Layout>
      <h4>{show.title + ' (Season ' + show.season_number + ')'}</h4>
      <br/>
      <ul>
        <li>Network/Streaming Service: {show.network}</li>
        <li>Number of Episodes: {show.total_episodes}</li>
        <li>Date Released: {show.release_date}</li>
        <li><a href={show.trailer_url} target="_blank" rel="noopener noreferrer">Link to Trailer</a></li>
      </ul>
      <br/>
      <h6>User Reviews:</h6>
      <p>{show.reviews}</p>
      <Link to="/shows">Back to all shows</Link>
    </Layout>
  )
}

export default Show
