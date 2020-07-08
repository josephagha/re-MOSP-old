import {
  getLoginDataFromLocalStorage,
  removeLoginDataFromLocalStorage,
} from '../../API/Storage'

class Auth {
  constructor() {
    if (
      getLoginDataFromLocalStorage().userAuthenticated.length === 0 ||
      false
    ) {
      this.authenticated = false
    } else {
      this.authenticated = true
    }
  }

  login(cb) {
    this.authenticated = true
    cb()
  }

  logout(cb) {
    removeLoginDataFromLocalStorage()
    this.authenticated = false
    cb()
  }

  isAuthenticated() {
    return this.authenticated
  }

  userAuthenticated(cb, authenticated) {
    this.authenticated = authenticated
    cb()
  }
}

export default new Auth()
