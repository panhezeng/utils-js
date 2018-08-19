/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param type 文件类型
 * @param size 单位KB
 * @return {{validate: boolean, message: string, error:number}}
 */
module.exports = function (file, type = 'image', size = 2048) {
  if (Object.prototype.toString.call(file) !== '[object File]') {
    throw new Error('file参数必须为File数据类型')
  }

  let isType = true
  let typeName = file.type
  if (type) {
    isType = new RegExp(`^${type}`).test(file.type)
    switch (type) {
      case 'image':
        typeName = '图片'
        break
      case 'audio':
        typeName = '音频'
        if (size === 2048) {
          size = 51200
        }
        break
      case 'video':
        typeName = '视频'
        if (size === 2048) {
          size = 512000
        }
        break
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
    let error = size >= 1024 ? `${size / 1024}M` : `${size}KB`
    result.message = `上传${typeName}大小不能超过${error}!`
    result.error = 2
    result.validate = false
  }
  return result
}
