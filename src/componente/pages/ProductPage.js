import React, { useState, useEffect } from "react";
import ProductDetails from "../pageElements/product/ProductDetails";
import ProductMedia from "../pageElements/product/ProductMedia";
import ProductMediaAnimation from "../pageElements/product/animation/ProductMediaAnimation";
import ProductOptions from "../pageElements/product/ProductOptions";
import Preloader from "../layout/Preloader";
import { getProductDetails } from "../../API/restPages/productDetails.API";

const ProductPage = (props) => {
  const [donationValue, setDonationValue] = useState();
  const [currencyCode, setCurrencyCode] = useState();
  const [availableSlotsCount, setAvailableSlotsCount] = useState();
  const [prices, setPrices] = useState([]);

  const [loading, setLoading] = useState(true);

  let animation = true;

  useEffect(() => {
    const data = getProductDetails().then((result) => {
      if (result) {
        setCurrencyCode(result.currencyCode);
        setAvailableSlotsCount(result.availableSlotsCount);
        setPrices(result.prices);

        setLoading(true);
      }
    });
  }, []);

  const handleRange = (event) => {
    setDonationValue(event.target.value);
  };
  if (loading) {
    return (
      <div className="container pb-5 ">
        <div className="row ">
          <div className="col-lg-5 col-xs-12 mt-ProductDetails mb-ProductDetails">
            <ProductDetails
              availableSlotsCount={availableSlotsCount}
              donationValue={donationValue}
            />
            <span className="mt-3 d-none   d-lg-block">
              <ProductOptions
                currencyCode={currencyCode}
                prices={prices}
                handleRange={handleRange}
                donationValue={donationValue}
                popup={props.rest.closePopup}
              />
            </span>
          </div>
          <div
            className={
              !animation
                ? "col-lg-7 col-xs-12 mt-ProductDetails"
                : "col-lg-7 col-xs-12 "
            }
          >
            {animation ? (
              <ProductMediaAnimation donationValue={donationValue} />
            ) : (
              <ProductMedia />
            )}
          </div>
          <div className="col-lg-5 col-xs-12">
            <span className="d-block d-lg-none">
              <ProductOptions
                currencyCode={currencyCode}
                prices={prices}
                handleRange={handleRange}
                donationValue={donationValue}
                popup={props.rest.closePopup}
              />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default ProductPage;
