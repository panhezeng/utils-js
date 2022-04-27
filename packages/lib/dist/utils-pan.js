!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("utilsPan",[],t):"object"==typeof exports?exports.utilsPan=t():e.utilsPan=t()}(self,(function(){return function(){"use strict";var e={603:function(e,t,n){function r(e,t,n,r,o){return new Promise((a=>{if(/^\[object File]$/.test(Object.prototype.toString.call(e))){isNaN(Number(n))&&(n=1024e3);let i="";const s=e.name.lastIndexOf(".");-1!==s&&(i=e.name.substring(s));const u=i?i.substring(1):e.type&&e.type.split("/")[0];if(!u&&/^\[object String]$/.test(Object.prototype.toString.call(t))&&""!==t)a({message:`只能上传${t}!`,error:2,validation:!1});else if(isNaN(Number(n))&&(/^\.(png|jpe?g|gif|svg|webp)/i.test(i)||/^image/.test(e.type)?n=10240:(/^\.(ogg|mp3|wav|flac|aac)/i.test(i)||/^audio/.test(e.type))&&(n=102400)),n&&e.size/1024>Number(n))a({message:`上传${u}大小不能超过${n>=1024?n/1024+"M":`${n}KB`}!`,error:3,validation:!1});else if("string"!=typeof t||""===t||t.split(",").some((t=>(t=t.trim())&&(new RegExp(`^${t}`,"i").test(e.type)||new RegExp(`^${t}`,"i").test(i)))))if(!/^\.(png|jpe?g|gif|svg|webp)/i.test(i)&&!/^image/.test(e.type)||isNaN(Number(r))&&isNaN(Number(o)))a({message:"",error:0,validation:!0});else{const t=new Image;t.onload=function(){let e="";!isNaN(Number(r))&&t.width>Number(r)&&(e+=`图片宽度不能超过${r}`),!isNaN(Number(o))&&t.height>Number(o)&&(e&&(e+="，"),e+=`图片高度不能超过${o}`),a(e?{message:e,error:5,validation:!1}:{message:"",error:0,validation:!0})},t.onerror=function(){a({message:"无法获取图片宽度高度",error:6,validation:!1})},t.src=URL.createObjectURL(e)}else a({message:`只能上传${t}!`,error:4,validation:!1})}else a({message:"file参数必须为File数据类型",error:1,validation:!1})}))}n.d(t,{default:function(){return r}})},376:function(e,t){t.default={getItem:e=>e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null,setItem(e,t,n,r,o,a){if(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))return!1;let i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+(o?"; domain="+o:"")+(r?"; path="+r:"")+(a?"; secure":""),!0},removeItem(e,t,n){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:e=>!(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie),keys(){const e=document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:=[^;]*)?;\s*/);for(let t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}}},122:function(e,t,n){function r(e,t,n){const r=e.findIndex((function(e){return n?e[n]===t:e===t}));-1!==r&&e.splice(r,1)}n.d(t,{default:function(){return r}})},160:function(e,t,n){function r(e,t,n){return e.find((function(e){return n?e[n]===t:e===t}))}n.d(t,{default:function(){return r}})},419:function(e,t,n){function r(e,t,n){if(e&&"object"==typeof e&&"string"==typeof t&&""!==t){const r=t.split(".");let o=0;const a=r.length;for(;e&&"object"==typeof e&&o<a;)e=e[r[o++]];return o&&o==a?e:n}return n}n.d(t,{default:function(){return r}})},765:function(e,t,n){function r(e){function t(t){e.locale(`${t.toLowerCase()}-custom`)}function n(t){let{hAlwaysShow:n=!1,hZeroPadWidth:r=1,mZeroPadWidth:o=1,sZeroPadWidth:a=2,mNoZeroPad:i=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=1e3*t;let u="";const c=Math.floor(e.duration(s).asHours());return(n||c)&&(u=`${String(c).padStart(r,"0")}:`,i||(o=2)),`${u+String(e.duration(s).minutes()).padStart(o,"0")}:${String(e.duration(s).seconds()).padStart(a,"0")}`}return e.calendarFormat=function(e,t){const n=e.diff(t,"days",!0);return e.year()<t.year()?"sameElse":n<-t.weekday()?"lastMonth":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":"sameElse"},e.defineLocale("zh-cn-custom",{parentLocale:"zh-cn",weekdaysShort:["周日","周一","周二","周三","周四","周五","周六"],calendar:{lastDay:"[昨天]",sameDay:"A h:mm",lastWeek:"ddd",lastMonth:"l",sameElse:"L"},meridiem:function(e,t,n){return e<9?"早上":e<11&&t<30?"上午":e<13&&t<30?"中午":e<18?"下午":"晚上"}}),e.defineLocale("en-custom",{parentLocale:"en",weekdaysShort:["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."],calendar:{lastDay:"[Yesterday]",sameDay:"A h:mm",lastWeek:"ddd",lastMonth:"l",sameElse:"L"},meridiem:function(e,t,n){return e<9||e<11&&t<30?"morning":e<13&&t<30?"noon":e<18?"afternoon":"night"}}),Object.defineProperty(e,"i18n",{get:function(){return t}}),Object.defineProperty(e,"durationFormatHMS",{get:function(){return n}}),{durationFormatHMS:n,i18n:t}}n.d(t,{default:function(){return r}})},465:function(e,t){t.default={getItemByJSONParse(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"localStorage";try{return JSON.parse(window[t].getItem(e))}catch(e){return null}}}},631:function(e,t,n){function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return String(e).length>t?String(e).substring(0,t)+n:e}n.d(t,{default:function(){return r}})},166:function(e,t,n){function r(e){function t(t){return e(t,{whiteList:{},stripIgnoreTag:!0,stripIgnoreTagBody:["script"]}).trim().replace(/&nbsp;/g,"")}return Object.defineProperty(e,"cleanHtml",{get:function(){return t}}),{cleanHtml:t}}n.d(t,{default:function(){return r}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r,o,a,i,s,u,c,l,d,f={};return r=n(603),o=n(631),a=n(122),i=n(160),s=n(419),u=n(376),c=n(465),l=n(166),d=n(765),f.default={checkUpload:r.default,textOverflow:o.default,delArrayItemByValue:a.default,getArrayItemByValue:i.default,getObjectItemByPath:s.default,cookies:u.default,storage:c.default,xssExtend:l.default,momentExtend:d.default},f.default}()}));