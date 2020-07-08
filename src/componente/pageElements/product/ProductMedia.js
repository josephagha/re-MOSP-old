import React, { Fragment } from 'react'
import cruiseAndHelp from '../../../media/image/cruiseAndHelp.jpg'

const ProductMedia = props => {
  return (
    <Fragment>
      <img
        src={cruiseAndHelp}
        className="img-fluid imgProductMedia mb-4"
        alt="aida cruise And Help"
      />
    </Fragment>
  )
}

export default ProductMedia
