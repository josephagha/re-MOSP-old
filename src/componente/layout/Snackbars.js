import React from 'react'
import ExclamationMark from '../../media/svg/icons/ExclamationMark'

const Snackbars = ({ erorrMessage, classList }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className={classList}>
            <span className="errorMessageIcon">
              <ExclamationMark />
            </span>{' '}
            <span className="errorMessageText">{erorrMessage}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Snackbars
