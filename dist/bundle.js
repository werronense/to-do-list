!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function d(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var l=d(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:s,updater:h(p,e),references:1}),r.push(s)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(t,e){var n,r,o;if(e.singleton){var i=g++;n=m||(m=u(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(e),r=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=d(n[r]);a[o].references--}for(var i=c(t,e),u=0;u<n.length;u++){var s=d(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,'html {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: skyblue;\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n\r\n/* buttons and form submit inputs */\r\n.button {\r\n  background: maroon;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: sans-serif;\r\n  font-size: 1em;\r\n  margin: 0;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: background 250ms ease-in-out,\r\n    transform 150ms ease;\r\n}\r\n\r\n.large-button {\r\n  padding: 1em 2em;\r\n}\r\n\r\n.small-button {\r\n  font-size: 0.8em;\r\n  font-variant: small-caps;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.button:hover,\r\n.button:focus {\r\n  background: red;\r\n}\r\n\r\n.button:focus {\r\n  outline: 1px solid #fff;\r\n  outline-offset: -4px;\r\n}\r\n\r\n.button:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n\r\n/* content container */\r\n.container {\r\n  background: white;\r\n  margin: 0 auto;\r\n  max-width: 960px;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\nh1 {\r\n  color: maroon;\r\n  font-size: 3em;\r\n  margin: 0;\r\n  padding: 10px 0 10px 20px;\r\n}\r\n\r\n.options {\r\n  display: grid;\r\n  grid-column-gap: 10px;\r\n  grid-row-gap: 10px;\r\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));\r\n}\r\n\r\n.select-project-form {\r\n  outline: 2px maroon solid;\r\n  outline-offset: -2px;\r\n  display: flex;\r\n  padding: 1em 2em;\r\n}\r\n\r\n.projects form label {\r\n  margin-right: 5px;\r\n}\r\n\r\n.projects form select {\r\n  flex: 1;\r\n}\r\n\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  grid-row-gap: 10px;\r\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\r\n}\r\n\r\n\r\n/* sections */\r\nsection {\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n/* forms */\r\n.project-form p label,\r\n.todo-form .title label,\r\n.todo-form .description label {\r\n  margin-right: 3px;\r\n}\r\n\r\n.project-form p {\r\n  display: flex;\r\n}\r\n\r\n.project-form p input {\r\n  flex: 1;\r\n}\r\n\r\n.todo-form {\r\n  display: grid;\r\n  grid-template-areas:\r\n    "title title"\r\n    "description description"\r\n    "due-date priority"\r\n    "submit submit";\r\n}\r\n\r\n.todo-form .title {\r\n  display: flex;\r\n  grid-area: title;\r\n}\r\n\r\n.todo-form .description {\r\n  display: flex;\r\n  grid-area: description;\r\n}\r\n\r\n.todo-form .due-date {\r\n  grid-area: due-date;\r\n}\r\n\r\n.todo-form .priority {\r\n  grid-area: priority;\r\n}\r\n\r\n.todo-form .submit {\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-area: submit;\r\n}\r\n\r\n.todo-form .submit input {\r\n  width: 100%;\r\n}\r\n\r\n.todo-form .description input,\r\n.todo-form .title input {\r\n  flex: 1;\r\n}\r\n\r\n\r\n/* todo list */\r\n.todo-list {\r\n  list-style: none;\r\n  padding-left: 10px;\r\n}\r\n\r\n.todo-list li {\r\n  padding-right: 20px;\r\n}\r\n\r\n.todo-title {\r\n  display: inline-block;\r\n  flex: 1;\r\n  margin: 10px 0 10px 10px;\r\n}\r\n\r\n.todo-item-main {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todo-edit-button {\r\n  margin-left: 10px;\r\n}\r\n\r\n.todo-description p {\r\n  margin-top: 0;\r\n}\r\n\r\n.small-button.details {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* Hidden Elements */\r\n.hidden {\r\n  height: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n\r\ninput.hidden {\r\n  display: none;\r\n}\r\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);n(0);function r(t){const e=document.createElement("option");return e.value=e.textContent=t,e}function o(t){return t.sort((t,e)=>t.date>e.date)}function i(){localStorage.setItem("projects",JSON.stringify(data.todos))}function a(){const t=document.querySelector(".project-form"),e=document.querySelector(".todo-form");t.classList.toggle("hidden"),Array.from(e.classList).includes("hidden")||e.classList.toggle("hidden"),t.reset(),e.reset()}function d(){const t=document.querySelector(".todo-form"),e=document.querySelector(".project-form"),n=document.querySelector(".create-todo-button");document.querySelector(".change-todo-button").classList.add("hidden"),n.classList.remove("hidden"),t.classList.toggle("hidden"),Array.from(e.classList).includes("hidden")||e.classList.toggle("hidden"),e.reset(),t.reset()}function c(t,e,n,r,o=!1){return{title:t,description:e,date:function(t){const e=t.split("-").map(t=>+t);return e[1]-=1,new Date(e[0],e[1],e[2])}(n),priority:r,completed:o}}function u(t){const e=document.createElement("button"),n=t;return e.classList.add("button","small-button","todo-edit-button"),e.textContent="edit",e.addEventListener("click",()=>{const t=document.querySelector(".project-form"),e=document.querySelector(".todo-form"),r=document.querySelector(".create-todo-button"),o=document.querySelector(".change-todo-button");t.classList.add("hidden"),r.classList.add("hidden"),o.classList.remove("hidden"),function(t){const e=document.querySelector(".title input"),n=document.querySelector(".description input"),r=document.querySelector(".due-date input"),o=document.querySelector(".priority select");e.value=t.title,n.value=t.description,r.value=t.date.toISOString().substring(0,10),o.value=t.priority,e.focus()}(data.todos[data.current][n]),e.classList.remove("hidden")}),e}function s(t){return t.slice(0,1).toUpperCase()+t.slice(1)}function l(t,e){const n=document.createElement("div"),r=function(t){const e=document.createElement("h3");return e.classList.add("todo-title"),e.textContent=s(t),e}(t),o=function(t="#top"){const e=document.createElement("a");return e.setAttribute("href",t),e}();return n.classList.add("todo-item-main"),n.appendChild(function(t){const e=document.createElement("input");return e.setAttribute("type","checkbox"),e.setAttribute("data-index",t),e.addEventListener("change",t=>{const e=t.target.dataset.index;t.target.nextSibling.classList.toggle("completed"),data.todos[data.current][e].completed=!data.todos[data.current][e].completed,i()}),e}(e)),n.appendChild(r),n.appendChild(function(t){const e=document.createElement("button"),n=t;return e.classList.add("button","small-button","todo-delete-button"),e.textContent="delete",e.addEventListener("click",()=>{data.todos[data.current].splice(n,1),i(),g()}),e}(e)),o.appendChild(u(e)),n.appendChild(o),n}function p(t){const e=document.createElement("p");return e.textContent=t,e}function f(t){const e=document.createElement("div");e.classList.add("todo-description","hidden");const n=p("Due: "+function(t){const e=new Date(t);return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}, ${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}\n  ${e.getDate()}, ${e.getFullYear()}`}(t.date)),r=p("Priority: "+t.priority),o=p("Description: "+t.description);return e.appendChild(n),e.appendChild(r),e.appendChild(o),e}function m(t,e){const n=document.createElement("li"),r=f(t),o=function(t){const e=document.createElement("button");return e.classList.add("button","small-button","details"),e.textContent="show details",e.addEventListener("click",e=>{e.target.textContent.includes("show")?(e.target.textContent="hide details",t.classList.toggle("hidden")):(e.target.textContent="show details",t.classList.toggle("hidden"))}),e}(r);return n.setAttribute("data-index",e),n.addEventListener("click",t=>{data.todoIndex=+n.dataset.index}),n.appendChild(l(t.title,e)),n.appendChild(r),n.appendChild(o),n}function g(){const t=document.querySelector(".todo-list"),e=data.todos[data.current];!function(t){const e=document.querySelector(".list-title"),n=document.createElement("b");e.textContent="Current List: ",n.textContent=s(data.current),e.appendChild(n)}(data.current),t.innerHTML="",e.forEach((e,n)=>{e.date=new Date(e.date),t.appendChild(m(e,n))})}function h(){const t=document.querySelector(".project-form"),e=document.querySelector(".todo-form"),n=document.querySelector(".project-selector");n.value=localStorage.getItem("current")||data.current,t.addEventListener("submit",o=>{var d;o.preventDefault(),d=o.target["project-name"].value,data.todos[d]=[],data.current=d,i(),localStorage.setItem("current",d),n.appendChild(r(o.target["project-name"].value)),n.value=o.target["project-name"].value,t.reset(),e.reset(),a()})}function b(){const t=document.querySelector(".todo-form .create-todo-button"),e=document.querySelector(".todo-form"),n=document.querySelector(".project-form");t.addEventListener("click",t=>{var r;t.preventDefault(),r=c(e.title.value,e.description.value,e["due-date"].value,e.priority.value),data.todos[data.current].push(r),data.todos[data.current]=o(data.todos[data.current]),i(),g(),e.reset(),n.reset(),d()})}function y(){const t=document.querySelector(".todo-form .change-todo-button"),e=document.querySelector(".todo-form .create-todo-button"),n=document.querySelector(".todo-form"),r=document.querySelector(".project-form");t.addEventListener("click",a=>{var u;a.preventDefault(),u=c(n.title.value,n.description.value,n["due-date"].value,n.priority.value),data.todos[data.current][data.todoIndex]=u,data.todos[data.current]=o(data.todos[data.current]),i(),g(),n.reset(),r.reset(),t.classList.add("hidden"),e.classList.remove("hidden"),d()})}function v(){const t=document.querySelector(".project-button"),e=document.querySelector(".todo-button");t.addEventListener("click",a),e.addEventListener("click",d),document.querySelector(".project-selector").addEventListener("change",t=>{data.current=t.target.value,localStorage.setItem("current",t.target.value),g()}),h(),b(),y()}document.addEventListener("DOMContentLoaded",(function(){(function(){const t=document.querySelector(".todo-form");document.querySelector(".container").offsetWidth>500&&t.classList.remove("hidden")})(),function(){const t=document.querySelector(".project-selector");Object.keys(data.todos).forEach(e=>t.appendChild(r(e)))}(),v()}))}]);