!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("checkUpload",[],t):"object"==typeof exports?exports.checkUpload=t():e.checkUpload=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}({2:function(e,t){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2048;if("[object File]"!==Object.prototype.toString.call(e))throw new Error("file参数必须为File数据类型");var o=!0,n=e.type;if(t)switch(o=new RegExp("^"+t).test(e.type),t){case"image":n="图片";break;case"audio":n="音频",2048===r&&(r=51200);break;case"video":n="视频",2048===r&&(r=512e3)}var i=e.size/1024<r,a={message:"",error:0,validate:!0};if(o||(a.message="只能上传"+n+"!",a.error=1,a.validate=!1),!i){var u=r>=1024?r/1024+"M":r+"KB";a.message="上传"+n+"大小不能超过"+u+"!",a.error=2,a.validate=!1}return a}}})});