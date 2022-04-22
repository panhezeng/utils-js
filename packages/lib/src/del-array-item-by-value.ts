/**
 * @param array 需要遍历的数组
 * @param value 删除与value相等的项
 * @param key 如果有key，则表示数组项是对象，则取该对象命名为此key的属性值和value比较
 */
export default function delArrayItemByValue(
  array: any[],
  value: any,
  key: string
) {
  const delIndex = array.findIndex(function (element) {
    if (key) {
      return element[key] === value;
    } else {
      return element === value;
    }
  });
  if (delIndex !== -1) {
    array.splice(delIndex, 1);
  }
}
