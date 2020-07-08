import { isGoodUrl } from './Url'

import { setToLocalStorage, setLoginDataToLocalStorage } from './Storage'

export const getLoginData = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  isGoodUrl(paxId, embarkationDate, disembarkationDate, bookingNumber).then(
    data => {
      // && data.availableSlotsCount > 0
      if (data.bookable !== undefined) {
        setLoginDataToLocalStorage(
          paxId,
          embarkationDate,
          disembarkationDate,
          bookingNumber
        )
        window.location.href = `${window.location.origin}/product`
      } else {
        return data
      }
    }
  )
}

export const isValidLoginData = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  if (isAllValidOk(paxId, embarkationDate, disembarkationDate, bookingNumber)) {
    return true
  } else {
    return false
  }
}

export const isAllValidOk = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  let okPaxID = isNumeric(paxId)
  let okEmbarkationDate = isValidDate(embarkationDate)
  let okDisembarkationDate = isValidDate(disembarkationDate)
  let okBookingNumber = isNumeric(bookingNumber)
  if (okPaxID && okEmbarkationDate && okDisembarkationDate && okBookingNumber) {
    setToLocalStorage(
      okPaxID,
      okEmbarkationDate,
      okDisembarkationDate,
      okBookingNumber
    )
    return true
  } else {
    return false
  }
}

export const isValidNummber = num => {
  if (typeof num == 'number') {
    return num
  }
}

const isNumeric = num => {
  if (!isNaN(num)) {
    return num
  }
}

export const isValidDate = s => {
  let mydate = s

  if (typeof mydate == 'object') {
    let curr_date = mydate.getDate()
    let curr_date_to_string = curr_date.toString()

    switch (curr_date_to_string) {
      case '1':
        curr_date_to_string = '01'
        break
      case '2':
        curr_date_to_string = '02'
        break
      case '3':
        curr_date_to_string = '03'
        break
      case '4':
        curr_date_to_string = '04'
        break
      case '5':
        curr_date_to_string = '05'
        break
      case '6':
        curr_date_to_string = '06'
        break
      case '7':
        curr_date_to_string = '07'
        break
      case '8':
        curr_date_to_string = '08'
        break
      case '9':
      default:
        curr_date_to_string = '09'
        break
    }

    let curr_month = mydate.getMonth()
    let curr_month_plus = Number(curr_month) + 1
    let curr_month_to_string = curr_month_plus.toString()
    switch (curr_month_to_string) {
      case '1':
        curr_month_to_string = '01'
        break
      case '2':
        curr_month_to_string = '02'
        break
      case '3':
        curr_month_to_string = '03'
        break
      case '4':
        curr_month_to_string = '04'
        break
      case '5':
        curr_month_to_string = '05'
        break
      case '6':
        curr_month_to_string = '06'
        break
      case '7':
        curr_month_to_string = '07'
        break
      case '8':
        curr_month_to_string = '08'
        break
      case '9':
      default:
        curr_month_to_string = '09'
        break
    }

    let curr_year = mydate.getFullYear()

    let mydatestr =
      curr_year + '-' + curr_month_to_string + '-' + curr_date_to_string

    const date = dateToArray(mydatestr)
    return mydatestr
  } else {
    let mydatestr = dateToArray(mydate)
    let curr_year = isNumeric(mydatestr[0])
    let curr_month = isNumeric(mydatestr[1])
    let curr_date = isNumeric(mydatestr[2])
    let myFullDate = curr_year + '-' + curr_month + '-' + curr_date

    return myFullDate
  }
}

const dateToArray = data => {
  if (data.includes('/')) {
    let dataArray = data.split('/')
    let m = dataArray[0]
    let d = dataArray[1]
    let y = dataArray[2]
    let englischData = [y, m, d]
    return englischData
  }
  if (data.includes('-')) {
    return data.split('-')
  }
  if (data.includes('.')) {
    return data.split('.')
  }
}
