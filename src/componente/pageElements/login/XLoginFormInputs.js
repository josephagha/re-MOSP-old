import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import { isValidLoginData } from '../../../API/Validation'
import { getLoginData, setUserAuthenticated } from '../../../API/Storage'
import { isReadyToEnter } from '../../../API/restPages/loginPage.API'

import { DatepickerComponent } from './Datepicker'

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
      let storagDAta = getLoginData()
      if (storagDAta) {
        isReadyToEnter().then(e => {
          if (!e) {
            props.handleRange('falsche Eingabe !')
          } else {
            if (e.bookable) {
              setUserAuthenticated()
              window.location.href = `${window.location.origin}/product`
            } else {
              props.handleRange(e.toString())
            }
          }
        })
      }
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          paxId: Number,
          embarkationDate: '',
          disembarkationDate: '',
          bookingNumber: Number,
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          setPaxID(data.paxId)
          setEmbarkationDate(data.embarkationDate)
          setDisembarkationDate(data.disembarkationDate)
          setBookingNumber(data.bookingNumber)

          setLoading(true)

          setSubmitting(false)
          //resetForm()
        }}
        validationSchema={Yup.object().shape({
          paxId: Yup.number()
            .typeError('Das ist keine Nummer!')
            .positive('muss eine positive Zahl sein')
            .integer()
            .required('Erforderlich'),
          embarkationDate: Yup.string()
            .typeError('Das ist kein Datum!')
            .max(10, 'Darf nicht länger als 8 Zeichen sein')
            .required('Erforderlich'),
          disembarkationDate: Yup.string()
            .typeError('Das ist kein Datum!')
            .max(10, 'Darf nicht länger als 8 Zeichen sein')
            .required('Erforderlich'),
          bookingNumber: Yup.number()
            .typeError('Das ist keine Nummer!')
            .positive('muss eine positive Zahl sein')
            .integer()
            .required('Erforderlich'),
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
            <Field name="paxId" component={CustomInputComponent} />
            <DatepickerComponent name="embarkationDate" />
            <DatepickerComponent name="disembarkationDate" />
            {/*   <Field
              name="embarkationDate"
              component={CustomDatepickerComponent}
            />
            <Field
              name="disembarkationDate"
              component={CustomDatepickerComponent}
            /> */}
            <Field name="bookingNumber" component={CustomInputComponent} />

            <button className="submit" disabled={isSubmitting} type="submit">
              ANMELDEN
            </button>
            <br></br>
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
    <label>{[field.name]}</label>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

const CustomDatepickerComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div className="input-group inputContainer dateInput">
    <input
      name={[field.name]}
      type="date"
      {...field}
      {...props}
      required="required"
      data-date-format="DD MMMM YYYY"
    />
    <label>{[field.name]}</label>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

export default LoginFormInputs
