import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import Footer from '../shared/Footer'
import Home from '../routes/Home'
import About from '../About'
import CreateReview from '../routes/CreateReview'
import CreateShow from '../routes/CreateShow'
// import Layout from '../shared/Layout'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Shows from '../routes/Shows'
import Show from '../routes/Show'
import Reviews from '../routes/Reviews'
import Review from '../routes/Review'

const App = props => {
  const [user, setUser] = useState(null)
  const [alerts, setAlerts] = useState([])

  const clearUser = () => setUser(null)

  const alert = ({ heading, message, variant }) => {
    setAlerts([...alerts, { heading, message, variant }])
  }

  return (
    <React.Fragment>
      <Header user={user} />
      {alerts.map((alert, index) => (
        <AutoDismissAlert
          key={index}
          heading={alert.heading}
          variant={alert.variant}
          message={alert.message}
        />
      ))}
      <main className="container">
        <h3>{props.location.state ? props.location.state.msg : null}</h3>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/shows' component={Shows} />
        <Route exact path='/shows/:id' component={Show} />
        <Route exact path ='/reviews' component={Reviews} />
        <Route exact path ='/reviews/:id' component={Review} />

        <AuthenticatedRoute user={user} path='/create-review' render={({ match }) => (
          <CreateReview user={user} />
        )} />

        <AuthenticatedRoute user={user} path='/create-show' render={({ match }) => (
          <CreateShow user={user} />
        )} />

        <Route path='/sign-up' render={() => (
          <SignUp alert={alert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn alert={alert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut alert={alert} clearUser={clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword alert={alert} user={user} />
        )} />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(App)
