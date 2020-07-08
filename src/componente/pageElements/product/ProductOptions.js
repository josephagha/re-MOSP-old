import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { postProductReservieren } from '../../../API/restPages/productDetails.API'
import HistoryIcon from '../../../media/svg/icons/HistoryIcon'

import { Link } from 'react-router-dom'

const ProductOptions = props => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          donationValue: null,
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          let productData = {
            amount: data.donationValue,
            productCode: 'mvp01',
          }
          postProductReservieren(productData)

          props.popup()

          setSubmitting(false)
          resetForm()
        }}
        validationSchema={Yup.object().shape({
          donationValue: Yup.number()
            .typeError('Not a numbBar')
            .positive()
            .integer()
            .required('required'),
        })}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <div className="productOptionsItems">
              {props.prices
                ? props.prices.map((item, key) => (
                    <label
                      className={
                        'optionButton ' +
                        (values.donationValue === item.priceFrom
                          ? 'selectedLabel'
                          : '')
                      }
                      htmlFor={item.priceFrom}
                      onClick={() => {
                        setFieldValue('donationValue', item.priceFrom)
                      }}
                      key={key}
                    >
                      {item.priceFrom}
                      {props.currencyCode === 'EUR' ? '€' : props.currencyCode}
                      <input
                        className="optionInput "
                        type="radio"
                        name="donationValue"
                        value={item.priceFrom}
                        id={item.priceFrom}
                        checked={values.donationValue === item.priceFrom}
                        onChange={() =>
                          setFieldValue('donationValue', item.priceFrom)
                        }
                        onClick={props.handleRange}
                      />
                    </label>
                  ))
                : ''}
            </div>

            <button
              className={
                props.donationValue ? 'orderButton' : 'orderButtonDisabled'
              }
              disabled={isSubmitting}
              type="submit"
            >
              {props.donationValue != null
                ? `RESERVIEREN | ${props.donationValue}€`
                : 'RESERVIEREN'}
            </button>
          </Form>
        )}
      </Formik>

      <Link to={'/overview'} className="overviewLink ">
        <HistoryIcon />
        <span>Übersicht &amp; Kauf-Historie</span>
      </Link>
    </Fragment>
  )
}

export default ProductOptions
