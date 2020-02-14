import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ShowForm from '../shared/ShowForm'
import Layout from '../shared/Layout'
import messages from '../AutoDismissAlert/messages'

const ShowCreate = (props) => {
  const [show, setShow] = useState({ title: '', season_number: '', total_episodes: '', network: '', release_date: '', trailer_url: '' })
  const [createdShowId, setCreatedShowId] = useState(null)

  const handleChange = event => {
    event.persist()
    setShow(show => ({ ...show, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/shows`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { show }
    })
      .then(res => setCreatedShowId(res.data.show.id))
      .then(() => alert({
        heading: 'Show created, huzzah!!',
        message: messages.showCreateSuccess,
        variant: 'success'
      }))
      .catch(error => {
        alert({
          heading: 'Shucks...',
          message: messages.showCreateFailure,
          variant: 'danger'
        })
        throw (error)
      })
  }

  if (createdShowId) {
    return <Redirect to={`/shows/${createdShowId}`} />
  }

  return (
    <Layout>
      <ShowForm
        show={show}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/shows"
      />
    </Layout>
  )
}

export default ShowCreate
