(()=>{"use strict";var e,t,n,o,r,i,c,s,d,l,a,u,p,m,v={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([e.id,'\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n}\n\n.project {\n    width: 85%;\n}\n\n.projectMeta { \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    border-top: 1.25px solid black;\n    border-bottom: 1.25px solid black;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n}\n\n.projectName {\n    padding-left: 5px;\n}\n\n.metaSubDiv {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 30%;\n}\n\n.project:first-of-type > .projectMeta {\n    border-top: 2px solid black;\n    border-radius: 10px 10px 0 0;\n}\n\n.project:last-of-type > .projectMeta  {\n    border-bottom: 2px solid black;\n    border-radius:  0 0 10px 10px ;\n    padding: 0;\n    text-align: center;\n}\n\n.projects > .project:only-child  > .projectMeta {\n    border-radius:  10px 10px 10px 10px;\n}\n\n.toDoItems {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.toDoItem {\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 95%;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    border-left: 1.5px solid black;\n    border-right: 1.5px solid black;\n}\n\n.toDoItem.priority-3 {\n    background-color: lightcoral;\n}\n\n.toDoItem.priority-2 {\n    background-color: lightsalmon;\n}\n\n.toDoItem.priority-1 {\n    background-color: lightyellow;\n}\n\n.toDoItem.itemComplete {\n    background-color: grey;\n}\n\n.complete,\n.edit,\n.submit,\n.deleteProject,\n.editTitle,\n.deleteTask {\n    margin: 5px 0;\n    padding: 2px;\n    border: 0.5px solid black;\n    border-radius: 2px;\n    text-align: center;\n}\n\n.complete {\n    background-color: green;\n}\n\n.not.complete,\n.editTitle,\n.edit,\n.deleteTask,\n.deleteProject {\n    filter: grayscale(100%);\n    color: rgb(67, 67, 67);\n    background-color: lightgrey;\n}\n\n.completeData.notInput > .not.complete:hover {\n    filter:  none;\n    background-color: lightgreen;\n}\n\n.editTitle:hover,\n.edit:hover {\n    filter:  none;\n    background-color: rgb(255, 196, 86);\n}\n\n.deleteTask:hover,\n.deleteProject:hover {\n    filter:  none;\n    cursor: pointer;\n    color: white;\n    background-color: lightcoral;\n}\n\n.submit,\n.addTask {\n    color: rgb(67, 67, 67);\n    background-color: rgb(146, 233, 146);\n}\n\n.addTask.toDoItem {\n    justify-content: center;\n    text-align: center;\n}\n\n.submit:hover,\n.addTask:hover {\n    cursor: pointer;\n    color: white;\n    background-color: green;\n}\n\n.toDoItem > * {\n    width: 100%;\n}\n\n.title {\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n}\n\n.completeData {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.completeData.notInput {\n    font-size: 12px;\n}\n\n.priorities,\nlabel[for="dueDate"] {\n    font-size: 15px;\n    width: 100%;\n    text-align: left;\n    padding-left: 15px;\n}\n\n.description,\n.notes {\n    border-top: 1px solid black;\n}\n\n.notes {\n    font-style: italic;\n}\n\n.notes.notInput {\n    box-sizing: border-box;\n    text-align: right;\n    border-left: 1px dashed black;\n}\n\n.title.notInput,\n.description.notInput {\n    width: 50%;\n    padding-left: 2%;\n}\n\n.completeData.notInput,\n.notes.notInput {\n    width: 48%;\n}\n.notes.notInput {\n    padding-right: 2%;\n}\n\n.hidden {\n    display: none;\n}\n\n.closed,\n.opened {\n    border: 0.5px solid transparent;\n}\n\n.opened,\n.closed:hover {\n    color: black;\n}\n\n.closed,\n.opened:hover {\n    color: darkgrey;\n}\n\n.closed:hover,\n.opened:hover {\n    cursor: pointer;\n    border: 0.5px solid grey;\n}\n\n.opened:hover {\n    background-color: black;\n}\n\ninput {\n    border: 0;\n    background-color: rgba(128, 128, 128, 0.25);\n}\n\ninput.projectName:focus {\n    margin-left: 2px;\n    background-color: darkgrey;\n}',""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);o&&c[a[0]]||(void 0!==i&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=i),n&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=n):a[2]=n),r&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=r):a[4]="".concat(r)),t.push(a))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],a=i[l]||0,u="".concat(l," ").concat(a);i[l]=a+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=n(i[c]);t[s].references--}for(var d=o(e,r),l=0;l<i.length;l++){var a=n(i[l]);0===t[a].references&&(t[a].updater(),t.splice(a,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function f(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return v[e](n,n.exports,f),n.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.nc=void 0,e=f(379),t=f.n(e),n=f(795),o=f.n(n),r=f(569),i=f.n(r),c=f(565),s=f.n(c),d=f(216),l=f.n(d),a=f(589),u=f.n(a),p=f(426),(m={}).styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(()=>{let e=[];(()=>{const e=document.createElement("div");e.classList="projects",document.body.appendChild(e)})();const t=(e,t,o)=>{const c=n(e,t),s=i(e,o),d=r(e);return d.appendChild(s),d.appendChild(c),d},n=(e,t)=>{const n=s(e,t),o=c(e),r=h(e),i=a(e),d=v(e);return o.appendChild(n),o.appendChild(i),o.appendChild(d),o.appendChild(r),o},o=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="project",t},r=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="projectMeta",t},i=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList="projectName",n.textContent=t,n},c=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="metaSubDiv",t},s=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList="numberOfTasks",n.textContent=0===t||1===t?"1 task":t+" tasks",n},d=(e,t)=>{const n=document.querySelectorAll(`#\\3${e+"-"+t}.priority`);let o=!0;return n.forEach((e=>{!0===e.checked&&(o=!1)})),o},l=(e,t)=>{const n=document.querySelector(`#\\3${e}.toDoItems`),o=E(e,t,"div","new");n.insertBefore(o,n.lastChild)},a=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="editTitle",t.textContent="✏️",t.addEventListener("click",(n=>{u(e,t)})),t},u=(t,n)=>{const o=document.querySelector(`#\\3${t}.projectMeta`),r=document.querySelector(`#\\3${t}.projectName`),i=e[t].name,c=document.createElement("input");c.classList="projectName",c.value=i,c.addEventListener("input",(n=>{e[t].name=c.value})),c.addEventListener("focusout",(r=>{e[t].name=c.value;const i=document.createElement("div");i.id=t,i.classList="projectName",i.textContent=e[t].name,c.remove(),o.insertBefore(i,o.firstChild),n.addEventListener("click",(e=>{u(t,n)}))})),r.remove(),o.insertBefore(c,o.firstChild),c.focus()},p=(e,t)=>{e.childNodes.forEach((e=>{let n=e.id.split()[1];e.id=t+"-"+n}))},m=(e,t,n)=>{0!==e.childNodes.length&&e.childNodes.forEach((e=>{e.id=t+"-"+n,"INPUT"===e.tagName&&e.setAttribute("name",`task-${t+"-"+n}-priority`),m(e,t,n)}))},v=t=>{const n=document.createElement("div");return n.setAttribute("id",t),n.classList="deleteProject",n.textContent="❌",n.addEventListener("click",(n=>{!0===confirm("Are you Ok with deleting this entire project?")&&(((e,t)=>{const n=t.length-1;let o=e+1;for(;o<=n;o++){const e=document.querySelector(`#\\3${o}.project`);e.id=o-1,p(e,o)}})(t,e),((e,t)=>{t.splice(e,1),document.querySelector(`#\\3${e}.project`).remove()})(t,e))})),n},h=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="projectDoor opened",t.textContent="▲",t},f=(e,t,n)=>"input"===n?y(e,t):"div"===n?b(e,t):void 0,b=(t,n)=>{const o=document.createElement("div");return o.setAttribute("id",t+"-"+n),o.classList="notes notInput",o.textContent=e[t].items[n].notes,o},y=(e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="notes",n.placeholder="Enter any additional notes here",n},g=(e,t,n)=>"input"===n?C(e,t):"div"===n?x(e,t):void 0,x=(t,n)=>{const o=document.createElement("div");return o.setAttribute("id",t+"-"+n),o.classList="description notInput",o.textContent=e[t].items[n].description,o},C=(e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="description",n.placeholder="Enter a description here",n.required=!0,n},k=(e,t)=>{const n=F(e),o=(e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="addTask toDoItem",t.textContent="Add Task",t.addEventListener("click",(n=>{((e,t)=>{const n=document.querySelectorAll(`#\\3${e}.toDoItems > div.toDoItem.form`).length,o=E(e,n,"input","new");t.before(o)})(e,t)})),t})(e);return n.appendChild(t),n.appendChild(o),n},E=(t,n,o,r)=>{const i=((t,n,o)=>"input"===o?((e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="title",n.placeholder="Enter the task's title here",n.required=!0,n})(t,n):"div"===o?((t,n)=>{const o=document.createElement("div");return o.setAttribute("id",t+"-"+n),o.classList="title notInput",o.textContent=e[t].items[n].title,o})(t,n):void 0)(t,n,o),c=L(t,n,o,r),s=g(t,n,o),d=f(t,n,o),l=z(t,n,o);if(l.appendChild(i),"div"===o){const o=A(t,n,"opened");c.appendChild(o),l.classList=`toDoItem display priority-${e[t].items[n].priority}`,c.classList="completeData notInput",l.appendChild(c),l.appendChild(s),l.appendChild(d)}else"input"===o&&(l.appendChild(s),l.appendChild(d),l.appendChild(c));return l},L=(e,t,n,o)=>{const r=D(e,t),i=S(e,t,n),c=w(e,t,n,o),s=B(e,t,n);if("input"===n){const o=((e,t,n)=>{const o=document.createElement("div");if(o.classList="priorities","input"===n)return((e,t,n)=>(n.textContent="Choose a Priority Level: ",[[1,"Low"],[2,"Medium"],[3,"High"]].forEach((o=>{const r=document.createElement("label");r.for=`task-${e+"-"+t}-priority`,r.textContent=o[1];const i=document.createElement("input");i.type="radio",i.value=o[0],i.setAttribute("id",e+"-"+t),i.name=`task-${e+"-"+t}-priority`,i.classList="priority",i.required=!0,n.appendChild(i),n.appendChild(r)})),n))(e,t,o)})(e,t,n);r.appendChild(o),r.appendChild(i)}else if("div"===n){const n=q(e,t);r.appendChild(i),r.appendChild(n)}return r.appendChild(c),r.appendChild(s),r},D=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="completeData",n},S=(e,t,n)=>"input"===n?I(e,t):"div"===n?j(e,t):void 0,I=(e,t)=>{const n=document.createElement("label");n.setAttribute("for","dueDate"),n.textContent="Due Date: ";const o=document.createElement("input");return o.type="date",o.setAttribute("name","dueDate"),o.setAttribute("id",e+"-"+t),o.classList="dueDate",o.required=!0,n.appendChild(o),n},j=(t,n)=>{const o=document.createElement("div");return o.setAttribute("id",t+"-"+n),o.classList="dueDate",o.textContent="Due: "+e[t].items[n].dueDate,o},A=(e,t,n)=>{const o=document.createElement("div");return o.setAttribute("id",e+"-"+t),o.classList=`taskDoor ${n}`,"opened"===n?o.textContent="▲":"closed"===n&&(o.textContent="▼"),o.addEventListener("click",(e=>{const t=o.id.split("-")[0],r=o.id.split("-")[1];let i;if("opened"===n){i=A(t,r,"closed");const e=document.querySelector(`#\\3${t+"-"+r}.description`),n=document.querySelector(`#\\3${t+"-"+r}.notes`);e.remove(),n.remove()}else if("closed"===n){i=A(t,r,"opened");const e=g(t,r,"div"),n=f(t,r,"div"),o=document.querySelector(`#\\3${t+"-"+r}.toDoItem.display`);o.appendChild(e),o.appendChild(n)}o.before(i),o.remove()})),o},q=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.textContent="✔️",n.classList="not complete",n.addEventListener("click",(e=>{const t=n.id.split("-")[0],o=n.id.split("-")[1];$(t,o,n)})),n},$=(t,n,o)=>{o.classList.toggle("not");const r=document.querySelector(`#\\3${t+"-"+n}.toDoItem.display`);!1===e[t].items[n].completionStatus?(e[t].items[n].completionStatus=!0,r.classList="toDoItem display itemComplete"):!0===e[t].items[n].completionStatus&&(e[t].items[n].completionStatus=!1,r.classList="toDoItem display priority-"+e[t].items[n].priority)},w=(e,t,n,o)=>"input"===n?P(e,t,o):"div"===n?T(e,t):void 0,T=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="edit",n.textContent="✏️",n.addEventListener("click",(e=>{const t=n.id.split("-")[0],o=n.id.split("-")[1];N(t,o,n)})),n},N=(e,t,n)=>{const o=document.querySelector(`#\\3${e+"-"+t}.toDoItem.display`),r=o.parentNode,i=E(e,t,"input","edit");r.insertBefore(i,o),o.remove(),M(e,t)},M=(t,n)=>{document.querySelector(`input#\\3${t+"-"+n}.title`).value=e[t].items[n].title,document.querySelector(`input#\\3${t+"-"+n}.dueDate`).value=e[t].items[n].dueDate,document.querySelector(`input#\\3${t+"-"+n}.priority[value="${e[t].items[n].priority}"]`).checked=!0,document.querySelector(`input#\\3${t+"-"+n}.description`).value=e[t].items[n].description,document.querySelector(`input#\\3${t+"-"+n}.notes`).value=e[t].items[n].notes},P=(e,t,n)=>{const o=document.createElement("button");return o.setAttribute("id",e+"-"+t),"new"===n?(o.classList="edit submit",o.textContent="Sumbit Task"):"old"===n&&(o.classList="editTask",o.textContent="Edit Task"),O(e,t,o,n),o},O=(t,n,o,r)=>{o.addEventListener("click",(o=>{if(((e,t)=>{let n=!1;return["title","description","priority","dueDate"].forEach((o=>{n=((e,t,n,o)=>{if("priority"===n)d(e,t)&&(document.querySelectorAll(`#\\3${e+"-"+t}.priority`).forEach((e=>{e.classList.toggle("incomplete")})),o=!0);else{const r=document.querySelector(`input#\\3${e+"-"+t}.${n}`);""!==r.value&&void 0!==r.value||(r.classList.toggle("incomplete"),o=!0)}return o})(e,t,o,n)})),n})(t,n));else{const o=((t,n,o)=>{let r,i;return document.querySelectorAll(`#\\3${t+"-"+n}.priority`).forEach((e=>{!0===e.checked&&(r=e.value)})),"new"===o?i=e[t].items.push(_(document.querySelector(`input#\\3${t+"-"+n}.title`).value,document.querySelector(`input#\\3${t+"-"+n}.dueDate`).value,r,document.querySelector(`input#\\3${t+"-"+n}.description`).value,document.querySelector(`input#\\3${t+"-"+n}.notes`).value,!1)):"edit"===o&&(e[t].items.splice(n,1,_(document.querySelector(`input#\\3${t+"-"+n}.title`).value,document.querySelector(`input#\\3${t+"-"+n}.dueDate`).value,r,document.querySelector(`input#\\3${t+"-"+n}.description`).value,document.querySelector(`input#\\3${t+"-"+n}.notes`).value,!1)),i=n),i})(t,n,r);((e,t)=>{document.querySelector(`#\\3${e+"-"+t}.toDoItem.form`).remove()})(t,n),"new"===r?l(t,o-1):"edit"===r&&l(t,n)}}))},B=(e,t,n)=>{const o=document.createElement("div");return o.setAttribute("id",e+"-"+t),o.classList="deleteTask",o.textContent="❌",o.addEventListener("click",(o=>{Z(e,t,n),((e,t,n)=>{let o;for("div"===n?o=document.querySelectorAll(`#\\3${e}.toDoItems > .toDoItem.display`):"input"===n&&(o=document.querySelectorAll(`#\\3${e}.toDoItems > .toDoItem.form`));t<o.length;t++)o.item(t).id=e+"-"+t,m(o.item(t),e,t)})(e,t,n)})),o},Z=(t,n,o)=>{let r;"input"===o?r=document.querySelector(`#\\3${t+"-"+n}.toDoItem.form`):"div"===o&&(r=document.querySelector(`#\\3${t+"-"+n}.toDoItem.display`)),e[t].items[n]&&e[t].items.splice(n,1),r.remove()},z=(e,t,n)=>"input"===n?U(e,t):"div"===n?H(e,t):void 0,H=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="toDoItem display",n},U=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="toDoItem form",n},F=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="toDoItems",t},R=()=>{const n=document.createElement("button");return n.textContent="Add Project",n.addEventListener("click",(n=>{(e=>{const n=document.querySelector(".newProjectName");if(""==n.value||null==n.value);else{const r=J(n.value,[]);e.push(r);const i=e.length-1,c=e[i].items.length,s=document.querySelector(".projects"),d=((e,n,r)=>{const i=o(e),c=t(e,n,r);return i.appendChild(c),i})(i,c,n.value),l=E(i,c,"input","new"),a=k(i,l);d.appendChild(a),s.insertBefore(d,s.firstChild)}})(e)})),n};(()=>{const e=document.querySelector(".projects"),t=o(),n=(()=>{const e=document.createElement("input");return e.type="text",e.classList="projectMeta newProject newProjectName",e.placeholder='Enter a new project name here and press "Enter"',e})(),r=R();t.appendChild(n),document.body.appendChild(r),e.appendChild(t)})();const _=(e,t,n,o,r,i)=>({title:e,dueDate:t,priority:n,description:o,notes:r,completionStatus:i}),J=(e,t)=>({name:e,items:t})})()})();