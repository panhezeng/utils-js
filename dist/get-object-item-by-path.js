!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("getObjectItemByPath",[],e):"object"==typeof exports?exports.getObjectItemByPath=e():t.getObjectItemByPath=e()}(window,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}({4:function(t,e){t.exports=function(t,e,r){if(/^\[object Object\]$/.test(Object.prototype.toString.call(t))&&/^\[object String\]$/.test(Object.prototype.toString.call(e))&&""!==e){for(var o=e.split("."),n=0,u=o.length;/^\[object Object\]$/.test(Object.prototype.toString.call(t))&&n<u;)t=t[o[n++]];return n&&n==u?t:r}return r}}})}));