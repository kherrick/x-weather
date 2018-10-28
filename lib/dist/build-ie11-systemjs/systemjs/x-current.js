System.register(["./utilities-0080f44a.js"],function(e,t){"use strict";var i,n,r,a,o,s,u,c;return{setters:[function(t){i=t.g,n=t.a,r=t.h,a=t.i,o=t.b,s=t.c,u=t.d,c=t.e,t.f}],execute:function(){var t=function(t){function n(){o(this,n);var t=c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));t.mocked=!0;var e=document.createElement("div");return e.innerHTML='\n  <style>\n    :host {\n      display: block;\n    }\n\n    div[data-x-current] h3 {\n      padding-left: 0.5rem;\n    }\n\n    div[data-x-current] ul {\n      list-style-type: none;\n      padding: 0 0 1rem 1.5rem;\n    }\n\n    div[data-x-current] ul > li {\n      padding: 0.5rem 0 0 0;\n    }\n\n    div[data-x-current] #time {\n      display: none;\n    }\n  </style>\n\n  <div data-x-current>\n    <h3>Currently</h3>\n    <ul>\n      <li id="time"></li>\n      <li><img alt="" id="icon"></img></li>\n      <li><span id="temperature"></span>°C</li>\n    </ul>\n  </div>\n',t.attachShadow({mode:"open"}).appendChild(e),t}return u(n,t),s(n,[{key:"connectedCallback",value:function(){var a=this,t=this.parentElement.getAttribute("appid"),e=this.parentElement.getAttribute("host"),n=this.parentElement.getAttribute("location");t&&e&&n&&this.getCurrentWeather({appid:t,host:e,location:n}).then(function(t){t.coord;var e=t.weather,n=(t.base,t.main),i=(t.visibility,t.wind,t.clouds,t.dt),r=(t.sys,t.id,t.name,t.cod,n.temp-273);a.temperature=Number.parseFloat(r).toFixed(2),a.iconSrc="http://openweathermap.org/img/w/"+e[0].icon+".png",a.iconAlt=e[0].description,a.timestamp=i})}},{key:"getCurrentWeather",value:function(t){var e=t.appid,n=t.host,i=t.location;return fetch("https://"+n+"/data/2.5/weather?q="+i+"&appid="+e,{method:"GET"}).then(function(t){if(t.ok)return t.json()})}},{key:"timestamp",set:function(t){r(this.shadowRoot,"time",i(a(t)).H(":").M(":").S().getResults())}},{key:"iconAlt",set:function(t){this.shadowRoot.querySelector("#icon").setAttribute("alt",t)}},{key:"iconSrc",set:function(t){this.shadowRoot.querySelector("#icon").src=t}},{key:"temperature",set:function(t){this.setAttribute("temperature",t),r(this.shadowRoot,"temperature",t)}}]),n}(HTMLElement);e("load",function(){return n({customElements:customElements,tagName:"x-current",element:t})});e("default",t)}}});