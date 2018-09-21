/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param type 文件类型
 * @param size 单位KB
 * @return {{validate: boolean, message: string, error:number}}
 */
module.exports = function checkUpload (file, type = '', size = -1) {
  const result = {
    message: '',
    error: 0,
    validate: true
  }
  if (Object.prototype.toString.call(file) === '[object File]') {
    let isType = true
    let typeName = file.type
    if (file.type && type) {
      isType = type.split(',').some(value => value && new RegExp(`^${value}`).test(file.type))
      switch (file.type.split('/')[0]) {
        case 'image':
          typeName = '图片'
          if (size === -1) {
            size = 2048
          }
          break
        case 'audio':
          typeName = '音频'
          if (size === -1) {
            size = 51200
          }
          break
        case 'video':
          typeName = '视频'
          if (size === -1) {
            size = 512000
          }
          break
      }
    }
    let isLtSize = true
    if (size > 0) {
      isLtSize = file.size / 1024 < size
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
  } else {
    result.message = 'file参数必须为File数据类型'
    result.error = 3
    result.validate = false
  }
  return result
}
