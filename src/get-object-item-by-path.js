/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * getObjectItemByPath(object, 'a.b.c', 'default');
 * // => 'default'
 */
module.exports = function getObjectItemByPath (object, path, defaultValue) {
  if (Object.prototype.toString.call(object) === '[object Object]' && Object.prototype.toString.call(path) === '[object String]') {
    const pathArray = path.split('.')
    let index = 0
    let length = pathArray.length
    while (Object.prototype.toString.call(object) === '[object Object]' && index < length) {
      object = object[pathArray[index++]]
    }
    return (index && index == length) ? object : defaultValue
  }
  return defaultValue
}
