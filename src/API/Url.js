import { isGoodApi } from './restPages/REST'

const version = '0.2.0'

export const URL = () => {
  let apiUrl = ''
  switch (window.location.host) {
    case 'novatest-mospmvp.aida.de:8080':
    case 'novatest-mospmvp.aida.de:9000':
      apiUrl = 'https://api.novatest-mospmvp.aida.de/api'
      break
    case 'nova-mospmvp.aida.de:8080':
    case 'nova-mospmvp.aida.de:9000':
      apiUrl = 'https://api.mospmvp.nova.aida.de/api'
      break
    case 'test-mospmvp.aida.de:8080':
    case 'test-mospmvp.aida.de:9000':
      apiUrl = 'https://api.test-mospmvp.aida.de/api'
      break
    case 'mospmvp.aida.de:8080':
    case 'mospmvp.aida.de:9000':
      apiUrl = 'https://api.mospmvp.aida.de/api'
      break
    default:
      apiUrl = 'https://api.test-mospmvp.aida.de/api'
      break
  }
}

export let UrlHead = 'https://api.test-mospmvp.aida.de/api'
switch (window.location.host) {
  case 'novatest-mospmvp.aida.de:8080':
  case 'novatest-mospmvp.aida.de:9000':
    UrlHead = 'https://api.novatest-mospmvp.aida.de/api'
    break
  case 'nova-mospmvp.aida.de:8080':
  case 'nova-mospmvp.aida.de:9000':
    UrlHead = 'https://api.mospmvp.nova.aida.de/api'
    break
  case 'test-mospmvp.aida.de:8080':
  case 'test-mospmvp.aida.de:9000':
    UrlHead = 'https://api.test-mospmvp.aida.de/api'
    break
  case 'mospmvp.aida.de:8080':
  case 'mospmvp.aida.de:9000':
    UrlHead = 'https://api.mospmvp.aida.de/api'
    break
  default:
    UrlHead = 'https://api.test-mospmvp.aida.de/api'
    break
}

export const isGoodUrl = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=mvp01`

  return isGoodApi(url)
}
