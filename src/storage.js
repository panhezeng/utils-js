module.exports = {
  getItemByJSONParse (item, api = 'localStorage') {
    try {
      return JSON.parse(window[api].getItem(item))
    } catch (e) {
      return null
    }
  }
}


