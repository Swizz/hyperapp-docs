!function(){"use strict";function e(e,n){var t,r=arguments,a=[];for(h=arguments.length;h-- >2;)p.push(r[h]);for(;p.length;)if(Array.isArray(t=p.pop()))for(h=t.length;h--;)p.push(t[h]);else null!=t&&!0!==t&&!1!==t&&("number"==typeof t&&(t+=""),a.push(t));return"string"==typeof e?{tag:e,data:n||{},children:a}:e(n,a)}function n(n){return function(t,r){return"object"!=typeof t||Array.isArray(t)?e(n,{},t):e(n,t,r)}}function t(e,t){return n("div")(e,t)}function r(e,t){return n("main")(e,t)}function a(e,t){return n("nav")(e,t)}function o(e,t){return n("option")(e,t)}function c(e,t){return n("section")(e,t)}function u(e,t){return n("select")(e,t)}function i(e,t){return n("span")(e,t)}function l(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function s(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){function n(e){var n=m[e.replace(/\*/g,"_")[1]||""],t=h[h.length-1]==e;return n?n[1]?(h[t?"pop":"push"](e),n[0|t]):n[0]:e}function t(){for(var e="";h.length;)e+=n(h[h.length-1]);return e}var r,a,o,c,u,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,h=[],p="",d=0,g={};for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,n,t){return g[n.toLowerCase()]=t,""}).replace(/^\n+|\n+$/g,"");o=i.exec(e);)a=e.substring(d,o.index),d=i.lastIndex,r=o[0],a.match(/[^\\](\\\\)*\\$/)||(o[3]||o[4]?r='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'">'+l(s(o[3]||o[4]).replace(/^\n+|\n+$/g,""))+"</pre>":o[6]?((u=o[6]).match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),c=f(l(o[5].replace(/^\s*[>*+.-]/gm,""))),">"===u?u="blockquote":(u=u.match(/\./)?"ol":"ul",c=c.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),r="<"+u+">"+c+"</"+u+">"):o[8]?r='<img src="'+s(o[8])+'" alt="'+s(o[7])+'">':o[10]?(p=p.replace("<a>",'<a href="'+s(o[11]||g[a.toLowerCase()])+'">'),r=t()+"</a>"):o[9]?r="<a>":o[12]||o[14]?r="<"+(u="h"+(o[14]?o[14].length:"="===o[13][0]?1:2))+">"+f(o[12]||o[15])+"</"+u+">":o[16]?r="<code>"+s(o[16])+"</code>":(o[17]||o[1])&&(r=n(o[17]||"--"))),p+=a,p+=r;return(p+e.substring(d)+t()).trim()}var h,p=[],d=[],m={"":["<em>","</em>"],_:["<strong>","</strong>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]},g="hyperapp/hyperapp",v="https://raw.githubusercontent.com",y=function(e,n){return e.replace(/\/docs\/(.+)\.md/g,["#",n.release,"$1"].join("/"))};!function(e){function n(e,t,r){Object.keys(t||[]).map(function(c){var u=t[c],i=r?r+"."+c:c;"function"==typeof u?e[c]=function(e){o("action",{name:i,data:e});var n=o("resolve",u(p,b,e));return"function"==typeof n?n(a):a(n)}:n(e[c]||(e[c]={}),u,i)})}function t(e){for(m=h(j,m,g,g=o("render",y)(p,b),v=!v);e=d.pop();)e()}function r(){y&&!v&&requestAnimationFrame(t,v=!v)}function a(e){return"function"==typeof e?a(e(p)):(e&&(e=o("update",c(p,e)))&&r(p=e),p)}function o(e,n){return(w[e]||[]).map(function(e){var t=e(p,b,n);null!=t&&(n=t)}),n}function c(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function u(e){if(e&&(e=e.data))return e.key}function i(e,n){if("string"==typeof e)t=document.createTextNode(e);else{var t=(n=n||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);e.data&&e.data.oncreate&&d.push(function(){e.data.oncreate(t)});for(var r in e.data)l(t,r,e.data[r]);for(r=0;r<e.children.length;)t.appendChild(i(e.children[r++],n))}return t}function l(e,n,t,r){if("key"===n);else if("style"===n)for(var a in c(r,t=t||{}))e.style[a]=t[a]||"";else{try{e[n]=t}catch(e){}"function"!=typeof t&&(t?e.setAttribute(n,t):e.removeAttribute(n))}}function s(e,n,t){for(var r in c(n,t)){var a=t[r],o="value"===r||"checked"===r?e[r]:n[r];a!==o&&l(e,r,a,o)}t&&t.onupdate&&d.push(function(){t.onupdate(e,n)})}function f(e,n,t){t&&t.onremove?t.onremove(n):e.removeChild(n)}function h(e,n,t,r,a,o){if(null==t)n=e.insertBefore(i(r,a),n);else if(null!=r.tag&&r.tag===t.tag){s(n,t.data,r.data),a=a||"svg"===r.tag;for(var c=r.children.length,l=t.children.length,p={},d=[],m={},g=0;g<l;g++)y=d[g]=n.childNodes[g],null!=(x=u(b=t.children[g]))&&(p[x]=[y,b]);for(var g=0,v=0;v<c;){var y=d[g],b=t.children[g],w=r.children[v];if(m[x=u(b)])g++;else{var $=u(w),j=p[$]||[];null==$?(null==x&&(h(n,y,b,w,a),v++),g++):(x===$?(h(n,j[0],j[1],w,a),g++):j[0]?(n.insertBefore(j[0],y),h(n,j[0],j[1],w,a)):h(n,y,null,w,a),v++,m[$]=w)}}for(;g<l;){var x=u(b=t.children[g]);null==x&&f(n,d[g],b.data),g++}for(var g in p){var A=(j=p[g])[1];m[A.data.key]||f(n,j[0],A.data)}}else n&&r!==n.nodeValue&&("string"==typeof r&&"string"==typeof t?n.nodeValue=r:(n=e.insertBefore(i(r,a),o=n),f(e,o,t.data)));return n}var p,m,g,v,y=e.view,b={},w={},$=e.mixins||[],j=e.root||document.body;$.concat(e).map(function(e){e="function"==typeof e?e(o):e,Object.keys(e.events||[]).map(function(n){w[n]=(w[n]||[]).concat(e.events[n])}),p=c(p,e.state),n(b,e.actions)}),r((g=o("load",m=j.children[0]))===m&&(g=m=null))}({state:{path:{release:location.hash.split(/[\/\#]/)[2],document:location.hash.split(/[\/\#]/).slice(3)},releases:[],content:"",menu:""},actions:{selectRelease:function(e,n,t){var r=t.target.value;location.hash=["#",r].concat(e.path.document).join("/")},updatePath:function(e,n){return{path:{release:location.hash.split(/[\/\#]/)[2],document:location.hash.split(/[\/\#]/).slice(3)}}},fetch:{releases:function(e,n){return function(e){fetch("https://api.github.com/repos/"+g+"/releases").then(function(e){return e.json()}).then(function(n){return e({releases:n.map(function(e){return e.tag_name})})})}},content:function(e,n){return function(n){fetch(v+"/"+g+"/"+e.path.release+"/docs/"+e.path.document.join("/")+".md").then(function(e){return e.text()}).then(function(e){return n({content:e})})}},menu:function(e,n){return function(n){fetch(v+"/"+g+"/"+e.path.release+"/docs/README.md").then(function(e){return e.text()}).then(function(e){return n({menu:e})})}}}},events:{load:function(e,n){n.fetch.releases(),n.fetch.menu(),n.fetch.content(),window.addEventListener("hashchange",function(){n.updatePath(),n.fetch.menu(),n.fetch.content()})},update:function(e,n){0!==e.releases.length&&(e.path.release&&e.path.document&&""!==e.path.document[0]||(location.hash=["#",e.path.release?e.path.release:e.releases[0]].concat(e.path.document.length&&""!==e.path.document[0]?e.path.document:"getting-started").join("/")))}},view:function(e,n){return r([a([i("release : "),u({onchange:n.selectRelease},e.releases.map(function(n){return o({selected:n==e.path.release},n)})),t({onupdate:function(n){n.innerHTML=f(y(e.menu,e.path))}})]),c({onupdate:function(n){n.innerHTML=f(y(e.content,e.path))}})])}})}();