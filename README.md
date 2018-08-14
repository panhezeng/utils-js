# utils

## 示例

[点击预览](https://panhezeng.github.io/utils-js/)

示例代码目录 /example

## 说明

```javascript
module.exports = {
  checkUpload: require('./check-upload.js'),
  textOverflow: require('./text-overflow.js'),
  delArrayItemByValue: require('./del-array-item-by-value.js'),
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

