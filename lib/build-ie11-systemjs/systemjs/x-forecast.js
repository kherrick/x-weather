System.register(["./utilities-0080f44a.js"],function(e,t){"use strict";var h,a,n,p,o,i,r,d;return{setters:[function(t){h=t.g,a=t.j,n=t.a,p=t.i,o=t.b,i=t.c,r=t.d,d=t.e,t.f}],execute:function(){var t=function(t){function n(){o(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),e=document.createElement("div");return e.innerHTML="\n  <style>\n    :host {\n      display: block;\n    }\n\n    div[data-x-forecast] h3 {\n      padding-left: 0.5rem;\n    }\n\n    div[data-x-forecast] ul {\n      list-style-type: none;\n      padding: 0 0 1rem 1.5rem;\n    }\n\n    div[data-x-forecast] ul > li {\n      padding: 0.5rem 0 0 0;\n    }\n  </style>\n\n  <div data-x-forecast>\n    <h3>Forecast</h3>\n  <div/>\n",t.attachShadow({mode:"open"}).appendChild(e),t}return r(n,t),i(n,[{key:"render",value:function(){var u=h(new Date).Y("-").m("-").d("").getResults(),m=document.createElement("div");this.forecast&&!a(this.forecast)&&this.forecast.forEach(function(t){var e=t.dt,n=t.temp,a=(t.pressure,t.humidity,t.weather,t.speed,t.deg,t.clouds,t.rain,document.createElement("ul")),o=document.createElement("u"),i=p(e);if(h(i).Y("-").m("-").d().getResults()===u)o.textContent="Today:";else{var r=h(i).date.toLocaleString("en-US",{weekday:"long"}),d=h(i).m("/").d().getResults();o.textContent=r+" ("+d+"):"}var s=document.createElement("li");s.appendChild(o),a.appendChild(s);var c=document.createElement("li");c.textContent="Day: "+Number.parseFloat(n.day).toFixed(2)+"°C",a.appendChild(c);var l=document.createElement("li");l.textContent="Night: "+Number.parseFloat(n.night).toFixed(2)+"°C",a.appendChild(l),m.appendChild(a)}),this.shadowRoot.querySelector("[data-x-forecast]").appendChild(m)}},{key:"connectedCallback",value:function(){var n=this,t=this.parentElement.getAttribute("appid"),e=this.parentElement.getAttribute("host"),a=this.parentElement.getAttribute("location");t&&e&&a&&this.getForecast({appid:t,host:e,location:a}).then(function(t){t.city,t.cod,t.message,t.cnt;var e=t.list;n.forecast=e,n.render()})}},{key:"getForecast",value:function(t){var e=t.appid,n=t.host,a=t.location;return fetch("https://"+n+"/data/2.5/forecast/daily?q="+a+"&mode=json&units=metric&cnt=14&appid="+e,{method:"GET"}).then(function(t){if(t.ok)return t.json()})}}]),n}(HTMLElement);e("load",function(){return n({customElements:customElements,tagName:"x-forecast",element:t})});e("default",t)}}});