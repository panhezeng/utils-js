/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param type 文件类型
 * @param size 单位KB
 * @return {{validate: boolean, message: string, error:number}}
 */
export default function (file, type = 'image', size = 2048) {
  const isType = file.type.indexOf(`${type}/`) !== -1
  let typeName = '图片'
  if (type === 'audio') {
    typeName = '音频'
    if (size === 2048) {
      size = 51200
    }
  } else if (type === 'video') {
    typeName = '视频'
    if (size === 2048) {
      size = 512000
    }
  }
  const isLtSize = file.size / 1024 < size
  const result = {
    message: '',
    error: 0,
    validate: true
  }
  if (!isType) {
    result.message = `只能上传${typeName}!`
    result.error = 1
    result.validate = false
  }
  if (!isLtSize) {
    let error = size >= 1024 ? `${size}KB` : `${size / 1024}M`
    result.message = `上传${typeName}大小不能超过${error}!`
    result.error = 2
    result.validate = false
  }
  return result
}
