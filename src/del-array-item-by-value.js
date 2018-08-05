/**
 * @param array 需要删除项目的数组
 * @param value 等于此值得项目删除
 * @param key 如果有key，则表示数组项目是对象，则取对象此key的值和value比较
 */
module.exports = function (array, value, key) {
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
