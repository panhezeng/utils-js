!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("checkUpload",[],t):"object"==typeof exports?exports.checkUpload=t():e.checkUpload=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r,n,o,a){var i,c,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^\[object File\]$/.test(Object.prototype.toString.call(t))){e.next=31;break}if(isNaN(n)&&(n=1024e3),i="",-1!==(c=t.name.lastIndexOf("."))&&(i=t.name.substring(c)),u=i?i.substring(1):t.type&&t.type.split("/")[0],!t.type&&!i){e.next=22;break}if(isNaN(n)&&(/^\.(png|jpe?g|gif|svg|webp)/.test(i)||/^image/.test(t.type)?n=10240:(/^\.(ogg|mp3|wav|flac|aac)/.test(i)||/^audio/.test(t.type))&&(n=102400)),!/^\[object String\]$/.test(Object.prototype.toString.call(r))||""===r||r.split(",").some((function(e){return(e=e.trim())&&(new RegExp("^".concat(e)).test(t.type)||new RegExp("^".concat(e)).test(i))}))){e.next=11;break}return e.abrupt("return",{message:"只能上传".concat(r,"!"),error:1,validation:!1});case 11:if(!/^\.(png|jpe?g|gif|svg|webp)/.test(i)&&!/^image/.test(t.type)||isNaN(o)&&isNaN(a)){e.next=20;break}return e.prev=12,e.next=15,new Promise((function(e,r){var n=new Image;n.onload=function(){var t="";!isNaN(o)&&n.width>Number(o)&&(t+="图片宽度不能超过".concat(o)),!isNaN(a)&&n.height>Number(a)&&(t&&(t+="，"),t+="图片高度不能超过".concat(a)),t?r({message:t,error:4,validation:!1}):e()},n.src=URL.createObjectURL(t)}));case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(12),e.abrupt("return",e.t0);case 20:e.next=24;break;case 22:if(!/^\[object String\]$/.test(Object.prototype.toString.call(r))||""===r){e.next=24;break}return e.abrupt("return",{message:"只能上传".concat(r,"!"),error:3,validation:!1});case 24:if(!n){e.next=29;break}if(n=Number(n),!(t.size/1024>n)){e.next=29;break}return s=n>=1024?"".concat(n/1024,"M"):"".concat(n,"KB"),e.abrupt("return",{message:"上传".concat(u,"大小不能超过").concat(s,"!"),error:2,validation:!1});case 29:e.next=32;break;case 31:return e.abrupt("return",{message:"file参数必须为File数据类型",error:1,validation:!1});case 32:return e.abrupt("return",{message:"",error:0,validation:!0});case 33:case"end":return e.stop()}}),e,null,[[12,17]])})),function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))});return function(e,r,n,o,a){return t.apply(this,arguments)}}()}])}));