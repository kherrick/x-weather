System.register([],function(t,e){"use strict";return{execute:function(){t("b",function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),t("c",function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}()),t("d",function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}),t("e",function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e});var i=t("f",function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)});t("g",function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"cToF",n=function(t){return t+273.15},r=function(t){return t-273.15},i=function(t){return 1.8*t+32},u=function(t){return 5*(t-32)/9};return{cToK:n,kToC:r,cToF:i,fToC:u,kToF:function(t){return i(r(t))},fToK:function(t){return n(u(t))}}[e](t)}),t("l",function(){var n=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(n+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})}),t("m",function(t,e){var n=[];n.push(e);for(var r=void 0;n.length;){if((r=n.shift()).id===t)return r;n.push.apply(n,i(r.children))}return!1}),t("k",function(t){return 0===Object.keys(t).length&&t.constructor===Object}),t("a",function(t){var e=t.customElements,n=t.tagName,r=t.element,i=function(t){var e=t.customElements,n=t.tagName,r=t.element;e.define(n,r)};window.customElements?i({customElements:e,tagName:n,element:r}):document.addEventListener("WebComponentsReady",function(){i({customElements:e,tagName:n,element:r})})}),t("j",function(t){return new Date(1e3*t)}),t("h",function(t){return{date:t,results:"",getResults:function(){return this.results},getTimeStamp:function(){return this.date.getTime()},Y:function(t){return this.results+=this.date.getFullYear(),this.sep(t)&&(this.results+=t),this},m:function(t){return this.results+=this.pad(this.date.getMonth()+1),this.sep(t)&&(this.results+=t),this},d:function(t){return this.results+=this.pad(this.date.getDate()),this.sep(t)&&(this.results+=t),this},H:function(t){return this.results+=this.pad(this.date.getHours()),this.sep(t)&&(this.results+=t),this},M:function(t){return this.results+=this.pad(this.date.getMinutes()),this.sep(t)&&(this.results+=t),this},S:function(t){return this.results+=this.pad(this.date.getSeconds()),this.sep(t)&&(this.results+=t),this},pad:function(t){return t<10?"0"+t:t},sep:function(t){return!!t}}}),t("i",function(t){var e=String(t).split(":"),n=Number(e[0]),r=Number(e[1])||0,i=Number(e[2])||0;(n<0||23<n||r<0||59<r||i<0||59<i)&&(n=r=i=0);var u="12";return 0<n&&n<=12&&(u=String(n)),12<n&&(u=String(n%u)),u+=r<10?":0"+r:":"+r,u+=i<10?":0"+i:":"+i,u+=12<=n?" PM":" AM"})}}});