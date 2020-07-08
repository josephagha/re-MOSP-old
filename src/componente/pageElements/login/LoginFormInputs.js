import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'

import { isValidLoginData } from '../../../API/Validation'
import { getLoginData, setUserAuthenticated } from '../../../API/Storage'
import { isReadyToEnter } from '../../../API/restPages/loginPage.API'

const LoginFormInputs = props => {
  const [paxId, setPaxID] = useState(false)
  const [embarkationDate, setEmbarkationDate] = useState(false)
  const [disembarkationDate, setDisembarkationDate] = useState(false)
  const [bookingNumber, setBookingNumber] = useState(false)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    isAllowToEnter()
  })

  const isAllowToEnter = () => {
    if (loading) {
      isValidLoginData(
        paxId,
        embarkationDate,
        disembarkationDate,
        bookingNumber
      )
      let storagData = getLoginData()

      if (
        storagData.paxId != null &&
        storagData.embarkationDate != null &&
        storagData.disembarkationDate != null &&
        storagData.bookingNumber != null
      ) {
        isReadyToEnter().then(result => {
          if (!result) {
            props.handleRange('falsche Eingabe !')
          } else {
            if (result.prices) {
              setUserAuthenticated()
              window.location.href = `${window.location.origin}/product`
            } else {
              if (result.status === 500) {
                props.handleRange('falsche Eingabe !')
              } else {
                if (result.message) {
                  props.handleRange(result.message.toString())
                }
              }
            }
          }
        })
      }
    }
  }

  /*   const getSchema = () => {
    return yup.object().shape({
      paxId: yup
        .number()
        .typeError('Das ist keine Nummer!')
        .positive('muss eine positive Zahl sein')
        .integer()
        .required('Erforderlich'),
      embarkationDate: yup.date().required('Erforderlich'),
      disembarkationDate: yup.date().required('Erforderlich'),
      bookingNumber: yup
        .number()
        .typeError('Das ist keine Nummer!')
        .positive('muss eine positive Zahl sein')
        .integer()
        .required('Erforderlich'),
    })
  } */

  return (
    <div>
      <Formik
        initialValues={{
          paxId: Number,
          embarkationDate: new Date(),
          disembarkationDate: new Date(),
          bookingNumber: Number,
        }}
        validate={(values, props) => {
          const errors = {}

          if (!values.paxId) {
            errors.paxId = 'Required'
          }
          if (!values.embarkationDate) {
            errors.embarkationDate = 'Required'
          }
          if (!values.disembarkationDate) {
            errors.disembarkationDate = 'Required'
          }
          if (!values.bookingNumber) {
            errors.bookingNumber = 'Required'
          }

          return errors
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          setPaxID(data.paxId)
          setEmbarkationDate(data.embarkationDate)
          setDisembarkationDate(data.disembarkationDate)
          setBookingNumber(data.bookingNumber)

          //console.log(JSON.stringify(data, null, 2))
          setLoading(true)

          setSubmitting(false)
          //resetForm()
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <Field
              name="paxId"
              labelTag="Pax Id"
              component={CustomInputComponent}
            />
            <Field
              name="embarkationDate"
              labelTag="Beginn der Reise"
              component={DatepickerComponent}
            />
            <Field
              name="disembarkationDate"
              labelTag="Ende der Reise"
              component={DatepickerComponent}
            />
            <Field
              name="bookingNumber"
              labelTag="Booking Number"
              component={CustomInputComponent}
            />
            <button className="submit" disabled={isSubmitting} type="submit">
              ANMELDEN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div className="input-group inputContainer">
    <input
      className="loginInput"
      name={[field.name]}
      type="number"
      value={[field.value]}
      {...field}
      {...props}
      required="required"
    />
    <label className="loginLabel">{[props.labelTag]}</label>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

const DatepickerComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div className="input-group inputContainer">
    <input
      className="loginInput"
      name={[field.name]}
      type="date"
      value={[field.value]}
      {...field}
      {...props}
      required="required"
    />
    <label className="loginLabel">{[props.labelTag]}</label>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

export default LoginFormInputs
