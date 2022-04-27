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
export default function getObjectItemByPath(
  object: Record<any, any>,
  path: string,
  defaultValue?: any
) {
  if (
    object &&
    typeof object === 'object' &&
    typeof path === 'string' &&
    path !== ''
  ) {
    const pathArray = path.split('.');
    let index = 0;
    const length = pathArray.length;
    while (object && typeof object === 'object' && index < length) {
      object = object[pathArray[index++]];
    }
    return index && index == length ? object : defaultValue;
  }
  return defaultValue;
}
