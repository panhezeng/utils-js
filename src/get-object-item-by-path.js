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
module.exports = function getObjectItemByPath(object, path, defaultValue) {
  if (
    /^\[object Object\]$/.test(Object.prototype.toString.call(object)) &&
    /^\[object String\]$/.test(Object.prototype.toString.call(path)) &&
    path !== ""
  ) {
    const pathArray = path.split(".");
    let index = 0;
    let length = pathArray.length;
    while (
      /^\[object Object\]$/.test(Object.prototype.toString.call(object)) &&
      index < length
    ) {
      object = object[pathArray[index++]];
    }
    return index && index == length ? object : defaultValue;
  }
  return defaultValue;
};
