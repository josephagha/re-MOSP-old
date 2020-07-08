import React, { useState, useEffect, Fragment } from 'react'
import { getLoginData } from '../../API/Validation'
import Snackbars from '../layout/Snackbars'

const LoginLink = ({ location }) => {
  const [isErorr, setIsErorr] = useState(false)
  const [erorrMessage, setErorrMessage] = useState()
  let request = location.search.toLowerCase().split('&')

  let paxId = request[0].replace('?paxid=', '')
  let embarkationDate = request[1].replace('embarkationdate=', '')
  let disembarkationDate = request[2].replace('disembarkationdate=', '')
  let bookingNumber = request[3].replace('bookingnumber=', '')

  useEffect(() => {
    const erorrAlert = () => {
      setIsErorr(true)
      setErorrMessage('Bad Link !')
    }

    getLoginData(paxId, embarkationDate, disembarkationDate, bookingNumber)

    setTimeout(() => {
      erorrAlert()
    }, 900)
  }, [])

  return (
    <Fragment>
      {isErorr ? (
        <Snackbars
          erorrMessage={erorrMessage}
          classList={'errorMessage fontS blockCenter mt-5'}
        />
      ) : null}

      {/*    <Link to={'/login'} className="loginLink fontS fontBlue mt-4">
        Zur Loginseite
      </Link> */}
    </Fragment>
  )
}

export default LoginLink
