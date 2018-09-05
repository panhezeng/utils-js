# utils

## 示例

[点击预览](https://panhezeng.github.io/utils-js/)

示例代码目录 /example

## 说明

```javascript
module.exports = {
  /**
   * 检查上传文件时是否满足要求
   * @param file
   * @param type 文件类型
   * @param size 单位KB
   * @return {{validate: boolean, message: string, error:number}}
   */
  checkUpload: require('./check-upload.js'),
  /**
   * 截取文本，并默认加上省略号
   * @param value
   * @param len
   * @param ellipsis
   * @returns {*}
   */
  textOverflow: require('./text-overflow.js'),
  /**
   * @param array 需要遍历的数组
   * @param value 删除与value相等的项
   * @param key 如果有key，则表示数组项是对象，则取对象此key的值和value比较
   */
  delArrayItemByValue: require('./del-array-item-by-value.js'),
  /**
   * @param array 需要遍历的数组
   * @param value 返回与value相等的项
   * @param key 如果有key，则表示数组项是对象，则取对象此key的值和value比较
   */
  getArrayItemByValue: require('./get-array-item-by-value.js'),
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
  getObjectItemByPath: require('./get-object-item-by-path.js'),
  cookies: require('./cookies.js'),
  storage: require('./storage.js'),
  xss: require('./xss.js')
}


```
   

## 用法

`npm i @panhezeng/utils -S`

```javascript
import utils from '@panhezeng/utils'

import { checkUpload } from '@panhezeng/utils'

import checkUpload from '@panhezeng/utils/dist/check-upload.js'

```

## 编译

``` bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm version patch && npm publish --access public
```

