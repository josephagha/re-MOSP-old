import React, { Fragment } from 'react'

const ProductDetails = props => {
  return (
    <Fragment>
      <h1 className="fontXxl fontDarkBlue ">BAUEN SIE MIT!</h1>
      <p className="fontL fontDarkBlue mb-5">
        Unterstützen Sie den Bau von Schulen <br /> und geben Sie Kindern eine
        Zukunft
      </p>
      <h2 className="fontS fontBlue">
        Noch{' '}
        {props.donationValue != null
          ? props.availableSlotsCount - 1
          : props.availableSlotsCount}{' '}
        Bausteine verfügbar
      </h2>
      <div className="line"></div>
    </Fragment>
  )
}

export default ProductDetails
