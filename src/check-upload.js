/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param type 文件类型
 * @param size 单位KB，默认undefined，文件使用默认限制大小，如果不限制大小则传0
 * @return {{validate: boolean, message: string, error:number}}
 */
module.exports = function checkUpload (file, type = '', size = undefined) {
  const result = {
    message: '',
    error: 0,
    validate: true
  }
  if (Object.prototype.toString.call(file) === '[object File]') {
    if (size === undefined) {
      size = 1024000
    }
    let isType = true
    let suffix = ''
    let index = file.name.lastIndexOf('.')
    if (index !== -1) {
      suffix = file.name.substring(index)
    }
    let typeName = suffix ? suffix.substring(1) : file.type
    if (file.type && type) {
      isType = type.split(',').some(value => value && (new RegExp(`^${value}`).test(file.type) || new RegExp(`^${value}`).test(suffix)))
      const fileType = file.type.split('/')[0]
      switch (fileType) {
        case 'image':
          typeName = '图片'
          if (size === undefined) {
            size = 10240
          }
          break
        case 'audio':
          typeName = '音频'
          if (size === undefined) {
            size = 102400
          }
          break
        case 'video':
          typeName = '视频'
          break
      }
    }
    let isLtSize = true
    if (size) {
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
