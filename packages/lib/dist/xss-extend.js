!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("xssExtend",[],t):"object"==typeof exports?exports.xssExtend=t():e.xssExtend=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e){function t(t){return e(t,{whiteList:{},stripIgnoreTag:!0,stripIgnoreTagBody:["script"]}).trim().replace(/&nbsp;/g,"")}return Object.defineProperty(e,"cleanHtml",{get:function(){return t}}),{cleanHtml:t}}return e.d(t,{default:function(){return n}}),t.default}()}));