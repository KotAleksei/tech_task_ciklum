!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);document.getElementById("todoApp");var r=document.querySelector(".modalWindow"),o=document.querySelector(".cancelCreateTodo"),i=(document.querySelector(".saveTodo"),document.getElementById("createTodoTitle")),c=document.getElementById("createTodoDescription"),a=document.querySelector(".createTodoPriority"),l=document.querySelector(".btnGreateTodo"),s=document.querySelector(".todoList"),u=document.querySelector(".markOfDoneList"),d=document.querySelector(".todosPriority"),p=document.getElementById("inputSearch"),f=document.querySelector(".createTodoContent");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){r.classList.add("show");var n={},l=function(e){return n.title=e.target.value.trim()},s=function(e){return n.description=e.target.value.trim()},u=function(e){var t="";"BUTTON"===e.target.tagName&&a.classList.toggle("open"),"LI"===e.target.tagName&&(t=e.target.textContent,a.children[1].innerText=t,n.priority=t)},d=function(){var e=document.querySelector(".emptyTitle");g(),v(),r.classList.remove("show"),e&&e.remove()},p=function(e){var o=document.querySelector(".emptyTitle");e.preventDefault(),""===n.title?o||i.insertAdjacentHTML("beforebegin",'\n        <p class="emptyTitle">'.concat("Please fill this field","</p>\n      ")):(t?function(e){var t=document.querySelector("[data-key='".concat(e.id,"']")),n=t.children[0],r=t.children[1],o=t.children[2].children[0];n.innerText=e.title,r.innerText=e.description,o.innerText=e.priority,E=E.map((function(t){return Number(t.id)===Number(e.id)&&(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)),t})),localStorage.setItem(L,JSON.stringify(E))}(n):function(e){E.push(e),localStorage.setItem(L,JSON.stringify(E)),w(e)}(n),g(),v(),r.classList.remove("show"),o&&o.remove())};if(t)n=y({},t),i.value=n.title,c.value=n.description,a.children[1].innerText=n.priority;else{var m={id:Date.now(),done:!1,description:"",title:"",priority:"high"};n=y({},m)}function v(){i.removeEventListener("input",l),c.removeEventListener("input",s),a.removeEventListener("click",u),o.removeEventListener("click",d),f.removeEventListener("submit",p)}function g(){i.value="",c.value="",a.children[1].innerText="high",!a.classList.contains("open")&&a.classList.add("open")}window.setTimeout((function(){return i.focus()}),0),i.addEventListener("input",l),c.addEventListener("input",s),a.addEventListener("click",u),o.addEventListener("click",d),f.addEventListener("submit",p)}l.addEventListener("click",g);var b=g;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L="todos",S=localStorage.getItem(L),E=S?JSON.parse(S).sort((function(e,t){return t.done-e.done})):[];function w(e){var t=e.done?"done":"";s.insertAdjacentHTML("afterbegin",'\n  <li class="todoItem show '.concat(t,'" data-key="').concat(e.id,'">\n    <h2>').concat(e.title,"</h2>\n    <p>").concat(e.description,'</p>\n    <div class="todoFotter">\n      <div class="todoPriority" data-priority="').concat(e.id,'">').concat(e.priority,'</div>\n      <div class="dropdownEditTodo">\n      <button data-id="').concat(e.id,'">...</button>\n      <ul>\n        <li>done</li>\n        <li>edit</li>\n        <li>delete</li>\n      </ul>\n    </div>\n    </div>\n  </li>\n  '));var n=document.querySelector("[data-id='".concat(e.id,"']")),r=n.nextElementSibling;n.addEventListener("click",(function(){n.parentElement.classList.toggle("open")})),r.addEventListener("click",(function(){n.parentElement.classList.toggle("open")}))}function T(e){E.forEach((function(t){var n=document.querySelector("[data-key='".concat(t.id,"']")),r=document.querySelector("[data-priority='".concat(t.id,"']")),o=n.classList.contains("show"),i=n.classList.contains("done");switch(""!==e.searchText?t.title.includes(e.searchText)?!o&&n.classList.add("show"):n.classList.remove("show"):!o&&n.classList.add("show"),"all"!==e.priority&&e.priority!==r.textContent&&n.classList.remove("show"),e.completed){case"open":i&&n.classList.remove("show");break;case"done":i||n.classList.remove("show")}}))}E.length>0&&E.forEach((function(e){return w(e)})),s.addEventListener("click",(function(e){var t,n,r=e.target.parentElement!==s;if("LI"===e.target.tagName&&r){var o=e.target.parentElement.parentElement.parentElement.parentElement.dataset.key;switch(e.target.textContent){case"delete":t=o,n=document.querySelector("[data-key='".concat(t,"']")),E=E.filter((function(e){return Number(e.id)!==Number(t)})),localStorage.setItem(L,JSON.stringify(E)),n.remove();break;case"done":!function(e){var t=document.querySelector("[data-key='".concat(e,"']")),n=E.find((function(t){return Number(t.id)===Number(e)}));t.remove(),t.classList.contains("done")?s.prepend(t):s.append(t),t.classList.toggle("done"),n.done=t.classList.contains("done"),localStorage.setItem(L,JSON.stringify(E))}(o);break;case"edit":var i=E.find((function(e){return Number(e.id)===Number(o)}));b(null,i)}}}));var j={searchText:"",priority:"all",completed:"all"};function P(e){var t="all";e.addEventListener("click",(function(n){t=n.target.textContent,e.children[0].innerText=t,e===u&&(j.completed=t,T(j)),e===d&&(j.priority=t,T(j)),"BUTTON"===n.target.tagName&&e.classList.toggle("open")}))}p.addEventListener("input",(function(e){j.searchText=e.target.value.trim(),T(j)})),P(u),P(d)}]);