/**
 * @param array 需要遍历的数组
 * @param value 返回与value相等的项
 * @param key 如果有key，则表示数组项是对象，则取对象此key的值和value比较
 */
module.exports = function (array, value, key) {
  return array.find(function (element) {
    if (key) {
      return (element[key] === value)
    } else {
      return (element === value)
    }
  })
}
