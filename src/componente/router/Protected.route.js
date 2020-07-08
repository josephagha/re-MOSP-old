import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth.route'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // console.log({ ...rest })

  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} rest={{ ...rest }} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}
