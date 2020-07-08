import React, { useState, useEffect } from 'react'
import LoginFormInputs from './LoginFormInputs'
import Snackbars from '../../layout/Snackbars'

const LoginForm = () => {
  const [version, setVersion] = useState()
  const [erorrMessage, setErorrMessage] = useState()

  useEffect(() => {
    setVersion('0.2.0')
  }, [])

  const handleRange = event => {
    setErorrMessage(event)
  }

  return (
    <div className="login">
      {erorrMessage ? (
        <Snackbars
          erorrMessage={erorrMessage}
          classList={'errorMessage fontS mb-4 '}
        />
      ) : null}
      <h1>LOGIN</h1>
      <p>Ein Login für die gesamte AIDA Welt</p>
      <LoginFormInputs handleRange={handleRange} erorrMessage={erorrMessage} />
      <span className="fontXs fontDarkGrey center displayBlock">{version}</span>
    </div>
  )
}

export default LoginForm
