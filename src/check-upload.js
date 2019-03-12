/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param accept 上传接收文件类型
 * @param size 单位KB，默认NaN，文件使用默认限制大小，如果不限制大小则传0
 * @return {{validate: boolean, message: string, error:number}}
 */
module.exports = function checkUpload(file, accept = "", size = NaN) {
  const result = {
    message: "",
    error: 0,
    validate: true
  };
  if (Object.prototype.toString.call(file) === "[object File]") {
    if (isNaN(size)) {
      size = 1024000;
    }
    let isAccept = true;
    let suffix = "";
    let index = file.name.lastIndexOf(".");
    if (index !== -1) {
      suffix = file.name.substring(index);
    }
    let typeName = suffix
      ? suffix.substring(1)
      : file.type && file.type.split("/")[0];
    if (file.type && accept) {
      isAccept = accept.split(",").some(value => {
        value = value.trim();
        return (
          value &&
          (new RegExp(`^${value}`).test(file.type) ||
            new RegExp(`^${value}`).test(suffix))
        );
      });
      if (isNaN(size)) {
        if (
          /^\.(png|jpe?g|gif|svg|webp)/.test(suffix) ||
          /^image/.test(file.type)
        ) {
          size = 10240;
        } else if (
          /^\.(ogg|mp3|wav|flac|aac)/.test(suffix) ||
          /^audio/.test(file.type)
        ) {
          size = 102400;
        }
      }
    }
    let isLtSize = true;
    if (size) {
      isLtSize = file.size / 1024 < size;
    }
    if (!isAccept) {
      result.message = `只能上传${typeName}!`;
      result.error = 1;
      result.validate = false;
    }
    if (!isLtSize) {
      let error = size >= 1024 ? `${size / 1024}M` : `${size}KB`;
      result.message = `上传${typeName}大小不能超过${error}!`;
      result.error = 2;
      result.validate = false;
    }
  } else {
    result.message = "file参数必须为File数据类型";
    result.error = 3;
    result.validate = false;
  }
  return result;
};
