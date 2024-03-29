# utils

## 示例

[点击预览](https://panhezeng.github.io/utils-js/)

示例代码目录 /example

## 说明

使用了 Promise, 请自行解决兼容性

```javascript
module.exports = {
  /**
   * 检查上传文件时是否满足要求
   * @param file
   * @param accept 字符串，上传接收文件类型，默认不限制
   * @param size 数字，单位KB，文件使用默认限制大小，如果不限制大小则传0
   * @param width 数字，图片类型宽度限制，默认不限制
   * @param height 数字，图片类型高度限制，默认不限制
   * @return {Promise<{validation: boolean, message: string, error:number}>}
   */
  checkUpload: require("./check-upload.js"),
  /**
   * 截取文本，并默认加上省略号
   * @param value
   * @param len
   * @param ellipsis
   * @returns {*}
   */
  textOverflow: require("./text-overflow.js"),
  /**
   * @param array 需要遍历的数组
   * @param value 删除与value相等的项
   * @param key 如果有key，则表示数组项是对象，则取对象此key的值和value比较
   */
  delArrayItemByValue: require("./del-array-item-by-value.js"),
  /**
   * @param array 需要遍历的数组
   * @param value 返回与value相等的项
   * @param key 如果有key，则表示数组项是对象，则取对象此key的值和value比较
   */
  getArrayItemByValue: require("./get-array-item-by-value.js"),
  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @param {Object} object The object to query.
   * @param {string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * getObjectItemByPath(object, 'a.b.c', 'default');
   * // => 'default'
   */
  getObjectItemByPath: require("./get-object-item-by-path.js"),
  cookies: require("./cookies.js"),
  storage: require("./storage.js"),
  xssExtend: require("./xss-extend.js"),
  momentExtend: require("./moment-extend.js"),
};
```

## 用法

`npm i @panhezeng/utils -S`

```javascript
import utils from "@panhezeng/utils";

import { checkUpload } from "@panhezeng/utils";

import checkUpload from "@panhezeng/utils/dist/check-upload.js";
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
