!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("utilsPan",[],t):"object"==typeof exports?exports.utilsPan=t():e.utilsPan=t()}(self,(function(){return function(){"use strict";var e={603:function(e,t,n){function o(e,t,n,o,r){return new Promise((a=>{if(/^\[object File]$/.test(Object.prototype.toString.call(e))){isNaN(n)&&(n=1024e3);let i="";const s=e.name.lastIndexOf(".");-1!==s&&(i=e.name.substring(s));const c=i?i.substring(1):e.type&&e.type.split("/")[0];if(!c&&/^\[object String]$/.test(Object.prototype.toString.call(t))&&""!==t)a({message:`只能上传${t}!`,error:2,validation:!1});else if(isNaN(n)&&(/^\.(png|jpe?g|gif|svg|webp)/i.test(i)||/^image/.test(e.type)?n=10240:(/^\.(ogg|mp3|wav|flac|aac)/i.test(i)||/^audio/.test(e.type))&&(n=102400)),n&&e.size/1024>Number(n))a({message:`上传${c}大小不能超过${n>=1024?n/1024+"M":`${n}KB`}!`,error:3,validation:!1});else if(/^\[object String]$/.test(Object.prototype.toString.call(t))&&""!==t&&!t.split(",").some((t=>(t=t.trim())&&(new RegExp(`^${t}`,"i").test(e.type)||new RegExp(`^${t}`,"i").test(i)))))a({message:`只能上传${t}!`,error:4,validation:!1});else if(!/^\.(png|jpe?g|gif|svg|webp)/i.test(i)&&!/^image/.test(e.type)||isNaN(o)&&isNaN(r))a({message:"",error:0,validation:!0});else{const t=new Image;t.onload=function(){let e="";!isNaN(o)&&t.width>Number(o)&&(e+=`图片宽度不能超过${o}`),!isNaN(r)&&t.height>Number(r)&&(e&&(e+="，"),e+=`图片高度不能超过${r}`),a(e?{message:e,error:5,validation:!1}:{message:"",error:0,validation:!0})},t.onerror=function(){a({message:"无法获取图片宽度高度",error:6,validation:!1})},t.src=URL.createObjectURL(e)}}else a({message:"file参数必须为File数据类型",error:1,validation:!1})}))}n.d(t,{default:function(){return o}})},376:function(e,t){t.default={getItem:e=>e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null,setItem(e,t,n,o,r,a){if(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))return!1;let i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+(r?"; domain="+r:"")+(o?"; path="+o:"")+(a?"; secure":""),!0},removeItem(e,t,n){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:e=>!(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie),keys(){const e=document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:=[^;]*)?;\s*/);for(let t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}}},122:function(e,t,n){function o(e,t,n){const o=e.findIndex((function(e){return n?e[n]===t:e===t}));-1!==o&&e.splice(o,1)}n.d(t,{default:function(){return o}})},160:function(e,t,n){function o(e,t,n){return e.find((function(e){return n?e[n]===t:e===t}))}n.d(t,{default:function(){return o}})},419:function(e,t,n){function o(e,t,n){if(/^\[object Object\]$/.test(Object.prototype.toString.call(e))&&/^\[object String\]$/.test(Object.prototype.toString.call(t))&&""!==t){const o=t.split(".");let r=0;const a=o.length;for(;/^\[object Object\]$/.test(Object.prototype.toString.call(e))&&r<a;)e=e[o[r++]];return r&&r==a?e:n}return n}n.d(t,{default:function(){return o}})},765:function(e,t,n){function o(e){function t(t){e.locale(`${t.toLowerCase()}-custom`)}function n(t){let{hAlwaysShow:n=!1,hZeroPadWidth:o=1,mZeroPadWidth:r=1,sZeroPadWidth:a=2,mNoZeroPad:i=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=1e3*t;let c="";const u=Math.floor(e.duration(s).asHours());return(n||u)&&(c=`${String(u).padStart(o,"0")}:`,i||(r=2)),`${c+String(e.duration(s).minutes()).padStart(r,"0")}:${String(e.duration(s).seconds()).padStart(a,"0")}`}return e.calendarFormat=function(e,t){const n=e.diff(t,"days",!0);return e.year()<t.year()?"sameElse":n<-t.weekday()?"lastMonth":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":"sameElse"},e.defineLocale("zh-cn-custom",{parentLocale:"zh-cn",weekdaysShort:["周日","周一","周二","周三","周四","周五","周六"],calendar:{lastDay:"[昨天]",sameDay:"A h:mm",lastWeek:"ddd",lastMonth:"l",sameElse:"L"},meridiem:function(e,t,n){return e<9?"早上":e<11&&t<30?"上午":e<13&&t<30?"中午":e<18?"下午":"晚上"}}),e.defineLocale("en-custom",{parentLocale:"en",weekdaysShort:["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."],calendar:{lastDay:"[Yesterday]",sameDay:"A h:mm",lastWeek:"ddd",lastMonth:"l",sameElse:"L"},meridiem:function(e,t,n){return e<9||e<11&&t<30?"morning":e<13&&t<30?"noon":e<18?"afternoon":"night"}}),Object.defineProperty(e,"i18n",{get:function(){return t}}),Object.defineProperty(e,"durationFormatHMS",{get:function(){return n}}),{durationFormatHMS:n,i18n:t}}n.d(t,{default:function(){return o}})},465:function(e,t){t.default={getItemByJSONParse(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"localStorage";try{return JSON.parse(window[t].getItem(e))}catch(e){return null}}}},631:function(e,t,n){function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return String(e).length>t?String(e).substring(0,t)+n:e}n.d(t,{default:function(){return o}})},166:function(e,t,n){function o(e){function t(t){return e(t,{whiteList:{},stripIgnoreTag:!0,stripIgnoreTagBody:["script"]}).trim().replace(/&nbsp;/g,"")}return Object.defineProperty(e,"cleanHtml",{get:function(){return t}}),{cleanHtml:t}}n.d(t,{default:function(){return o}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o,r,a,i,s,c,u,l,d,f={};return o=n(603),r=n(631),a=n(122),i=n(160),s=n(419),c=n(376),u=n(465),l=n(166),d=n(765),f.default={checkUpload:o.default,textOverflow:r.default,delArrayItemByValue:a.default,getArrayItemByValue:i.default,getObjectItemByPath:s.default,cookies:c.default,storage:u.default,xssExtend:l.default,momentExtend:d.default},f.default}()}));