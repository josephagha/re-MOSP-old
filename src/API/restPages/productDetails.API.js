import { UrlHead } from '../Url'
import { getLoginDataFromLocalStorage } from '../../API/Storage'
import auth from '../../../src/componente/router/auth.route'

//GET Products
export const getProductDetails = async product => {
  if (auth.isAuthenticated()) {
    try {
      let paxId = getLoginDataFromLocalStorage().paxId
      let embarkationDate = getLoginDataFromLocalStorage().embarkationDate
      let disembarkationDate = getLoginDataFromLocalStorage().disembarkationDate
      let bookingNumber = getLoginDataFromLocalStorage().bookingNumber
      let productCode = product
      if (!productCode) {
        productCode = 'mvp01'
      }

      let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=${productCode}`

      const data = await fetch(url, {
        headers: {
          Authorization: 'Basic ' + btoa('user001:001user'),
        },
      })
      const items = await data.json()
      return items
    } catch (error) {
      // console.log(error)
    }
  }
}

//POST Requests
export const postProductReservieren = async data => {
  if (auth.isAuthenticated()) {
    try {
      let paxId = getLoginDataFromLocalStorage().paxId
      let embarkationDate = getLoginDataFromLocalStorage().embarkationDate
      let disembarkationDate = getLoginDataFromLocalStorage().disembarkationDate
      let bookingNumber = getLoginDataFromLocalStorage().bookingNumber
      let productCode = data.productCode
      if (!productCode) {
        productCode = 'mvp01'
      }

      const allData = JSON.stringify({
        paxId: paxId,
        embarkationDate: embarkationDate,
        disembarkationDate: disembarkationDate,
        bookingNumber: bookingNumber,
        price: data.amount,
        productCode: productCode,
      })

      let url = `${UrlHead}/checkoutArticles`

      fetch(url, {
        method: 'post',
        headers: {
          Authorization: 'Basic ' + btoa('user001:001user'),
          'content-type': 'application/json',
        },
        body: allData,
      })
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          console.log(data)
        })
    } catch (error) {
      console.log(error)
    }
  }
}
