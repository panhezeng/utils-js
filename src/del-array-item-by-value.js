/**
 * @param array 需要遍历的数组
 * @param value 删除与value相等的项
 * @param key 如果有key，则表示数组项是对象，则取对象此key的值和value比较
 */
module.exports = function delArrayItemByValue (array, value, key) {
  const delIndex = array.findIndex(function (element) {
    if (key) {
      return (element[key] === value)
    } else {
      return (element === value)
    }
  })
  if (delIndex !== -1) {
    array.splice(delIndex, 1)
  }
}
