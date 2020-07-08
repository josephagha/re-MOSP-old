import React from 'react'
import cruiseAndHelp from '../../../media/image/cruiseAndHelp.jpg'

const ProductItem = props => {
  return (
    <div className="productItem ">
      <div className="title">
        <h2 className="fontM ">Cruise & help</h2>
        <p className="fontXxs ">Letzte Aktivität 01.08.2019</p>
      </div>
      <div className="blackGradient"></div>
      <img className="productImg" src={cruiseAndHelp} alt="cruise And Help" />
    </div>
  )
}

export default ProductItem
