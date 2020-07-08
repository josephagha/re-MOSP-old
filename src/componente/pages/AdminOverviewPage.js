import React from 'react'
import UpdateIcon from '../../media/svg/icons/UpdateIcon'

class AdminOverviewPage extends React.Component {
  render() {
    return (
      <div className="container pb-5">
        <div className="row mt-5">
          <div className="col-lg-9">
            <h1 className="fontDarkBlue fontXl">
              Übersicht Artikel-/Syncstatus
            </h1>
            <p className="fontDarkBlue">
              Aktuellen Status Ihrer Reservierungen.
            </p>
          </div>
          <div className="col-lg-3 mt-2">
            <button className=" fontWhite overviewButtonBlue">
              <span className="buttonIcon">
                <UpdateIcon />
              </span>
              Aktualisierung
            </button>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <table className="table table-bordered">
              <thead className="tableHead fontS">
                <tr>
                  <td>User</td>
                  <td>ID</td>
                  <td>Produkt</td>
                  <td>Preis</td>
                  <td>
                    <span className="statusIconDisable"></span>Status
                  </td>
                  <td>Kaufdatum</td>
                </tr>
              </thead>
              <tbody className="fontDarkBlue fontS">
                <tr>
                  <td>124587</td>
                  <td>001</td>
                  <td>Cruise&help</td>
                  <td>10€</td>
                  <td>
                    <span className="statusIconSuccess">✓</span>Gekauft
                  </td>
                  <td>01.08.2019</td>
                </tr>
                <tr>
                  <td>124587</td>
                  <td>001</td>
                  <td>Cruise&help</td>
                  <td>100€</td>
                  <td>
                    <span className="statusIconPending">!</span>in Bearbeitung
                  </td>
                  <td>01.08.2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminOverviewPage
