import React from 'react'
import LoginForm from '../pageElements/login/LoginForm'

const LoginPage = props => {
  return (
    <div className="content2 loginBackground">
      <div className="container pb-5">
        <div className="row">
          <div className="col-xl-8 col-md-6  d-none d-lg-block d-md-block loginTitleMarginTop ">
            <h1 className="loginHeader fontXxl">
              Hier ist das Lächeln
              <br />
              zu Hause.
            </h1>
          </div>

          <div className="col-xl-4 col-md-6 col-sm-12 loginFormMarginTop">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
