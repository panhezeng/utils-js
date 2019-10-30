/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param accept 字符串，上传接收文件类型，默认不限制
 * @param size 数字，单位KB，文件使用默认限制大小，如果不限制大小则传0
 * @param width 数字，图片类型宽度限制，默认不限制
 * @param height 数字，图片类型高度限制，默认不限制
 * @return {{validation: boolean, message: string, error:number}}
 */
module.exports = async function checkUpload(file, accept, size, width, height) {
  const result = {
    message: "",
    error: 0,
    validation: true
  };
  if (/^\[object File\]$/.test(Object.prototype.toString.call(file))) {
    if (isNaN(size)) {
      size = 1024000;
    }
    let suffix = "";
    let index = file.name.lastIndexOf(".");
    if (index !== -1) {
      suffix = file.name.substring(index);
    }
    let typeName = suffix
      ? suffix.substring(1)
      : file.type && file.type.split("/")[0];

    if (file.type || suffix) {
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
      if (
        /^\[object String\]$/.test(Object.prototype.toString.call(accept)) &&
        !accept.split(",").some(value => {
          value = value.trim();
          return (
            value &&
            (new RegExp(`^${value}`).test(file.type) ||
              new RegExp(`^${value}`).test(suffix))
          );
        })
      ) {
        return {
          message: `只能上传${accept}!`,
          error: 1,
          validation: false
        };
      }

      if (
        (/^\.(png|jpe?g|gif|svg|webp)/.test(suffix) ||
          /^image/.test(file.type)) &&
        (!isNaN(width) || !isNaN(height))
      ) {
        try {
          await new Promise(function(resolve, reject) {
            const image = new Image();
            image.onload = function() {
              let message = "";
              if (!isNaN(width) && image.width > Number(width)) {
                message += `图片宽度不能超过${width}`;
              }
              if (!isNaN(height) && image.height > Number(height)) {
                if (message) message += "，";
                message += `图片高度不能超过${height}`;
              }
              if (message) {
                reject({
                  message,
                  error: 4,
                  validation: false
                });
              } else {
                resolve();
              }
            };
            image.src = URL.createObjectURL(file);
          });
        } catch (error) {
          return error;
        }
      }
    } else if (
      /^\[object String\]$/.test(Object.prototype.toString.call(accept))
    ) {
      return {
        message: `只能上传${accept}!`,
        error: 3,
        validation: false
      };
    }
    if (size) {
      size = Number(size);
      if (file.size / 1024 > size) {
        let error = size >= 1024 ? `${size / 1024}M` : `${size}KB`;
        return {
          message: `上传${typeName}大小不能超过${error}!`,
          error: 2,
          validation: false
        };
      }
    }
  } else {
    return {
      message: "file参数必须为File数据类型",
      error: 1,
      validation: false
    };
  }
  return {
    message: "",
    error: 0,
    validation: true
  };
};
