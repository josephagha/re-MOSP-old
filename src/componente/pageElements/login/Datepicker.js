import React, { useState, useRef, useEffect } from 'react'

import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import de from 'date-fns/locale/de'

import 'react-datepicker/dist/react-datepicker.css'

export const DatepickerComponent = props => {
  const [startDate, setStartDate] = useState()
  const [isDatePicker, setIsDatePicker] = useState()
  const datePickerRef1 = useRef()

  const label = document.createElement('label')

  const textLabel = document.createTextNode(props.name)
  label.appendChild(textLabel)

  const datePicker = document.querySelector(
    '.react-datepicker__input-container'
  )

  console.log(datePicker)

  useEffect(() => {
    if (datePicker != null) {
      if (!isDatePicker) {
        datePicker.appendChild(label)
        setIsDatePicker(true)
      }
    }
  })

  const handleChange = date => {
    setStartDate(date)
  }

  registerLocale('de', de)

  return (
    <div className="input-group inputContainer dateInput">
      <DatePicker
        id={props.name}
        locale="de"
        name={props.name}
        selected={startDate}
        onChange={handleChange}
        autoComplete="off"
        required="required"
      />
    </div>
  )
}
