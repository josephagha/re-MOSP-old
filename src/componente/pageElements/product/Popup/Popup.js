import React from 'react'
import CloseIcon from '../../../../media/svg/icons/CloseIcon'
import CheckMark from '../../../../media/svg/icons/CheckMark'

const Popup = props => {
  const redirectToTarget = () => {
    window.location.href = '/overview'
  }

  return (
    <div className="popup">
      <div className="popup_inner">
        <div
          className="closeIcon popupClose"
          //onClick={props.closePopup}
          onClick={redirectToTarget}
        >
          <CloseIcon />
        </div>
        <div className="statusMark">
          <CheckMark />
        </div>
        <h2 className="fontXl fontDarkBlue">Super</h2>
        <p className="fontS fontDarkBlue">Es hat geklappt :)</p>
      </div>
    </div>
  )
}

export default Popup
