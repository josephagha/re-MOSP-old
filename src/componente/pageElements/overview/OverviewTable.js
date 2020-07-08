import React, { Fragment } from 'react'
import ShipIcon from '../../../media/svg/icons/ShipIcon'
import ShopIcon from '../../../media/svg/icons/ShopIcon'

const OverviewTable = props => {
  return (
    <table className="table table-bordered">
      <thead className="tableHead fontS">
        <tr>
          <td>Produkt</td>
          <td>Preis</td>
          <td>Quelle</td>
          <td>
            <span className="statusIconDisable"></span>Status
          </td>
          <td>Kaufdatum</td>
        </tr>
      </thead>
      <tbody className="fontDarkBlue fontS">
        {props.products
          ? props.products.map((prop, key) => (
              <Fragment>
                {console.log(prop)}
                <tr key={key}>
                  <td>{prop.productCode === 'MVP01' ? 'Cruise&help' : ''}</td>
                  <td>{prop.price}€</td>
                  <td>{sourceIcon(prop.sourceSystemCode)}</td>
                  <td>{status(prop.articleState)}</td>
                  <td>{prop.reservationDate.slice(0, 10)}</td>
                </tr>
              </Fragment>
            ))
          : ''}
      </tbody>
    </table>
  )
}

export default OverviewTable

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
          <ShipIcon /> <span>Schiff</span>
        </span>
      )
  }
}
