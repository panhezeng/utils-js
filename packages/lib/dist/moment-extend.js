!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("momentExtend",[],t):"object"==typeof exports?exports.momentExtend=t():e.momentExtend=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e){function t(t){e.locale(`${t.toLowerCase()}-custom`)}function n(t){let{hAlwaysShow:n=!1,hZeroPadWidth:o=1,mZeroPadWidth:r=1,sZeroPadWidth:a=2,mNoZeroPad:d=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=1e3*t;let s="";const u=Math.floor(e.duration(i).asHours());return(n||u)&&(s=`${String(u).padStart(o,"0")}:`,d||(r=2)),`${s+String(e.duration(i).minutes()).padStart(r,"0")}:${String(e.duration(i).seconds()).padStart(a,"0")}`}return e.calendarFormat=function(e,t){const n=e.diff(t,"days",!0);return e.year()<t.year()?"sameElse":n<-t.weekday()?"lastMonth":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":"sameElse"},e.defineLocale("zh-cn-custom",{parentLocale:"zh-cn",weekdaysShort:["周日","周一","周二","周三","周四","周五","周六"],calendar:{lastDay:"[昨天]",sameDay:"A h:mm",lastWeek:"ddd",lastMonth:"l",sameElse:"L"},meridiem:function(e,t,n){return e<9?"早上":e<11&&t<30?"上午":e<13&&t<30?"中午":e<18?"下午":"晚上"}}),e.defineLocale("en-custom",{parentLocale:"en",weekdaysShort:["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."],calendar:{lastDay:"[Yesterday]",sameDay:"A h:mm",lastWeek:"ddd",lastMonth:"l",sameElse:"L"},meridiem:function(e,t,n){return e<9||e<11&&t<30?"morning":e<13&&t<30?"noon":e<18?"afternoon":"night"}}),Object.defineProperty(e,"i18n",{get:function(){return t}}),Object.defineProperty(e,"durationFormatHMS",{get:function(){return n}}),{durationFormatHMS:n,i18n:t}}return e.d(t,{default:function(){return n}}),t.default}()}));