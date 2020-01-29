import React from 'react'
import Layout from '../shared/Layout'

const Home = (props, { user }) => (
  <Layout user={props.user}>
    <h4>Welcome to What to Watch!</h4>
  </Layout>
)

export default Home
