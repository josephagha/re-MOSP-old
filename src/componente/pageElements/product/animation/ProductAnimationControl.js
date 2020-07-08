import React, { Fragment } from 'react'

const ProductAnimationControl = props => {
  let leftBadgeRibbon = ''
  let donationValueConverter = '10€'

  if (props.donationValue == 1) {
    leftBadgeRibbon = 'left-1'
    donationValueConverter = '10€'
  } else if (props.donationValue == 2) {
    leftBadgeRibbon = 'left-2'
    donationValueConverter = '20€'
  } else if (props.donationValue == 3) {
    leftBadgeRibbon = 'left-3'
    donationValueConverter = '50€'
  } else if (props.donationValue == 4) {
    leftBadgeRibbon = 'left-4'
    donationValueConverter = '100€'
  }
  return (
    <Fragment>
      <div className={`badgeRibbon ${leftBadgeRibbon}`}>
        {donationValueConverter}
      </div>

      <div className="Range">
        <input
          id="rs-range-line"
          className="rs-range"
          type="range"
          min="1"
          max="4"
          value={props.donationValue}
          onChange={props.handleRange}
        />
      </div>

      <button className="orderButton">Reservieren</button>
    </Fragment>
  )
}

export default ProductAnimationControl
