import React, { Fragment } from 'react'
import ShipIcon from '../../../media/svg/icons/ShipIcon'
import ShopIcon from '../../../media/svg/icons/ShopIcon'

const OverviewTableMobile = props => {
  return (
    <Fragment>
      {props.products
        ? props.products.map((prop, key) => (
            <div className="tableItem">
              <div className="tableFirstItem" key={key}>
                <div className="tableSourceIcon">
                  {sourceIcon(prop.sourceSystemCode)}
                </div>
                <span className="tableTitle fontXl fontDarkBlue">
                  {prop.productCode === 'MVP01' ? 'Cruise&help' : ''}
                </span>
                <span className="tablePreis fontXl fontDarkBlue">
                  {prop.price}€
                </span>
              </div>

              <div className="tableSecandItem">
                <span className="tableDate fontDarkBlue fontS">
                  {prop.reservationDate.slice(0, 10)}
                </span>
                <span className="tableStatus fontDarkBlue fontS">
                  {status(prop.articleState)}
                </span>
              </div>
            </div>
          ))
        : ''}
    </Fragment>
  )
}

export default OverviewTableMobile

const status = articleState => {
  switch (articleState) {
    case 'Order Requested':
      return (
        <Fragment>
          <span className="statusIconPending">✓</span>
          Reservierung angefragt
        </Fragment>
      )
    case 'Order Registered Checkin Pending':
      return (
        <Fragment>
          <span className="statusIconPending">!</span>
          Warten auf Gast-Checkin
        </Fragment>
      )

    case 'Order Rejected':
      return (
        <Fragment>
          <span className="statusIconPending">!</span>
          Kontingent erschöpft
        </Fragment>
      )
    case 'Order Fidelio Sync Pending':
      return (
        <Fragment>
          <span className="statusIconPending">!</span>
          In Bearbeitung
        </Fragment>
      )

    case 'Order Fidelio Rejected':
      return (
        <Fragment>
          <span className="statusIconPending">!</span>
          Reservierung nicht möglich
        </Fragment>
      )

    case 'Order Fidelio Confirmed':
    default:
      return (
        <Fragment>
          <span className="statusIconSuccess">✓</span>
          Kauf bestätigt
        </Fragment>
      )
  }
}

const sourceIcon = source => {
  switch (source) {
    case 'SHORE':
      return (
        <span className="shopIcon">
          <ShopIcon /> <span>Land</span>
        </span>
      )

    case 'SHIP':
    default:
      return (
        <span className="shipIcon">
          <ShipIcon />
          <span>Schiff</span>
        </span>
      )
  }
}
