import React, { useState, useEffect } from 'react'
import ProductMediaAnimation from '../pageElements/product/animation/ProductMediaAnimation'
import ProductDetails from '../pageElements/product/ProductDetails'
import ProductAnimationControl from '../pageElements/product/animation/ProductAnimationControl'
import { getProductDetails } from '../../API/restPages/productDetails.API'

const ProductDetailsPage = () => {
  const [donationValue, setDonationValue] = useState([])
  const [product, setProduct] = useState([])

  useEffect(() => {
    const data = getProduct()
    setProduct(data)
  }, [])

  const handleRange = event => {
    setDonationValue(event.target.value)
  }

  return (
    <div className="container pb-5">
      <div className="row ">
        <div className="col-md-5 col-xs-12 mt-ProductDetails">
          <ProductDetails />
          <span className="mt-3 d-none k d-md-block d-lg-block">
            <ProductAnimationControl
              handleRange={handleRange}
              donationValue={donationValue}
            />
          </span>
        </div>
        <div className="col-md-7 col-xs-12">
          <ProductMediaAnimation donationValue={donationValue} />
        </div>
        <div className="col-md-5 col-xs-12">
          <span className="d-block d-md-none">
            <ProductAnimationControl
              handleRange={handleRange}
              donationValue={donationValue}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
