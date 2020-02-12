import React from 'react'
import Layout from '../shared/Layout'

const Home = (props, { user }) => (
  <Layout user={props.user}>
    <div className="jumbotron">
      <h1 className="display-4">Welcome, to &quot;What to Watch&quot;!</h1>
      <p className="lead"></p>
      <hr className="my-4"/>
      <p>&quot;What to Watch&quot; is an easy to use web application meant to make finding your next favorite TV series that much easier to find. Start browsing shows by clicking the button below:</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#/shows" role="button">Start browsing</a>
      </p>
    </div>
  </Layout>
)

export default Home
