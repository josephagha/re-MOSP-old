import React from 'react'

const AdminOverviewTableMobile = props => {
  return (
    <div className="tableItem">
      <div className="tableFirstItemAdmin">
        <span className="tableUserId fontExtraBlue fontXs">
          User: 5846218 <span className="fontDarkBlue fontXs">ID: 100</span>
        </span>
        <span className="tableTitle fontXl fontDarkBlue">Cruise&help</span>
        <span className="tablePreis fontXl fontDarkBlue">100€</span>
      </div>

      <div className="tableSecandItem">
        <span className="tableDate fontDarkBlue fontS">01.08.2019</span>
        <span className="tableStatus fontDarkBlue fontS">
          <span className="statusIconPending">!</span>in Bearbeitung
        </span>
      </div>
    </div>
  )
}

export default AdminOverviewTableMobile
