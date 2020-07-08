import React from 'react'
import ProductItem from '../pageElements/products/ProductItem'
import ProductNull from '../pageElements/products/ProductNull'
import { Link } from 'react-router-dom'
//import { getAllProducts } from '../../API/restPages/products.API'

const ProductsPage = () => {
  return (
    <div className="container pb-5">
      <div className="row mt-5">
        <div className="col-lg-4">
          <h1 className="fontXl fontDarkBlue ">Produkte</h1>
          <p className="fontS fontDarkBlue ">
            Der aktuelle MVP ist auf ein Produkt beschränkt.
          </p>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <Link to="product">
            <ProductItem />
          </Link>
        </div>

        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <ProductNull />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <ProductNull />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <ProductNull />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
