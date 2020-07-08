import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

import { isValidLoginData } from '../../../API/Validation'
import { getLoginData, setUserAuthenticated } from '../../../API/Storage'
import { isReadyToEnter } from '../../../API/restPages/loginPage.API'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import de from 'date-fns/locale/de'

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
        isReadyToEnter().then(e => {
          if (!e) {
            props.handleRange('falsche Eingabe !')
          } else {
            if (e.prices) {
              setUserAuthenticated()
              window.location.href = `${window.location.origin}/product`
            } else {
              if (e.status == 500) {
                props.handleRange('falsche Eingabe !')
              } else {
                if (e.message) {
                  props.handleRange(e.message.toString())
                }
              }
            }
          }
        })
      }
    }
  }

  const getSchema = () => {
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
  }

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
            <Field name="paxId" component={CustomInputComponent} />
            <Field name="embarkationDate" component={DatepickerComponent} />
            <Field name="disembarkationDate" component={DatepickerComponent2} />
            <Field name="bookingNumber" component={CustomInputComponent} />
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
    <label className="loginLabel">{[field.name]}</label>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

const DatepickerComponent = ({
  field,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const [isDatePicker, setIsDatePicker] = useState()

  const label = document.createElement('label')
  label.setAttribute('for', [field.name])
  const textLabel = document.createTextNode([field.name])
  label.appendChild(textLabel)

  const datePicker = document.getElementsByClassName(
    'react-datepicker__input-container '
  )

  const closeIcon1 = document.getElementsByClassName(
    'react-datepicker__close-icon'
  )
  useEffect(() => {
    if (datePicker != null) {
      if (!isDatePicker) {
        datePicker[0].appendChild(label)
        setIsDatePicker(true)
      }
    }
    /*   if (closeIcon1[0]) {
      window.onload = function() {
        closeIcon1[0].click()
      }
    } */
  })

  registerLocale('de', de)

  return (
    <div className="input-group inputContainer dateInput">
      <DatePicker
        id={[field.name]}
        locale="de"
        isClearable
        dateFormat="d-MM-yyyy "
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        name={[field.name]}
        selected={field.value}
        onChange={date => setFieldValue([field.name], date)}
        autoComplete="off"
        required="required"
      />

      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  )
}

const DatepickerComponent2 = ({
  field,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const [isDatePicker, setIsDatePicker] = useState()

  const label = document.createElement('label')
  label.setAttribute('for', [field.name])
  const textLabel = document.createTextNode([field.name])
  label.appendChild(textLabel)

  const datePicker = document.getElementsByClassName(
    'react-datepicker__input-container '
  )
  const closeIcon2 = document.getElementsByClassName(
    'react-datepicker__close-icon'
  )

  useEffect(() => {
    if (datePicker != null) {
      if (!isDatePicker) {
        datePicker[1].appendChild(label)
        setIsDatePicker(true)
      }
    }
    /*   window.onload = function() {
      closeIcon2[1].click()
    } */
  })

  registerLocale('de', de)

  return (
    <div className="input-group inputContainer dateInput">
      <DatePicker
        id={[field.name]}
        locale="de"
        isClearable
        dateFormat="d-MM-yyyy "
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        name={[field.name]}
        selected={field.value}
        onChange={date => setFieldValue([field.name], date)}
        autoComplete="off"
        required="required"
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  )
}

export default LoginFormInputs
