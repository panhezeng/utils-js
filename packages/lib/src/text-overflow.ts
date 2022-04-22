/**
 * 截取文本，并默认加上省略号
 * @param value
 * @param len
 * @param ellipsis
 * @returns {*}
 */
export default function textOverflow(
  value: string,
  len = 50,
  ellipsis = '...'
) {
  if (String(value).length > len) {
    return String(value).substring(0, len) + ellipsis;
  }
  return value;
}
