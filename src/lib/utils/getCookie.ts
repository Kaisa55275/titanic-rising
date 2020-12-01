/* eslint-disable no-prototype-builtins */
export const cookie = {
  getObj: function () {
    const cookie = document.cookie
    const cookieObj = {}
    if (cookie) {
      Array.prototype.forEach.call(cookie.split(';'), function (c) {
        const array = [c][0].split('=').map(function (a) {
          return a.trim()
        })
        const key = ~c.indexOf('=') ? unescape(array[0]) : ''
        const val = ~c.indexOf('=') ? unescape(array[1]) : unescape(array[0])
        if (!cookieObj.hasOwnProperty(key)) {
          cookieObj[key] = [val]
        } else {
          cookieObj[key].push(val)
        }
      })
    }
    return cookieObj
  },
  getByName: function (name) {
    let ret = []
    const cookieObj = this.getObj()
    if (cookieObj.hasOwnProperty(name)) {
      ret = cookieObj[name]
    }
    return ret
  },
  deleteByName: function (name, path) {
    const str =
      escape(name) +
      '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (path ? '; path=' + path : '')
    document.cookie = str
  }
}
