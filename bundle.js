!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var r=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function d(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],d=t.base?i[0]+t.base:i[0],s=e[d]||0,u="".concat(d," ").concat(s);e[d]=s+1;var l=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function f(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(n,t){var e,r,o;if(t.singleton){var i=g++;e=m||(m=s(t)),r=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=s(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=d(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=d(n,t),s=0;s<e.length;s++){var u=c(e[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,'html {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: skyblue;\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n\r\n/* buttons and form submit inputs */\r\n.button {\r\n  background: maroon;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: sans-serif;\r\n  font-size: 1em;\r\n  margin: 0;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: background 250ms ease-in-ease-out,\r\n    transform 150ms ease;\r\n}\r\n\r\n.large-button {\r\n  padding: 1em 2em;\r\n}\r\n\r\n.small-button {\r\n  font-size: 0.8em;\r\n  font-variant: small-caps;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.button:hover,\r\n.button:focus {\r\n  background: red;\r\n}\r\n\r\n.button:focus {\r\n  outline: 1px solid #fff;\r\n  outline-offset: -4px;\r\n}\r\n\r\n.button:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n\r\n/* content container */\r\n.container {\r\n  background: white;\r\n  margin: 0 auto;\r\n  max-width: 960px;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\nh1 {\r\n  color: maroon;\r\n  font-size: 3em;\r\n  margin: 0;\r\n  padding: 10px 0 10px 20px;\r\n}\r\n\r\n.options {\r\n  display: grid;\r\n  grid-column-gap: 10px;\r\n  grid-row-gap: 10px;\r\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));\r\n}\r\n\r\n.select-project-form {\r\n  outline: 2px maroon solid;\r\n  outline-offset: -2px;\r\n  display: flex;\r\n  padding: 1em 2em;\r\n}\r\n\r\n.projects form label {\r\n  margin-right: 5px;\r\n}\r\n\r\n.projects form select {\r\n  flex: 1;\r\n}\r\n\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  grid-row-gap: 10px;\r\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\r\n}\r\n\r\n\r\n/* sections */\r\nsection {\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n/* forms */\r\n.project-form p label,\r\n.todo-form .title label,\r\n.todo-form .description label {\r\n  margin-right: 3px;\r\n}\r\n\r\n.project-form p {\r\n  display: flex;\r\n}\r\n\r\n.project-form p input {\r\n  flex: 1;\r\n}\r\n\r\n.todo-form {\r\n  display: grid;\r\n  grid-template-areas:\r\n    "title title"\r\n    "description description"\r\n    "due-date priority"\r\n    "submit submit";\r\n}\r\n\r\n.todo-form .title {\r\n  display: flex;\r\n  grid-area: title;\r\n}\r\n\r\n.todo-form .description {\r\n  display: flex;\r\n  grid-area: description;\r\n}\r\n\r\n.todo-form .due-date {\r\n  grid-area: due-date;\r\n}\r\n\r\n.todo-form .priority {\r\n  grid-area: priority;\r\n}\r\n\r\n.todo-form .submit {\r\n  display: flex;\r\n  grid-area: submit;\r\n}\r\n\r\n.todo-form .description input,\r\n.todo-form .title input,\r\n.todo-form .submit input {\r\n  flex: 1;\r\n}\r\n\r\n\r\n/* todo list */\r\n.todo-list li {\r\n  padding-right: 20px;\r\n}\r\n\r\n.small-button.details {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* Hidden Elements */\r\n.hidden {\r\n  height: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n',""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=function(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(e," */")}(r),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},function(n,t,e){"use strict";e.r(t);e(0);function r(n){const t=document.createElement("option");return t.value=t.textContent=n,t}function o(){const n=document.querySelector(".project-form"),t=document.querySelector(".todo-form");n.classList.toggle("hidden"),Array.from(t.classList).includes("hidden")||t.classList.toggle("hidden")}function i(){const n=document.querySelector(".todo-form"),t=document.querySelector(".project-form");n.classList.toggle("hidden"),Array.from(t.classList).includes("hidden")||t.classList.toggle("hidden")}function a(n,t,e,r){return{title:n,description:t,date:function(n){const t=n.split("-").map(n=>+n);return t[1]-=1,new Date(t[0],t[1],t[2])}(e),priority:r}}function c(n){return n.slice(0,1).toUpperCase()+n.slice(1)}function d(n){const t=document.createElement("p");return t.textContent=n,t}function s(n){const t=document.createElement("div");t.classList.add("hidden");const e=d("Due: "+function(n){const t=new Date(n);return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]}, ${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]}\n  ${t.getDate()}, ${t.getFullYear()}`}(n.date)),r=d("Priority: "+n.priority),o=d("Description: "+n.description);return t.appendChild(e),t.appendChild(r),t.appendChild(o),t}function u(n){const t=document.createElement("li"),e=s(n),r=function(n){const t=document.createElement("button");return t.classList.add("button","small-button","details"),t.textContent="show details",t.addEventListener("click",t=>{t.target.textContent.includes("show")?(t.target.textContent="hide details",n.classList.toggle("hidden")):(t.target.textContent="show details",n.classList.toggle("hidden"))}),t}(e);return t.appendChild(function(n){const t=document.createElement("h3");return t.textContent=c(n),t}(n.title)),t.appendChild(e),t.appendChild(r),t}function l(){const n=document.querySelector(".todo-list"),t=data.todos[data.current];!function(n){const t=document.querySelector(".list-title"),e=document.createElement("b");t.textContent="Current List: ",e.textContent=c(data.current),t.appendChild(e)}(data.current),n.innerHTML="",t.forEach(t=>{n.appendChild(u(t))})}function f(){const n=document.querySelector(".project-form"),t=document.querySelector(".project-selector");t.value=localStorage.getItem("current")||data.current,n.addEventListener("submit",e=>{var i;e.preventDefault(),i=e.target["project-name"].value,data.todos[i]=[],data.current=i,localStorage.setItem("projects",JSON.stringify(data.todos)),localStorage.setItem("current",i),t.appendChild(r(e.target["project-name"].value)),t.value=e.target["project-name"].value,n.reset(),o()})}function p(){const n=document.querySelector(".todo-form");n.addEventListener("submit",t=>{var e;t.preventDefault(),e=a(t.target.title.value,t.target.description.value,t.target["due-date"].value,t.target.priority.value),data.todos[data.current].push(e),data.todos[data.current]=data.todos[data.current].sort((n,t)=>n.date>t.date),localStorage.setItem("projects",JSON.stringify(data.todos)),l(),n.reset(),i()})}function m(){const n=document.querySelector(".project-button"),t=document.querySelector(".todo-button");n.addEventListener("click",o),t.addEventListener("click",i),document.querySelector(".project-selector").addEventListener("change",n=>{data.current=n.target.value,localStorage.setItem("current",n.target.value),l()}),f(),p()}document.addEventListener("DOMContentLoaded",(function(){(function(){const n=document.querySelector(".todo-form");document.querySelector(".container").offsetWidth>500&&n.classList.remove("hidden")})(),function(){const n=document.querySelector(".project-selector");(Object.keys(JSON.parse(localStorage.getItem("projects"))).sort()||Object.keys(data.todos)).forEach(t=>n.appendChild(r(t)))}(),m(),l()}))}]);