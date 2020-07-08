export const getLoginData = () => {
  return {
    paxId: localStorage.getItem('paxId') || '',
    embarkationDate: localStorage.getItem('embarkationDate') || '',
    disembarkationDate: localStorage.getItem('disembarkationDate') || '',
    bookingNumber: localStorage.getItem('bookingNumber') || '',
  }
}

export const getLoginDataFromLocalStorage = () => {
  return {
    paxId: localStorage.getItem('paxId') || '',
    embarkationDate: localStorage.getItem('embarkationDate') || '',
    disembarkationDate: localStorage.getItem('disembarkationDate') || '',
    bookingNumber: localStorage.getItem('bookingNumber') || '',
    userAuthenticated: localStorage.getItem('userAuthenticated') || '',
  }
}

export const setLoginDataToLocalStorage = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  localStorage.setItem('paxId', paxId)
  localStorage.setItem('embarkationDate', embarkationDate)
  localStorage.setItem('disembarkationDate', disembarkationDate)
  localStorage.setItem('bookingNumber', bookingNumber)
  localStorage.setItem('userAuthenticated', true)
}

export const setUserAuthenticated = () => {
  localStorage.setItem('userAuthenticated', true)
}

export const setToLocalStorage = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  localStorage.setItem('paxId', paxId)
  localStorage.setItem('embarkationDate', embarkationDate)
  localStorage.setItem('disembarkationDate', disembarkationDate)
  localStorage.setItem('bookingNumber', bookingNumber)
}

export const removeLoginDataFromLocalStorage = () => {
  localStorage.removeItem('paxId')
  localStorage.removeItem('embarkationDate')
  localStorage.removeItem('disembarkationDate')
  localStorage.removeItem('bookingNumber')
  localStorage.removeItem('userAuthenticated')
}

export const clearAllLocalStorage = error => {
  localStorage.clear()
}
