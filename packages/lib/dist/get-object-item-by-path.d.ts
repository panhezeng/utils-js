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
export default function getObjectItemByPath(object: Record<any, any>, path: string, defaultValue?: any): any;
