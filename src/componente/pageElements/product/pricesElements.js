import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const PricesElements = props => {
  const [fieldValue, setFieldValue] = useState()

  const selectedLabel = e => {
    e.currentTarget.classList.add('selectedLabel')
  }
  return (
    <div>
      <Formik
        initialValues={{
          donationValue: null,
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          setSubmitting(false)
          //resetForm()
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
                ? props.prices.map(item => (
                    <label
                      className="optionButton"
                      for={item.priceFrom}
                      onClick={() => {
                        setFieldValue('donationValue', item.priceFrom)
                      }}
                      onClick={selectedLabel}
                    >
                      {item.priceFrom}
                      {props.currencyCode === 'EUR' ? '€' : props.currencyCode}
                      <input
                        className="optionInput "
                        key={item}
                        type="radio"
                        name="donationValue"
                        value={item.priceFrom}
                        id={item.priceFrom}
                        checked={values.donationValue === item.priceFrom}
                        onChange={() =>
                          setFieldValue('donationValue', item.priceFrom)
                        }
                      />
                    </label>
                  ))
                : ''}
            </div>
            <button
              className="orderButton"
              disabled={isSubmitting}
              type="submit"
            >
              RESERVIEREN
            </button>
            <br></br>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PricesElements
