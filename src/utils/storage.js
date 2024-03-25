const storagePrefix = "RENEW_"
export class Storage {
  storageKey

  constructor(storageKey) {
    this.storageKey = storageKey
  }
  setData(data) {
    window.localStorage.setItem(this.storageKey, data)
  }

  getData(needJsonParse = false) {
    if (needJsonParse) {
      const data = window.localStorage.getItem(this.storageKey)
      if (data) return JSON.parse(data)

      return null
    }

    return window.localStorage.getItem(this.storageKey) || ""
  }

  clearData() {
    window.localStorage.removeItem(this.storageKey)
  }
  getToken() {
    try {
      return JSON.parse(
        window.localStorage.getItem(`${storagePrefix}token`)
      )
    } catch (error) {
      return ""
    }
  }
  setToken(token) {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
    window.dispatchEvent(new Event("storage"))
  }
  clearToken() {
    window.localStorage.removeItem(`${storagePrefix}token`)
    window.localStorage.removeItem(`${storagePrefix}user`)
  }
  removeKey(key) {
    window.localStorage.removeItem(key)
  }
  getKey(key) {
    window.localStorage.getItem(key)
  }
}
