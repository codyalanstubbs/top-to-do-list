(()=>{"use strict";var e,t,n,r,o,i,c,a,s,d,l,p,u,m,b={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,"\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n}\n\n.project {\n    width: 85%;\n}\n\n.projectMeta { \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    border-top: 1.25px solid black;\n    border-bottom: 1.25px solid black;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n}\n\n.projectName {\n    padding-left: 5px;\n}\n\n.metaSubDiv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 55%;\n}\n\n.project:first-of-type > .projectMeta {\n    border-top: 2px solid black;\n    border-radius: 10px 10px 0 0;\n}\n\n.project:last-of-type > .projectMeta  {\n    border-bottom: 2px solid black;\n    border-radius:  0 0 10px 10px ;\n    padding: 0;\n    text-align: center;\n}\n\n.projects > .project:only-child  > .projectMeta {\n    border-radius:  10px 10px 10px 10px;\n}\n\n.toDoItems {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.toDoItem {\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 95%;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    border-left: 1.5px solid black;\n    border-right: 1.5px solid black;\n}\n\n.complete,\n.edit,\n.submit,\n.deleteProject,\n.editTitle,\n.addTask {\n    margin: 5px 0;\n    padding: 2px;\n    border: 0.5px solid black;\n    border-radius: 2px;\n}\n\n.deleteProject,\n.editTitle,\n.addTask {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.complete {\n    background-color: green;\n}\n\n.not.complete {\n    background-color: lightgrey;\n}\n\n.edit {\n    background-color: orange;\n}\n\n.submit {\n    color: lightgrey;\n    background-color: green;\n}\n\n.title {\n    width: 50%;\n    font-weight: bold;\n}\n\n.completeData {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 45%;\n}\n\n.dueDate {\n    text-align: center;\n}\n\n.description,\n.notes {\n    border-top: 1px solid black;\n}\n\n.description {\n    padding-left: 5px;\n    width: 50%;\n}\n\n.notes {\n    width: 45%;\n    font-style: italic;\n    text-align: right;\n    padding-right: 5px;\n}\n\n.hidden {\n    display: none;\n}\n\n.closed,\n.opened {\n    border: 0.5px solid transparent;\n}\n\n.opened,\n.closed:hover {\n    color: black;\n}\n\n.closed,\n.opened:hover {\n    color: darkgrey;\n}\n\n.closed:hover,\n.opened:hover {\n    cursor: pointer;\n    border: 0.5px solid grey;\n}\n\n.opened:hover {\n    background-color: black;\n}\n\ninput {\n    border: 0;\n    background-color: rgba(128, 128, 128, 0.25);\n}",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var b=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:b,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function f(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return b[e](n,n.exports,f),n.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.nc=void 0,e=f(379),t=f.n(e),n=f(795),r=f.n(n),o=f(569),i=f.n(o),c=f(565),a=f.n(c),s=f(216),d=f.n(s),l=f(589),p=f.n(l),u=f(426),(m={}).styleTagTransform=p(),m.setAttributes=a(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,(()=>{let e=[];(()=>{const e=document.createElement("div");e.classList="projects",document.body.appendChild(e)})();const t=(e,t,r)=>{const c=n(e,t),a=i(e,r),s=o(e);return s.appendChild(a),s.appendChild(c),s},n=(e,t)=>{const n=a(e,t),r=c(e),o=u(e),i=s(e),l=d(e),m=p(e);return r.appendChild(n),r.appendChild(i),r.appendChild(l),r.appendChild(m),r.appendChild(o),r},r=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="project",t},o=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="projectMeta",t},i=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList="projectName",n.textContent=t,n},c=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="metaSubDiv",t},a=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList="numberOfTasks",n.textContent=0===t||1===t?"1 task":t+" tasks",n},s=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="addTask",t.textContent="Add Task",t},d=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="editTitle",t.textContent="Edit Title",t},l=(e,t)=>{e.childNodes.forEach((e=>{let n=e.id.split()[1];e.id=t+"-"+n}))},p=t=>{const n=document.createElement("div");return n.setAttribute("id",t),n.classList="deleteProject",n.textContent="Delete Project",n.addEventListener("click",(n=>{!0===confirm("Are you Ok with deleting this entire project?")&&(((e,t)=>{const n=t.length-1;let r=e+1;for(;r<=n;r++){const e=document.querySelector(`#\\3${r}.project`);e.id=r-1,l(e,r)}})(t,e),((e,t)=>{t.splice(e,1),document.querySelector(`#\\3${e}.project`).remove()})(t,e))})),n},u=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="projectDoor opened",t.textContent="▲",t},m=(e,t)=>{const n=b(e,t),r=h(e,t),o=f(e,t),i=v(e,t),c=x(e,t);return n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(c),n},b=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="completeData",n},h=(e,t)=>{const n=document.createElement("label");n.setAttribute("for","dueDate"),n.textContent="Due Date: ";const r=document.createElement("input");return r.type="date",r.setAttribute("id",e+"-"+t),r.setAttribute("name","dueDate"),r.classList="dueDate",n.appendChild(r),n},f=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="taskDoor opened",n.textContent="▼",n},v=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.textContent="Not Complete",n.classList="not complete",n},x=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="edit submit",n.textContent="Sumbit Task",n},g=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="toDoItem",n},y=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="toDoItems",t},C=()=>{const n=document.createElement("button");return n.textContent="Add Project",n.addEventListener("click",(n=>{(e=>{const n=document.querySelector(".newProjectName");if(""==n.value||null==n.value);else{const o=j(n.value,[]);e.push(o);const i=e.length-1,c=e[i].items.length,a=document.querySelector(".projects"),s=((e,n,o)=>{const i=r(e),c=t(e,n,o);return i.appendChild(c),i})(i,c,n.value),d=((e,t)=>{const n=((e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="title",n.placeholder="Enter the task's title here",n})(e,t),r=m(e,t),o=((e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="description",n.placeholder="Enter a description here",n})(e,t),i=((e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="notes",n.placeholder="Enter any additional notes here",n})(e,t),c=g(e,t);return c.appendChild(n),c.appendChild(r),c.appendChild(o),c.appendChild(i),c})(i,c),l=((e,t)=>{const n=y(e);return n.appendChild(t),n})(i,d);s.appendChild(l),a.insertBefore(s,a.firstChild)}})(e)})),n};(()=>{const e=document.querySelector(".projects"),t=r(),n=(()=>{const e=document.createElement("input");return e.type="text",e.classList="projectMeta newProject newProjectName",e.placeholder='Enter a new project name here and press "Enter"',e})(),o=C();t.appendChild(n),document.body.appendChild(o),e.appendChild(t)})();const j=(e,t)=>({name:e,items:t})})()})();