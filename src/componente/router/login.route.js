import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth.route'
import LoginPage from '../pages/LoginPage'

export const LoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: '/products',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        } else {
          return <Component path="/login" exact component={LoginPage} />
        }
      }}
    />
  )
}
