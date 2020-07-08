import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ProtectedRoute } from './componente/router/Protected.route'
import { LoginRoute } from './componente/router/login.route'

import './styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import loginLink from './componente/router/loginLink'
import LoginPage from './componente/pages/LoginPage'
import ProductsPage from './componente/pages/ProductsPage'
import ProductPage from './componente/pages/ProductPage'
import OverviewPage from './componente/pages/OverviewPage'
import AdminOverviewPage from './componente/pages/AdminOverviewPage'

import Popup from './componente/pageElements/product/Popup/Popup'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showPopup: false,
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }
  render() {
    return (
      <Fragment>
        <div className="content">
          <Switch>
            <Route
              path="/loginLink/:request"
              exact
              component={loginLink}
            ></Route>

            <LoginRoute path="/login" exact component={LoginPage}></LoginRoute>
            <ProtectedRoute path="/products" component={ProductsPage} />
            <ProtectedRoute
              path="/product"
              component={ProductPage}
              closePopup={this.togglePopup.bind(this)}
            />
            <ProtectedRoute path="/overview" component={OverviewPage} />

            <ProtectedRoute
              path="/admin-overview"
              component={AdminOverviewPage}
            />
            <LoginRoute path="*" component={LoginPage} />
          </Switch>
        </div>

        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('App')
)
