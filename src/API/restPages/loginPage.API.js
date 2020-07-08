import { UrlHead } from '../Url'
import { getLoginData } from '../Storage'

//GET owerview
export const isReadyToEnter = async () => {
  let storagDAta = getLoginData()
  if (storagDAta) {
    try {
      let paxId = storagDAta.paxId
      let embarkationDate = storagDAta.embarkationDate
      let disembarkationDate = storagDAta.disembarkationDate
      let bookingNumber = storagDAta.bookingNumber

      let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=mvp01`

      const data = await fetch(url, {
        headers: {
          Authorization: 'Basic ' + btoa('user001:001user'),
        },
      })

      const items = await data.json()
      return items
    } catch (error) {
      return false
    }
  }
}
