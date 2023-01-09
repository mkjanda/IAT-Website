/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){"function"===typeof define&&define.amd?define('knockout',["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(A.ko={})})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);
d=a.a.setTimeout(b,c)}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd())}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.L=function(a,c,d){a[c]=d};a.version="3.5.1";a.b("version",
a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e)});b[c]=l.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return{Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,
b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k)}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b},Db:function(a){return null===a||a===n?"":a.trim?
a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return!!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,
k);a.a.K.za(b,function(){b.detachEvent(f,k)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b)},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return"&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
c+"'/>"),!1)}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return"string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
c.type="hidden";c.name=a;c.value=b;p.appendChild(c)});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},yb:function(c,
d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n))},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")))});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
l.parentNode&&l.parentNode.removeChild(l)}}else{(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes)}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
e)}var c={};return{Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},cd:function(c,e){var f=
[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},Uc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(p){a.a.Gc(p)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},
c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l)};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this))};
a.T=function(){a.a.Ab(this,D);D.qb(this)};var D={qb:function(a){a.U={change:[]};a.sc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d)});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b)}finally{a.u.end()}}},ob:function(){return this.sc},
Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h)});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k()};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"))};c.rc=function(){m=!0};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0)}},Wa:function(a){return this.U[a]&&this.U[a].length},
Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length)});return c},sb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f))}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},qa:function(){if(e)return e.o.qa()},
Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I])},ya:function(){this.notifySubscribers(this[I],"beforeChange")}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Za=function(b){return"function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.xa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d}});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")}}e?c():(e=!0,h=b.subscribe(function(){++m},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c))}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n)};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k}}}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s()});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da});return b},Vb:function(b){if(!this[r].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob()},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return!0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1)},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc()},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ia?b.Ia(!0):b.ha(!0)},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b)}finally{c.rb=!1}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a)}},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s()});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n)}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
0,c.ha()&&c.Gb();else{var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.ra||c.notifySubscribers(d.X,"awake")}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s())}),c.J=!0,this.notifySubscribers(n,"asleep"))},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
a&&"beforeChange"!=a||this.v()}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return"function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
n?l:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}}})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.v());return h}return"function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?
a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B)}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
h={};return{Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e)}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
a.value)});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Tb(c)},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.va(c,d)},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c)},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
g:h=[k]}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc())}function c(c,d,e){this.node=c;this.yc=
d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e)}a.i.ma(c,a.i.H)}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c)}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
ca(c)}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else{var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]()}return g},null,{l:b});g&&m.ja()||(m=null)}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0,g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]))}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0,g[a.i.pa])();c&&a.h.firstChild(b)&&c(b)}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x)},null,{l:b})}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
k;}})}f=u===n;return{shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,
this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b)},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc()};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc())};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e})}};a.Td=function(b){return(b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b)};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b)};a.Dc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return(b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b)})}),l=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
c)}):b(null,null)})}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l)}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l)}else f(null)}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition)}):
a.na.zb(function(){e(f.definition)}):c(d,e)},Bc:function(a){delete g[a]},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc)})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h)}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a)}):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
a.j.Bc(b)};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.j.dd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d)})}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q)}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
d,"checked",f,!0)}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
k=n}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c())}}})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0)}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d)}):a.c["class"].update(b,c)}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.c.disable=
{update:function(b,c){a.c.enable.update(b,function(){return!a.a.f(c())})}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]))}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c())}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n}}x=(t=
"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b("if");b("ifnot",!1,!0);b("with",!0)})();a.c.let={init:function(b,
c,d,e,f){c=f.extend(c);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n])});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
a.a.Bb(e,c));return[e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"])}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b))});a.m.eb(e,d,"selectedOptions",
f)}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c)});b.scrollTop=e}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}))},null,{notifyImmediately:!0})},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px")}})}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?
a.preventDefault():a.returnValue=!1)}})}};a.c.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c())}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b)},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c)};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d)}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value)}function r(){w||(L=b.value,w=a.a.setTimeout(z,
4))}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d))}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A(a)});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
z);l("blur",z);a.o(m,null,{l:b})}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d)}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f)};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0}),a.a.B(b,"focus",function(){m=!1}),a.a.B(b,"blur",function(){m&&l()}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
(d=function(){k=a.w.M(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.B(b,c,d)});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l)}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f)};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}))},
null,{notifyImmediately:!0})}else a.a.B(b,"change",l),a.o(p,null,{l:b})}else a.ib(b,{checkedValue:c})},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return!a.a.f(c())})}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");
a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d)},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h)})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1])};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}))}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e})};a.C.ia=function(a){this.F=a};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
c,{bb:arguments[0]})};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):
(c.push(e,f),a.a.Ua(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m))},null,{Sa:function(){return!x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode")})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H)}
function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c)}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
!a.a.f(b._destroy)}));x(b)},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a)},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=
a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f)}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l)},null,{l:b,Sa:function(){return!a.a.kd(k)}});
return{Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y)}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y)}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else{if(!k||t&&t._countWaitingForRemove){var E=
a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value)}for(;w<f.length;)p(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M)}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
q(h.afterAdd,F)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a)})()})})();})();

require(["knockout"], function (ko) {
    ko.bindingHandlers.styles = {
        init: function (element, valueAccessor) {
            var styles = ko.unwrap(valueAccessor());
            styles.forEach(function (style) {
                var elems = Array.from(element
                    .getElementsByTagName(style.tagName));
                if (element.nodeName.toLowerCase() === style.tagName.toLowerCase())
                    elems.push(element);
                var styleValue = "";
                style.styleAttributes.forEach(function (attr) {
                    styleValue = styleValue.concat(attr.attribute + ":" + attr.value + ";");
                });
                elems.forEach(function (elem) {
                    if (elem.hasAttribute("style")) {
                        elem.setAttribute("style", elem.getAttribute("style").concat(styleValue));
                    } else {
                        elem.setAttribute("style", styleValue);
                    }
                });
            });
        }
    };
    require(['text!json/page-sections.json', 'domReady!'], function (sectionsJSON) {
        ko.components.register("page-body", { require: "modules/page-body" });
        ko.components.register("iat-header", { require: "modules/iat-header" });
        ko.components.register("menu-bar", { require: "modules/menu-bar" });
        ko.components.register("page-content", { require: "modules/page-content" });
        ko.components.register("inset-text", {require: "modules/inset-text"});
        ko.components.register("svg-header", {require: "modules/svg-header"});
        ko.components.register("menu-button", {require: "modules/menu-button"});
        ko.components.register("expanding-menu-button", {require: "modules/expanding-menu-button"});
        var sections = JSON.parse(sectionsJSON);
        sections.pageSections.forEach((s) => {
            if (s.module) {
                ko.components.register(s.componentName, { require : "modules/" + s.module });
            } else {
                ko.components.register(s.componentName, { template : { require : s.template }});
            }
        });

        require(['knockout', 'text!json/page-sections.json'], function(ko, sections) {
            JSON.parse(sections).manual.forEach(s => {
                if (!s.module)
                    ko.components.register(s.component, { template : { require : s.template },
                        viewModel : { require : 'modules/manual/manual-page'}});
                else
                    ko.components.register(s.component, { require : s.module});
            });
        });
    
        sections.components.forEach((c) => {
            ko.components.register(c.component, { require : "modules/" + c.module });
        });
        ko.applyBindings("page-body");
    });
});




define("../main", function(){});

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    function useDefault(value, defaultValue) {
        return value === undefined || value === '' ? defaultValue : value;
    }

    //Allow for default ports for http and https.
    function isSamePort(protocol1, port1, protocol2, port2) {
        if (port1 === port2) {
            return true;
        } else if (protocol1 === protocol2) {
            if (protocol1 === 'http') {
                return useDefault(port1, '80') === useDefault(port2, '80');
            } else if (protocol1 === 'https') {
                return useDefault(port1, '443') === useDefault(port2, '443');
            }
        }
        return false;
    }

    text = {
        version: '2.0.15',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.lastIndexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || isSamePort(uProtocol, uPort, protocol, port));
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});

define('text!templates/already-registered-form.html',[],function () { return '<form data-bind="attr : { id : formId }">\n    <div data-bind="if: wasAutoRedirect">\n        <p>A copy of the software has already been registered to a\n            <!-- ko if: state().action === \'client-exists\' -->\n            client\n            <!-- /ko -->\n            <!-- ko if: state().action === \'user-exists\' -->\n            user\n            <!-- /ko -->\n            with the name <span class="hilight" data-bind="text : state().firstName + \' \' + state().lastName"></span>\n            and\n            the email address <span class="hilight" data-bind="text : state().email"></span>.</p>\n        <p>If you need to download the software again or retrieve your product key, make the appropriate\n            selection below. Note that your product key will be emailed\n            to <span data-bind="text : state().email"></span> rather than displayed for security reasons.\n            You may also find your product key within\n            <span class="hilight">IAT Design</span> from the <span class="buttonHilight">About Box</span>\n            accessible from the <span class="buttonHilight">Help</span>\n            drop-down menu.</p>\n    </div>\n    <div data-bind="ifnot: wasAutoRedirect">\n        <p>If you need another copy of IAT Design or to have your product key emailed to you, enter\n            your email address below, either the address you used to initially download the software or\n            any email you have activated the software with, select what you need, and click the submit button.\n            Note that your product key will be emailed to you rather than displayed for security reasons.\n        </p>\n    </div>\n    <div class="form">\n        <div class="columns">\n            <div style="grid-column: 1">\n                <div class="formDataGrid">\n                    <!-- ko foreach : errors().filter(e => e.field === \'email\') -->\n                    <p class="errorMessage" data-bind="text: $data.message"></p>\n                    <!-- /ko -->\n                    <p class="leftInputLabel">eMail:</p>\n                    <!-- ko if : !noSuchEmail() && email() -->\n                    <input name="email" type="text" data-bind="attr : { value : state().email}" disabled />\n                    <!-- /ko -->\n                    <!-- ko ifnot : !noSuchEmail() && email() -->\n                    <input name="email" type="text" data-bind="attr : { value : state().email }" />\n                    <!-- /ko -->\n                    <!-- ko if: noSuchEmail() && email() -->\n                    <span class="hilightHover" style="grid-column: 3/4; align-content: center; margin: 0px 15px;" data-bind="click : showRegisterForm">Click to Register</span>\n                    <!-- /ko -->\n                </div>\n            </div>                \n            <div style="grid-column: 2">\n                <div class="formDataGrid">\n                    <!-- ko foreach: errors().filter(e => e.field === \'needed\') -->\n                    <p class="errorMessage" data-bind="text: $data.message"></p>\n                    <!-- /ko -->\n                    <!-- ko if : (errors().filter(e => e.field === \'neeeded\').length > 0) || (needed() !== \'download\') -->\n                    <input style="margin-left: 0px;" type="radio" name="needed" value="download" />\n                    <!-- /ko -->\n                    <!-- ko ifnot : (errors().filter(e => e.field === \'neeeded\').length > 0) || (needed() !== \'download\') -->\n                    <input style="margin-left: 0px;" type="radio" name="needed" value="download" checked />\n                    <!-- /ko -->\n                    <p class="rightInputLabel">I need to download the software</p>\n                    <!-- ko if : (errors().filter(e => e.field === \'needed\').length > 0) || (needed() !== \'productKey\') -->\n                    <input style="margin-left: 0px;" type="radio" name="needed" value="productKey" />\n                    <!-- /ko -->\n                    <!-- ko ifnot : (errors().filter(e => e.field === \'needed\').length > 0) || (needed() !== \'productKey\') -->\n                    <input style="margin-left: 0px;" type="radio" name="needed" value="productKey" checked />\n                    <!-- /ko -->\n                    <p class="rightInputLabel">I need to retrieve my product key</p>\n                </div>\n                </div>\n        </div>\n    </div>\n    <div class="formDataGrid">\n        <!-- ko ifnot: posting()-->\n        <input type="button" id="already-registered-form-post" value="Submit" data-bind="click : post" />\n        <!-- /ko -->\n        <!-- ko if: posting() -->\n        <span class="pleaseWait" data-bind="text : pleaseWaitText()"></span>\n        <!-- /ko -->\n    </div>\n</form>';});

define('modules/already-registered-form',['knockout', 'text!templates/already-registered-form.html'], function (ko, htmlString) {
    function AlreadyRegisteredForm(params) {
        var self = this;
        self.needed = ko.observable("");
        self.errors = ko.observableArray([]);
        self.state = params.state;
        self.wasAutoRedirect = (self.state().email !== undefined);
        self.noSuchEmail = ko.pureComputed(() => ((self.state().action !== 'client-exists') &&
            (self.state().action !== 'user-exists') && !self.state().clientId));
        self.formId = params.formId;
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.hasErrors = ko.observable(false);
        self.pleaseWaitText = ko.pureComputed(function () {
            var text = "Please wait";
            for (var ctr = 0; ctr < self.waitDots(); ctr++)
                text += ". ";
            return text;
        });
        self.email = ko.observable(null);
    }

    AlreadyRegisteredForm.prototype.showRegisterForm = function () {
        var self = this;
        var form = document.getElementById(self.formId);
        self.state({ action: "register", email: form.elements.namedItem("email").value, noSuchEmail: true });
    };

    AlreadyRegisteredForm.prototype.post = function () {
        var self = this;
        self.waitDotInterval = window.setInterval(function () {
            if (self.waitDots() < 3)
                self.waitDots(self.waitDots() + 1);
            else
                self.waitDots(0);
        }, 300);
        self.posting(true);
        var form = document.getElementById(self.formId);
        var formData = new FormData();
        formData.append("needed", form.elements.namedItem("needed").value);
        formData.append("email", form.elements.namedItem("email").value);
        self.email(form.elements.namedItem("email").value);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.errors([]);
                self.posting(false);
                document.getElementById("already-registered-form-post").disabled = false;
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(ajax.responseText);
                if (response.hasErrors) {
                    self.hasErrors(true);
                    response.globalErrors.forEach((ge) => self.errors.push({ field: 'global', message: ge }));
                    Object.keys(response.fieldErrors).forEach((k) => self.errors.push({ field: k, message: response.fieldErrors[k] }));
                    return;
                } else if (response.download) {
                    self.state({
                        action: "download", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent, downloadUrl: response.downloadUrl,
                        downloadPassword: response.downloadPassword, clientId: response.clientId
                    });
                } else if (response.productKeySent) {
                    self.state({
                        action: "emailing-product-key", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: true, emailSentToClient: response.emailSentToClient,
                        clientId: response.clientId
                    });
                }
            } else if (this.readyState === 4) {
                self.state({ action: "error", errorId: this.getResponseHeader("Error-Id") });
            }
        };
        self.errors([]);
        self.hasErrors(false);
        window.setTimeout(function () {
            ajax.open("POST", "FormSubmissions/AlreadyRegistered", true);
            ajax.setRequestHeader("Accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    return { viewModel: AlreadyRegisteredForm, template: htmlString };
});

define('text!templates/download-form.html',[],function () { return '<svg-header params="caption : \'Download\', template : headerTemplate, display : display"></svg-header>\n<p>The app is freely available to individuals wishing to create have no more than one test online at once\n    and administer a total of 5000 or fewer administrations. It is also available in its opensource form \n    at <span class="hilightHover" data-bind="event : { click : function() { window.location = \'https://github.com/mkjanda\' }}">\n    https://github.com/mkjanda</span>. It is also available freely to non-profit organizations\n    for unlimited use. If you have any questions or if you experience problems downloading the product,\n    please contact me at <span class="hilight">michael@iatsoftware.net</span>. If you do not have an Organization Id\n    that you are aware of, use your email address. <span class="highlight">The software requires Windows 8, 10, or 11.</span>\n</p>\n<form data-bind="attr : { id : formId }">\n    <div class="errorDiv" data-bind="if : hasErrors()">\n        <svg-header params="caption: \'Errors in Submission\', template: errorCaptionTemplate, display : display">\n        </svg-header>\n        <div data-bind="foreach : { data : errors().filter(e => e.field === \'global\') }">\n            <p class="errorMessage" data-bind=\'text : $data.message\'></p>\n        </div>\n    </div>\n    <div class="formDataGrid">\n        <p style="grid-column: 1/4">Already Registered?</p>\n        <p style="grid-column: 4"><span class="hilightHover" style="margin: 0px 15px;" data-bind="click : showAlreadyRegistered">\n            Click Here</span></p>\n        <!-- ko foreach: errors().filter(e => { return e.field === \'firstName\' }) -->\n        <p class="errorMessage" data-bind="text : $data.message"></p>\n        <!-- /ko -->\n        <p class="leftInputLabel">First name:</p>\n        <input type="text" name="firstName" />\n        <!-- ko foreach: errors().filter(e => { return e.field === \'lastName\' }) -->\n        <p class="errorMessage" data-bind="text : $data.message"></p>\n        <!-- /ko -->\n        <p class="leftInputLabel">Last name:</p>\n        <input type="text" name="lastName" />\n        <!-- ko foreach: errors().filter(e => { return e.field === \'email\' }) -->\n        <p class="errorMessage" data-bind="text : $data.message"></p>\n        <!-- /ko -->\n        <p class="leftInputLabel">eMail:</p>\n        <!-- ko if: state().email -->\n        <input type="text" name="email" maxLength="255" data-bind="attr : { \'value\' : state().email }" />\n        <!-- /ko -->\n        <!-- ko ifnot : state().email -->\n        <input type="text" name="email" maxLength="255" />\n        <!-- /ko -->\n        <!-- ko foreach: errors().filter(e => { return e.field === \'use\' }) -->\n        <p class="errorMessage" data-bind="text : $data.message"></p>\n        <!-- /ko -->\n        <p>Please enter a description of how you intend to use this product:</p>\n        <textarea name="use" rows="8"></textarea>\n        <!-- ko if: posting() -->\n        <span class="pleaseWait" data-bind="text : pleaseWaitText()"></span>\n        <!-- /ko -->\n        <!-- ko ifnot: posting() -->\n        <input name="Submit" type="button" value="Submit" data-bind="click: post" />\n        <!-- /ko -->\n    </div>\n    <p>If you are using this product through an institution that has acquired a site license, enter the value you were\n        provided instead of your email address. Otherwise,\n        enter your email address. If you have lost or forgotten your organization\'s id, email me.</p>\n</form>';});


define('text!json/svg-headers.json',[],function () { return '{\n    "sectionHeader": {\n        "width": 1200,\n        "height": 154,\n        "blurSize": 140,\n        "textAnchor": "start",\n        "font": "400 92px hobeaux-rococeaux-sherman",\n        "bevelColor": "#000",\n        "styles": [{\n            "tagName": "svg",\n            "styleAttributes": [{\n                    "attribute": "left",\n                    "value": "130px"\n                },\n                {\n                    "attribute": "position",\n                    "value": "relative"\n                }\n            ]\n        }, {\n            "tagName": "text",\n            "styleAttributes": [{\n                "attribute": "text-anchor",\n                "value": "start"\n            }]\n        }, {\n            "tagName": "g",\n            "styleAttributes": [{\n                "attribute": "text-anchor",\n                "value": "start"\n            }]\n        }],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(136, 176, 75)"\n                }, {\n                    "stop": 0.10,\n                    "color": "rgb(184, 138, 172)"\n                },\n                {\n                    "stop": 0.20,\n                    "color": "rgb(128, 115, 150)"\n                }, {\n                    "stop": 0.32,\n                    "color": "rgb(211, 127, 111)"\n                }, {\n                    "stop": 0.50,\n                    "color": "rgb(218, 185, 101)"\n                },\n                {\n                    "stop": 0.67,\n                    "color": "rgb(171, 152, 149)"\n                }, {\n                    "stop": 0.80,\n                    "color": "rgb(174, 140, 142)"\n                }, {\n                    "stop": 0.90,\n                    "color": "rgb(239, 224, 205)"\n                },\n                {\n                    "stop": 1,\n                    "color": "rgb(136, 176, 75)"\n                }\n            ],\n            "x1": 0.25,\n            "y1": 0,\n            "x2": 1,\n            "y2": 1\n        }\n    },\n    "smallSectionHeader": {\n        "width": 1100,\n        "height": 80,\n        "blurSize": 120,\n        "textAnchor": "start",\n        "font": "400 72px hobeaux-rococeaux-sherman",\n        "bevelColor": "#000",\n        "styles": [{\n                "tagName": "svg",\n                "styleAttributes": [{\n                        "attribute": "left",\n                        "value": "100px"\n                    },\n                    {\n                        "attribute": "position",\n                        "value": "relative"\n                    }\n                ]\n            }, {\n                "tagName": "text",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "start"\n                }]\n            },\n            {\n                "tagName": "g",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "start"\n                }]\n            }\n        ],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(136, 176, 75)"\n                }, {\n                    "stop": 0.10,\n                    "color": "rgb(184, 138, 172)"\n                },\n                {\n                    "stop": 0.20,\n                    "color": "rgb(128, 115, 150)"\n                }, {\n                    "stop": 0.32,\n                    "color": "rgb(211, 127, 111)"\n                }, {\n                    "stop": 0.50,\n                    "color": "rgb(218, 185, 101)"\n                },\n                {\n                    "stop": 0.67,\n                    "color": "rgb(171, 152, 149)"\n                }, {\n                    "stop": 0.80,\n                    "color": "rgb(174, 140, 142)"\n                }, {\n                    "stop": 0.90,\n                    "color": "rgb(239, 224, 205)"\n                },\n                {\n                    "stop": 1,\n                    "color": "rgb(136, 176, 75)"\n                }\n            ],\n            "x1": 0.25,\n            "y1": 0,\n            "x2": 1,\n            "y2": 1\n        }\n    },\n    "subHeader": {\n        "width": 1100,\n        "height": 54,\n        "indent": 0,\n        "blurSize": 160,\n        "textAnchor": "middle",\n        "font": "900 48px oxtail",\n        "bevelColor": "rgb(95, 75, 139)",\n        "styles": [{\n                "tagName": "text",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "middle"\n                }]\n            },\n            {\n                "tagName": "g",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "middle"\n                }]\n            }\n        ],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(71, 36, 59)"\n                }, {\n                    "stop": 0.15,\n                    "color": "rgb(151, 60, 108)"\n                },\n                {\n                    "stop": 0.5,\n                    "color": "rgb(244, 85, 32)"\n                }, {\n                    "stop": 0.8,\n                    "color": "rgb(166, 89, 76)"\n                }, {\n                    "stop": 1,\n                    "color": "rgb(185, 18, 40)"\n                }\n            ],\n            "x1": 0,\n            "y1": 0,\n            "x2": 0.75,\n            "y2": 1\n        }\n    },\n    "sampleTestHeader": {\n        "width": 500,\n        "height": 92,\n        "blurSize": 160,\n        "font": "700 64px reklame-script",\n        "textAnchor": "middle",\n        "bevelColor": "rgba(123, 67, 104, .8)",\n        "styles": [{\n                "tagName": "svg",\n                "styleAttributes": [{\n                    "attribute": "position",\n                    "value": "relative"\n                }]\n            },\n            {\n                "tagName": "text",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "middle"\n                }]\n            },\n            {\n                "tagName": "g",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "middle"\n                }]\n            }\n        ],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(71, 36, 59)"\n                }, {\n                    "stop": 0.12,\n                    "color": "rgb(151, 60, 108)"\n                },\n                {\n                    "stop": 0.25,\n                    "color": "rgb(152, 32, 39)"\n                }, {\n                    "stop": 0.37,\n                    "color": "rgb(244, 85, 32)"\n                }, {\n                    "stop": 0.5,\n                    "color": "rgb(206, 49, 117)"\n                },\n                {\n                    "stop": 0.62,\n                    "color": "rgb(185, 18, 40)"\n                }, {\n                    "stop": 0.75,\n                    "color": "rgb(101, 102, 63)"\n                }, {\n                    "stop": 0.87,\n                    "color": "rgb(221, 182, 20)"\n                },\n                {\n                    "stop": 1.0,\n                    "color": "rgb(136, 176, 75)"\n                }\n            ],\n            "x1": 0,\n            "y1": 0.25,\n            "x2": 1,\n            "y2": 0.75\n        }\n    },\n    "attentionHeader": {\n        "width": 1200,\n        "height": 120,\n        "displayWidth": 800,\n        "displayHeight": 80,\n        "blurSize": 160,\n        "font": "900 64px coquette",\n        "textAnchor": "middle",\n        "bevelColor": "rgba(123, 67,, 104, .8)",\n        "styles": [{\n                "tagName": "svg",\n                "styleAttributes": [{\n                        "attribute": "opacity",\n                        "value": ".8"\n                    },\n                    {\n                        "attribute": "position",\n                        "value": "relative"\n                    }\n                ]\n            }, {\n                "tagName": "text",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "middle"\n                }]\n            },\n            {\n                "tagName": "g",\n                "styleAttributes": [{\n                    "attribute": "text-anchor",\n                    "value": "middle"\n                }]\n            }\n        ],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(71, 36, 59)"\n                }, {\n                    "stop": 0.12,\n                    "color": "rgb(151, 60, 108)"\n                },\n                {\n                    "stop": 0.25,\n                    "color": "rgb(152, 32, 39)"\n                }, {\n                    "stop": 0.37,\n                    "color": "rgb(244, 85, 32)"\n                }, {\n                    "stop": 0.5,\n                    "color": "rgb(206, 49, 117)"\n                },\n                {\n                    "stop": 0.62,\n                    "color": "rgb(185, 18, 40)"\n                }, {\n                    "stop": 0.75,\n                    "color": "rgb(101, 102, 63)"\n                }, {\n                    "stop": 0.87,\n                    "color": "rgb(221, 182, 20)"\n                },\n                {\n                    "stop": 1.0,\n                    "color": "rgb(136, 176, 75)"\n                }\n            ],\n            "x1": 0,\n            "y1": 0.25,\n            "x2": 1,\n            "y2": 0.75\n        }\n    },\n    "productKey": {\n        "width": 700,\n        "height": 64,\n        "indent": 0,\n        "font": "900 48px oxtail",\n        "blurSize": 140,\n        "textAnchor": "middle",\n        "bevelColor": "rgb(0, 0, 0)",\n        "styles": [{\n            "tagName": "text",\n            "styleAttributes": [{\n                "attribute": "text-anchor",\n                "value": "middle"\n            }]\n        }, {\n            "tagName": "g",\n            "styleAttributes": [{\n                "attribute": "text-anchor",\n                "value": "middle"\n            }]\n        }],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(136, 176, 75)"\n                }, {\n                    "stop": 0.25,\n                    "color": "rgb(136, 176, 75)"\n                },\n                {\n                    "stop": 0.5,\n                    "color": "rgb(136, 176, 75)"\n                }, {\n                    "stop": 0.75,\n                    "color": "rgb(136, 176, 75)"\n                }, {\n                    "stop": 1,\n                    "color": "rgb(136, 176, 75)"\n                }\n            ],\n            "x1": 0,\n            "y1": 0.25,\n            "x2": 1,\n            "y2": 0.75\n        }\n    },\n    "errorCaption": {\n        "width": 500,\n        "height": 70,\n        "indent": 0,\n        "blurSize": 160,\n        "font": "500 48px cuisine",\n        "textAnchor": "middle",\n        "bevelColor": "rgb(0, 0, 0)",\n        "styles": [{\n            "tagName": "text",\n            "styleAttributes": [{\n                "attribute": "text-anchor",\n                "value": "middle"\n            }]\n        }, {\n            "tagName": "g",\n            "styleAttributes": [{\n                "attribute": "text-anchor",\n                "value": "middle"\n            }]\n        }],\n        "gradient": {\n            "gradientStops": [{\n                    "stop": 0,\n                    "color": "rgb(206, 49, 117)"\n                }, {\n                    "stop": 0.5,\n                    "color": "rgb(206, 49, 117)"\n                },\n                {\n                    "stop": 0.7,\n                    "color": "rgb(152, 32, 39)"\n                }, {\n                    "stop": 1,\n                    "color": "rgb(152, 32, 39)"\n                }\n            ],\n            "x1": 0,\n            "y1": 0.25,\n            "x2": 1,\n            "y2": 0.75\n        }\n    }\n}';});

define('modules/download-form',['knockout', 'text!templates/download-form.html', 'text!json/svg-headers.json'], function (ko, htmlString, templates) {

    function RequestDownload(params) {
        var self = this;
        self.state = params.state;
        self.errors = ko.observableArray([]);
        self.hasErrors = ko.observable(false);
        self.formId = params.formId;
        self.alreadyRegisteredTemplate = JSON.parse(templates).attentionHeader;
        self.errorCaptionTemplate = JSON.parse(templates).errorCaption;
        self.headerTemplate = JSON.parse(templates).sectionHeader;
        self.display = params.display;
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.waitDotInterval = null;
        self.pleaseWaitText = ko.pureComputed(function () {
            var text = "Please wait";
            for (var ctr = 0; ctr < self.waitDots(); ctr++)
                text += ". ";
            return text;
        });
    }

    RequestDownload.prototype.showAlreadyRegistered = function () {
        var self = this;
        self.state({
            action: "already-registered", firstName: self.state().firstName, lastName: self.state().lastName, email: self.state().email,
            downloaded: self.state().downloaded, productKeySent: self.state().productKeySent
        });
    };

    RequestDownload.prototype.post = function () {
        var self = this;
        if (self.waitDotInterveral !== null) {
            self.waitDotInterval = window.setInterval(function () {
                if (self.waitDots() < 3)
                    self.waitDots(self.waitDots() + 1);
                else
                    self.waitDots(0);
            }, 300);
        }
        self.posting(true);
        var form = document.getElementById(self.formId);
        var formData = new FormData();
        formData.append("firstName", form.elements.namedItem("firstName").value);
        formData.append("lastName", form.elements.namedItem("lastName").value);
        formData.append("email", form.elements.namedItem("email").value);
        formData.append("use", form.elements.namedItem("use").value);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
                self.errors([]);
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.hasErrors(response.hasErrors);
                    response.globalErrors.forEach(ge => self.errors.push({ field : 'global', message : ge }));
                    Object.keys(response.fieldErrors).forEach(k => self.errors.push({ field : k, message : response.fieldErrors[k] }));
                } else if (response.clientExists === true) {
                    self.state({
                        action: "client-exists", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent
                    });
                } else if (response.userExists === true) {
                    self.state({
                        action: "user-exists", firstName: response.firstName, lastName: response.lastName, email: response.email,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent
                    });
                } else if (response.organizationDownload) {
                    self.state({
                        action: 'organization-download', downloadUrl: response.downloadUrl, firstName: response.firstName, lastName: response.lastName,
                        clientId: response.clientId, downloadPassword: response.downloadPassword,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent, productKey: response.productKey
                    });
                } else {
                    self.state({
                        action: "initial-download", downloadUrl: response.downloadUrl, firstName: response.firstName, lastName: response.lastName,
                        clientId: response.clientId, downloadPassword: response.downloadPassword,
                        downloaded: self.state().downloaded, productKeySent: self.state().productKeySent, productKey: response.productKey
                    });
                }
            } else if ((this.readyState === 4) && (this.status === 429)) {
                return;
            } else if ((this.readyState === 4) && (this.status === 500)) {
                self.state({ action: "error", errorId: this.getResponseHeader("Error-Id") });
            }
        };
        window.setTimeout(function () {
            ajax.open("POST", "/FormSubmissions/RequestProduct", true);
            ajax.setRequestHeader("Accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    return { viewModel: RequestDownload, template: htmlString };
});

define('text!templates/download-notification.html',[],function () { return '<iframe width="1" height="1" style="display: none;" id="downloadFrame"></iframe>\n<div class="download-notification">\n    <svg-header params="caption : \'Downloading . . .\', template : headerTemplate, display : display"></svg-header>\n    <p>Your download should begin automatically. If it does not, click <span class="hilightHover" data-bind="event : { click : download }">here</span>.\n        If you encounter any problems with the software, please do not hesitate to contact me at <span class="hilight">michael@iatsoftware.net</span>.\n        Contact me as well with suggestions or feature requests. I\'m presently working on employing deep learning, a form of AI, to conduct item\n        analysis, so if you\'d like to contribute your data, I\'d be happy to have it. If you did not read the privacy section, it is impossible\n        to access your data without the password you choose when you upload your test, which is not stored on the server. If you would like\n        an in-depth description of how this works, click <span class="hilightHover" data-bind="click : goToPrivacy">here</span>.\n    </p>\n    <!-- ko if: state().action === \'initial-download\' -->\n    <p>Do not close this window yet. Your product key is:</p>\n    <div><svg-header params="caption: state().productKey, display : display, template : productKeyTemplate, id : \'product-key-text\'"></svg-header></div>\n    <div><input type="button" value="Copy to Clipboard" id="copy-product-key-button" data-bind="click : copyProductKey" /></div>\n    <p>You will need it to activate the program. A manual is included in your download. You may also find online documentation on the menu bar above.\n        Both contain a step-by-step example of creating a test.</p>\n        <p>If you have trouble with product activation, email me at <span class="highlight">michael@iatsoftware.net</span>\n        and I will email you a dummy activation file once I have an email address on record.</p>\n    <!-- /ko -->        \n    <!-- ko if: state().action === \'organization-download\' -->\n    <p>Your product key is the same as every other user in your organization. When you activate the software, a user account will be created\n        on the server for you. If you are activating the product on a second machine, make sure you supply the same email address when activating the software\n        or any tests you might have already uploaded will be inaccessible. If you no longer have access to that email address, as a last resort, get in \n        touch with the principle contact for your organization, <span data-bind=\'text: state().firstName\'></span> <span data-bind=\'text: state().lastName\'></span>.\n        With his or her consent, I will alter your existing user profile.</p>\n    <!-- /ko -->\n    <div>\n        <div style="display: inline-block; width: 65%; vertical-align: top;">\n            <picture>\n                <source srcset="images/windows-warning.webp" type="image/webp">\n                <source srcset="images/windows-warning.png" type="image/png">\n                <img style="max-width: 100%" src="images/windows-warning.png" />\n            </picture>\n        </div>\n        <div style="display: inline-block; vertical-align: top; width: 30%; padding-left: 20px;">\n            <p>You might see this box when you first run the program. This is because the software is freshly signed\n                and does not have &quot;reputation&quot; with Windows SmartScreen. If contacting me would reassure you\n                that the software is save, please do.</p>\n        </div>\n    </div>\n    <!-- ko if : !state().productKeySent && (state().action !==  \'initial-download\') -->\n    <h2>If you need to retrieve your product key, click <span class="hilightHover" data-bind="click : retrieveProductKey">here</span>.</h2>\n    <!-- /ko -->\n</div>\n';});

define('modules/download-notification',['knockout', 'text!templates/download-notification.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerTemplates) {
    function DownloadNotification(params) {
        var self = this;
        self.state = params.state;
        self.display = params.display;
        var headerJson = JSON.parse(headerTemplates);
        self.headerTemplate = headerJson.sectionHeader;
        self.productKeyTemplate = headerJson.productKey;
        self.downloadLink = ko.pureComputed(function () {
            return self.state().downloadUrl + "?password=" + encodeURIComponent(self.state().downloadPassword) + "&clientId=" + self.state().clientId;
        });
        self.downloadInterval = window.setInterval(function () {
            var downloadFrame = document.getElementById("downloadFrame");
            if (downloadFrame) {
                window.clearInterval(self.downloadInterval);
                self.downloadTimeout = window.setTimeout(function () {
                    downloadFrame.src = self.downloadLink();
                }, 1000);
            }
        }, 100);
    }

    DownloadNotification.prototype.download = function() {
        var self = this;
        window.location.replace(self.downloadLink());
    }

    DownloadNotification.prototype.goToPrivacy = function () {
        var self = this;
        self.display({ page: "manual", section: "manual-privacy" });
    };

    DownloadNotification.prototype.retrieveProductKey = function () {
        var self = this;
        var formData = new FormData();
        formData.append("email", self.state().email);
        formData.append("needed", "productKey");
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.state({ action: "error" });
                } else {
                    self.state({
                        action: "emailing-product-key", downloadUrl: self.state().downloadUrl, firstName: self.state().firstName, lastName: self.state().lastName,
                        email: self.state().email, downloaded: true, productKeySent: true,
                        downloadPassword: self.state().downloadPassword, clientId: self.state().clientId
                    });
                }
            } else if (this.readyState === 4) {
                self.state({ action: "error", errorId: this.getResponseHeader("Error-Id") });
            }
        };
        ajax.open("POST", "/FormSubmissions/AlreadyRegistered", true);
        ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
        ajax.setRequestHeader("Accept", "text/json");
        ajax.send(formData);
    };

    DownloadNotification.prototype.copyProductKey = function () {
        var self = this;
        navigator.clipboard.writeText(self.state().productKey);
    };

    return { viewModel: DownloadNotification, template: htmlString };
});

define('text!templates/emailing-product-key-notification.html',[],function () { return '<div class="emailing-product-key-notification">\n<!-- ko if: state().emailSentToClient == true -->\n<p>Your product key has been emailed to <span class="hilight" data-bind="text : state().email"></span>,\nthe account initially used to download the software. If you no longer have access to this account, try again by refreshing the page and using any\nof the emails you have activated the product with. If you do not receive it within\n    five minutes, you may wish to check your spam box or click <span class="hilightHover" data-bind="click : resendEmail">here</span> to have it sent\n    again. Thank you again for using my software, <span class="name" data-bind="text : state().firstName"></span>.</p>\n<!-- /ko -->\n<!-- ko ifnot: state().emailSentToClient == true -->\n<p>Your product key was emailed to <span class="hilight" data-bind="text : state().email"></span>. If you do not receive it within\n    five minutes, you may wish to check your spam box or click <span class="hilightHover" data-bind="click : resendEmail">here</span> \n    to have it sent again. Thank you again for using my software, \n    <span class="name" data-bind="text : state().firstName"></span>.</p>\n<!-- /ko -->\n<!-- ko if: state().downloaded === false -->\n<p>If you need to download the software as well, click <span class="hilightHover" data-bind="click : requestDownload">here</span>.\n\tThe email also contains a link you can use to download the software.</p>\n<!-- /ko -->\n<!-- ko if: emailResent -->\n<p>The email has been resent. If this continues to be a problem, please do not hesitate to contact me at \n    <span class="hilight">michael@iatsoftware.net</span></p>\n<!-- /ko -->\n</div>';});

define('modules/emailing-product-key-notification',['knockout', 'text!templates/emailing-product-key-notification.html'], function (ko, htmlString) {
    function EmailingProductKeyNotification(params) {
        var self = this;
        self.state = params.state;
        self.emailResent = ko.observable(false);
    }

    EmailingProductKeyNotification.prototype.postFormData = function (url, formData, onReadyStateChange) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = onReadyStateChange;
        ajax.open("POST", "/FormSubmissions/AlreadyRegistered", "true");
        ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
        ajax.setRequestHeader("accept", "text/json");
        ajax.send(formData);
    };

    EmailingProductKeyNotification.prototype.requestDownload = function () {
        var self = this;
        var formData = new FormData();
        formData.append("email", self.state().email);
        formData.append("needed", "download");
        var onReadyStateChange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.state({action: "error"});
                } else {
                    self.state({action: "download", downloadUrl: response.downloadUrl, firstName: response.firstName, lastName: response.lastName,
                        email: self.state().email, downloaded: true, productKeySent: true,
                        downloadPassword: response.downloadPassword, clientId: response.clientId
                    });
                }
            } else if (this.readyState === 4) {
                self.state({action: "error", errorId : this.getResponseHeader("Error-Id") });
            }
        };
        self.postFormData("FormSubmissions/AlreadyRegistered", formData, onReadyStateChange);
    };

    EmailingProductKeyNotification.prototype.resendEmail = function () {
        var self = this;
        self.emailResent(false);
        var formData = new FormData();
        formData.append("email", self.state().email);
        formData.append("needed", "productKey");
        var onReadyStateChange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.hasErrors) {
                    self.state({action: "error"});
                } else {
                    self.emailResent(true);
                }
            } else if (this.readyState === 4) {
                self.state({action: "error"});
            }
        };
        self.postFormData("FormSubmissions/AlreadyRegistered", formData, onReadyStateChange);
    };

    return {viewModel: EmailingProductKeyNotification, template: htmlString};
});

define('text!templates/expanding-menu-button.html',[],function () { return '<div class="menuButton" data-bind="attr : { id : id }, style : { display : expanded() ? \'none\' : \'inline-block\' }, ifnot : expanded()">\n    <svg data-bind="style : { width : width }, attr : { width : width.toString(), height : height.toString() }, \n        event : { mouseover : expand }, click : expand ">\n    <defs>\n    <linearGradient x1="0" y1="0" x2="0" y2="1" class="menuBarGradient" data-bind="attr : { id : backgroundGradientId }">\n    <stop offset="0" />\n    <stop offset="0.83" />\n    <stop offset="1" />\n    </linearGradient>\n    <linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : textGradientId }" class="menuButtonTextGradient">\n    <stop offset="0" />\n    <stop offset=".15" />\n    <stop offset="1" />\n    </linearGradient>\n    <linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : hilightedGradientId }" class="menuButtonHilightedGradient">\n    <stop offset="0" />\n    <stop offset=".45" />\n    <stop offset="1" />\n    </linearGradient>\n    </defs>\n    <rect x="0" y="0" data-bind="attr : { width : width, height : height, fill : backgroundGradientUrl }" />\n    <path data-bind="attr : { d : [\'M0,0v\', (height).toString(), \'h\', (width).toString(), \'v-\', (height).toString()].join(\'\') }" stroke="rgb(0, 0, 0)" fill="rgba(0, 0, 0, 0)" />\n    <text text-anchor="middle" data-bind="text: label, style : { fontSize : Math.floor(height / 2).toString() + \'px\',\n        fontFamily : fontFamily, fontWeight : fontWeight }, attr : { x : (width / 2).toString(), y : (height * 5 / 7).toString(), \n        fill : textGradientUrl }"></text>\n    </svg>\n</div>\n<div class="expandedMenuButton" data-bind="attr : {id : id }, if : expanded(), style : { display : expanded() ? \'inline-block\' : \'none\', marginLeft: (width - expandedWidth).toString() + \'px\' }">\n    <svg data-bind="attr : { width : expandedWidth, height : expandedHeight.toString() }">\n    <defs>\n    <linearGradient x1="0" y1="0" x2="0" y2="1" class="menuBarGradient" data-bind="attr : { id : backgroundGradientId }">\n    <stop offset="0" />\n    <stop offset="0.83" />\n    <stop offset="1" />\n    </linearGradient>\n    <linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : textGradientId }" class="menuButtonTextGradient">\n    <stop offset="0" />\n    <stop offset=".15" />\n    <stop offset="1" />\n    </linearGradient>\n    <linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : hilightedGradientId }" class="menuButtonHilightedGradient">\n    <stop offset="0" />\n    <stop offset=".45" />\n    <stop offset="1" />\n    </linearGradient>\n    </defs>\n    <path data-bind="attr : { d : expandedPath + \' z\', fill : backgroundGradientUrl }" stroke="transparent" />\n    <path data-bind="attr : { d : expandedPath }" fill="transparent" stroke="black" />\n    <text text-anchor="middle" data-bind="text : label, style : { fontSize : Math.floor(height / 2).toString() + \'px\',\n        fontFamily : fontFamily, fontWeight : fontWeight }, attr : { x : (expandedWidth - (width / 2)).toString(), \n        y : (height * 5 / 7).toString(), fill : isMousedOver() ? hilightedGradientUrl : textGradientUrl }, click : contract"></text>\n    <!-- ko foreach : selections -->\n    <text data-bind="text : label, attr : { fill : $parent.selected[$index()]() ? $parent.hilightedGradientUrl : $parent.textGradientUrl, \n        x : \'20\', y : ($parent.height + ($parent.choiceHeight * ($index() + 1)) + (0.5 * $parent.choiceHeight)).toString() }, \n        style : { fontSize : ($parent.choiceHeight * 0.9).toString() + \'px\', fontFamily : $parent.fontFamily, fontWeight : $parent.fontWeight }"></text>   \n    <!-- /ko -->\n    <path data-bind="attr : { d : expandedPath + \' z\'}, event : { mouseout : contract, mousemove : onMouseMove }, click : onMouseClick" fill="transparent" stroke="transparent" />\n    </svg>\n</div>\n';});

define('modules/expanding-menu-button',['knockout', 'text!templates/expanding-menu-button.html'], function (ko, htmlString) {

    function ExpandingMenuButton(params) {
        var n = ExpandingMenuButton.Count++;
        var self = this;
        self.isMousedOver = ko.observable(false);
        self.selections = params.selections;
        self.width = params.width;
        self.display = params.display;
        self.height = params.height;
        self.label = params.label;
        self.fontFamily = params.fontFamily || "myriad-pro";
        self.fontWeight = params.fontWeight || 600;
        self.expandedWidth = params.width + 200;
        self.id = "expanding-menu-button-" + n.toString();
        self.backgroundGradientId = self.id + "-background-gradient";
        self.textGradientId = self.id + "-text-gradient";
        self.hilightedGradientId = self.id + "-highlighted-gradient";
        self.backgroundGradientUrl = "url(#" + self.backgroundGradientId + ")";
        self.textGradientUrl = "url(#" + self.textGradientId + ")";
        self.hilightedGradientUrl = "url(#" + self.hilightedGradientId + ")";
        self.cornerRadius = 40;
        self.choiceHeight = 30;
        self.expandedHeight = self.height + (self.choiceHeight * 0.5) + self.choiceHeight * (self.selections.length) + 
            (0.67 * self.cornerRadius);
        self.expandedPath = "M " + (self.expandedWidth - self.width).toString() + " 0 v " + (self.height - 1).toString() + " h -" +
                (self.expandedWidth - self.width).toString() + " v " + (self.expandedHeight - self.height - self.cornerRadius).toString() + " c 0 " +
                self.cornerRadius.toString() + " 0 " + self.cornerRadius.toString() + " " + self.cornerRadius.toString() + " " +
                self.cornerRadius.toString() + " h " + (self.expandedWidth - 2 * self.cornerRadius).toString() + " c " +
                self.cornerRadius.toString() + " 0 " + self.cornerRadius.toString() + " 0 " + self.cornerRadius.toString() + " -" +
                self.cornerRadius.toString() + " v -" + (self.expandedHeight - self.cornerRadius - 1).toString();
        self.expanded = ko.observable(false);
        self.selected = [];
        self.selections.forEach(function () {
            self.selected.push(ko.observable(false));
        });
    }

    ExpandingMenuButton.prototype.expand = function () {
        var self = this;
        self.expanded(true);
    };
    ExpandingMenuButton.prototype.contract = function () {
        var self = this;
        self.expanded(false);
    };

    ExpandingMenuButton.prototype.onMouseMove = function (data, evt) {
        var self = this;
        var y = evt.offsetY - self.height;
        var x = evt.offsetX;
        if ((x > self.expandedWidth - self.width) && (y < self.height))
            self.isMousedOver(true);
        else
            self.isMousedOver(false);
        var hilightNdx = Math.floor((y - self.choiceHeight * 0.5) / self.choiceHeight);
        for (var ctr = 0; ctr < self.selected.length; ctr++) {
            if (ctr === hilightNdx)
                self.selected[ctr](true);
            else
                self.selected[ctr](false);
        }
    };

    ExpandingMenuButton.prototype.onMouseClick = function (data, evt) {
        var self = this;
        var y = evt.offsetY - self.height;
        var selectionNdx = Math.floor((y - 0.5 * self.choiceHeight) / self.choiceHeight);
        if ((selectionNdx < self.selections.length) && (selectionNdx >= 0)) {
            self.display({page: 'manual', manualSection : self.selections[selectionNdx].component });
        }
    };

    ExpandingMenuButton.Count = 0;

    return {viewModel: ExpandingMenuButton, template: htmlString};
});

define('text!templates/features.html',[],function () { return '<div id="features">\n<div class="featureMenu" data-bind="style : { width : menuWidth }, foreach: buttons">\n    <div data-bind=\'click : $parent.buttonClick, event : { mouseover : $parent.buttonMouseOver, mouseout : $parent.buttonMouseOut }\' class="featureButton">\n\t<inset-text params="button : $data, buttonStyle : $parent.buttonStyles"></inset-text>\n    </div>\n</div>\n<div class="featuresContent" data-bind="component : activeComponent">\n</div>\n</div>';});


define('text!json/features.json',[],function () { return '{\n    "buttonStyles" : { "height" : 72, "xOffset" : 0, \n        "selected" : { "rectFill" : "rgba(255, 255, 255, .5)", "textFill" : "rgb(206, 49, 117)" },\n        "unselected" : { "rectFill" : "rgba(0, 0, 0, 0)", "textFill" : "rgb(123, 67, 104)" },\n        "hilighted" : { "rectFill" : "rgba(206, 49, 117, .5)", "textFill" : "rgb(123, 67, 104" }            \n    },\n    "sections" : [\n\t\t{ "label" : "IAT Design", "component" : "iat-design", "template" : "text!templates/features/iat-design.html" },\n\t\t{ "label" : "Block Design", "component" : "block-design", "template" : "text!templates/features/block-design.html" },\n\t\t{ "label" : "Instructions", "component" : "instructions", "template" : "text!templates/features/instructions.html" },\n\t\t{ "label" : "Response Keys", "component" : "response-keys", "template" : "text!templates/features/response-keys.html" },\n\t\t{ "label" : "Layout", "component" : "layout", "template" : "text!templates/features/layout.html" },\n\t\t{ "label" : "Questionnaires", "component" : "questionnaires", "template" : "text!templates/features/questionnaires.html" },\n\t\t{ "label" : "Privacy", "component" : "privacy", "template" : "text!templates/features/privacy.html" },\n\t\t{ "label" : "Test Results", "component" : "test-results", "template" : "text!templates/features/test-results.html" }\n    ]\n}\n';});

define('modules/features',['knockout', 'text!templates/features.html', 'text!json/features.json'], function (ko, htmlString, featureList) {

    function Features(params) {
        var self = this;
        self.features = JSON.parse(featureList).sections;
        self.buttonStyles = JSON.parse(featureList).buttonStyles;
        self.menuWidth = 200;
        self.buttons = ko.observableArray();
        self.activeComponent = ko.observable("iat-design");
        self.features.forEach(function(feature) {
            self.buttons.push({ label : feature.label, width : self.menuWidth, height : feature.height, xOffset : self.features.xOffset,
                component : feature.component, state : ko.observable("unselected") });
        });
        self.buttonClick = function() {
            if (this.state() === "selected")
                return;
            self.buttons().forEach(function(but) {
                but.state("unselected");
            });
            this.state("selected");
            self.activeComponent(this.component);
        };
        self.buttonMouseOver = function() {
            if (this.state() === "selected")
                return;
            this.state("hilighted");
        };
        self.buttonMouseOut = function() {
            if (this.state() === "selected")
                return;
            this.state("unselected");
        };
        self.features.forEach(function(val) {
            if (val.module) {
                if (!ko.components.isRegistered(val.component))
                    ko.components.register(val.component, { require : val.module });
            } else {
                if (!ko.components.isRegistered(val.component))
                    ko.components.register(val.component, { template : { require : val.template }});
            }
        });
    }

    return {viewModel: Features, template: htmlString};
});

define('text!templates/iat-header.html',[],function () { return '<div id="headerWrapper">\r\n    <div class="highRes">\r\n        <picture>\r\n            <source srcset="images/iat-website-header@0.25x.webp" media="(max-width: 1680px)" type="image/webp" />\r\n            <source srcset="images/iat-website-header@0.5x.webp" media="(min-width: 1680px) and (max-width: 3360px)"\r\n                type="image/webp" />\r\n            <source srcset="images/iat-website-header@0.75x.webp" media="(min-width: 3360px) and (max-width: 5040px)"\r\n                type="image/webp" />\r\n            <source srcset="images/iat-website-header@1.0x.webp" media="(min-width: 5040px)" type="image/webp" />\r\n            <source srcset="images/iat-website-header@0.25x.jpg" media="(max-width: 1680px)" type="image/jpeg" />\r\n            <source srcset="images/iat-website-header@0.5x.jpg" media="(min-width: 1680px) and (max-width: 3360px)"\r\n                type="image/jpeg" />\r\n            <source srcset="images/iat-website-header@0.75x.jpg" media="(min-width: 3360px) and (max-width: 5040px)"\r\n                type="image/jpeg" />\r\n            <source srcset="images/iat-website-header@1.0.jpg" media="(min-width: 5040px)" type="image/jpeg" />\r\n            <img src="images/iat-website-header@0.25x.jpg" />\r\n        </picture>\r\n    </div>\r\n</div>';});

define('modules/iat-header',['knockout', 'text!templates/iat-header.html'], function (ko, htmlString) {
    function Header(params) {
        var self = this;
        self.headerImageAr = 1680 / 550;
        self.scrollWidth = self.getScrollBarWidth();
        self.logoImageHeight = params.logoImageHeight;
        self.descendantsLoaded = ko.observable(false);
        self.height = ko.observable("0px");
        self.headerWrapper = document.getElementById('headerWrapper');
        self.lastWidth = null;
        self.lastHeight = null;
        self.justResized = false;
        self.resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(e => {
                if (((e.contentRect.width === self.lastWidth) &&
                    (e.contentRect.height === self.lastHeight)) || self.justResized)
                    return;
                self.justResized = true;
                self.picture.style.width = e.contentRect.width.toString() + 'px';
                self.picture.style.height = (e.contentRect.width / self.headerImageAr).toString() + 'px';
                self.logoImageHeight(e.contentRect.width / self.headerImageAr);
                self.headerWidth = e.contentRect.width;
                self.headerHeight = e.contentRect.height;
                window.setTimeout(() => self.justResized = false, 100);
            });
        });
        self.resizeObserver.observe(document.body);
        self.picture = document.querySelector('div#headerWrapper div.highRes picture');
        window.scrollTo(0, 0);
        self.picture.style.width = window.outerWidth - self.getScrollBarWidth() + 'px';
        self.logoImageHeight((window.outerWidth - self.getScrollBarWidth()) / self.headerImageAr);
        self.height(self.logoImageHeight().toString() + "px");
    }
    /*
        Header.prototype._setHeaderImage = function() {
            var self = this;
            self.logoImageHeight(window.innerWidth / self.headerImageAr);
            self.height(self.logoImageHeight().toString() + "px");
            var headerImage;
            for (var ctr = 0; ctr < self.headerImages.length - 1; ctr++) {
                if (ctr === self.headerImages.length - 1) {
                    headerImage = self.headerImages[ctr];
                    break;
                }
                if (window.innerWidth <= self.headerImages[ctr].width) {
                    headerImage = self.headerImages[ctr];
                    break;
                }
            }
            if (headerImage.image === undefined) {
                headerImage.image = new Image();
                headerImage.image.onload = () => {
                    if (document.querySelector("div#headerWrapper div.highRes img") != null) {
                        document.querySelector("div#headerWrapper div.highRes").removeChild(document.querySelector("div#headerWrapper div.highRes img"));
                    }
                    document.querySelector("div#headerWrapper div.highRes").appendChild(headerImage.image);
                };
                headerImage.image.src = headerImage.src;
            } else {
                if (document.querySelector("div#headerWrapper div.highRes img") != null) {
                    document.querySelector("div#headerWrapper div.highRes").removeChild(document.querySelector("div#headerWrapper div.highRes img"));
                }
                document.querySelector("div#headerWrapper div.highRes").appendChild(headerImage.image);
            }
        };
    */
    Header.prototype.getScrollBarWidth = function () {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.overflow = "scroll";
        outer.style.msOverflowStyle = "scrollbar";
        document.body.appendChild(outer);

        var inner = document.createElement("div");
        outer.appendChild(inner);
        var scrollWidth = outer.offsetWidth - inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return scrollWidth;
    };


    return {
        viewModel: Header,
        template: htmlString
    };
});

define('text!templates/inset-text.html',[],function () { return '<svg data-bind="attr : { height: buttonStyle.height }" width="200" viewBox="0 0 550 80">\n<g overflow="hidden" text-anchor="start" class="outer">\n<defs>\n<mask data-bind="attr : { id : textMaskId }">\n    <text y="60" fill="rgb(255, 255, 255)" data-bind="text: button.label, attr : { x : buttonStyle.xOffset }"></text>\n    <filter x="-20%" y="-20%" width="140%" height="140%" data-bind="attr : { id : innerShadowId }">\n        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />\n        <feOffset in="blur" dx="2.5" dy="2.5" />\n    </filter>\n</mask>\n</defs>\n<g class="inner" data-bind="attr : { mask : textMaskUrl }">\n<rect x="0" y="0" width="550" height="75" data-bind="attr : { fill : rectFill() }" />\n<text y="60" data-bind="text : button.label, attr : { x : button.xOffset, filter : innerShadowUrl, fill : textFill() }"></text>\n</g>\n</g>\n</svg>\n';});

define('modules/inset-text',['knockout', 'text!templates/inset-text.html'], function (ko, htmlString) {
    function InsetText(params) {
        var self = this;
        self.button = params.button;
        self.buttonStyle = params.buttonStyle;
        self.textMaskId = "insetTextMask-" + self.button.component;
        self.innerShadowId = "insetTextShadow-" + self.button.component;
        self.textMaskUrl = "url(#" + self.textMaskId + ")";
        self.innerShadowUrl = "url(#" + self.innerShadowId + ")";
        self.rectFill = ko.observable(self.buttonStyle.unselected.rectFill);
        self.textFill = ko.observable(self.buttonStyle.unselected.textFill);
        self.button.state.subscribe(function (newVal) {
            switch (newVal) {
                case "selected" :
                    self.rectFill(self.buttonStyle.selected.rectFill);
                    self.textFill(self.buttonStyle.selected.textFill);
                    break;
                case "unselected" :
                    if (!self.button.state() !== "selected") {
                        self.rectFill(self.buttonStyle.unselected.rectFill);
                        self.textFill(self.buttonStyle.unselected.textFill);
                    }
                    break;
                case "hilighted" :
                    self.rectFill(self.buttonStyle.hilighted.rectFill);
                    self.textFill(self.buttonStyle.hilighted.textFill);
                    break;
            }
        });
        /*
         self.selectionArray = params.selectionArray;
         self.selectionArray.push(false);
         self.selectionArray.subscribe(function (newVal) {
         if ((self.state() === "unselected") && (newVal[self.ndx] === true))
         self.state("selected");
         else if ((self.state() === "selected") && (newVal[self.ndx] === false)) {
         self.state("unselected");
         self.selectionArray.splice(self.ndx, 1, false);
         }
         });/*
         self.state.subscribe(function (newVal) {
         switch (newVal) {
         case "unselected":
         self.cssClass("unselected");
         //                    self.bevelColor("rgb(0, 0, 0)");
         //                   self.textColor("rgb(152, 32, 39)");
         break;
         
         case "hilighted":
         self.cssClass("hilighted");
         //                    self.bevelColor("rgb(71, 36, 59)");
         //                    self.textColor("rgb(206, 49, 117)");
         break;
         
         case "selected":
         self.cssClass("selected");
         //                    self.bevelColor("rgb(71, 36, 59)");
         //                  self.textColor("rgb(151, 60, 108");
         break;
         }
         });*/
    }

    return {viewModel: InsetText, template: htmlString};
});

define('text!templates/menu-bar.html',[],function () { return '<div id="mainMenuBarWrapper">\n    <div id="mainMenuBar">\n        <svg class="menuBarBackground" data-bind="style : { height : height.toString() + \'px\' }">\n            <defs>\n                <linearGradient id="menu-bar-linear-gradient" x1="774.5" y1="0" x2="774.5" class="menuBarGradient"\n                                data-bind="attr : { y2 : height.toString() }" gradientUnits="userSpaceOnUse">\n                    <stop offset="0" />\n                    <stop offset="0.83" />\n                    <stop offset="1" />\n                </linearGradient>\n            </defs>\n        <rect class="cls-1" x="0" y="0" width="100%" data-bind="attr : { height : height.toString() }" fill="url(#menu-bar-linear-gradient)"/>\n        </svg>\t\n        <div id="mainMenuButtonWrapper">\n            <!-- ko foreach: menuButtons -->\n                <menu-button params="display : $parent.display, label : label, targetId : id, height : $parent.height, width : buttonWidth, buttonNdx : $index, idPrefix : \'headerMenuButton\'"></menu-button>\n            <!-- /ko -->\n            <expanding-menu-button params="display : display, label : \'Documentation\', height: height, width: 240, selections : mainContent.manual"></expanding-menu-button>\n        </div>\n    </div>\n</div>';});


define('text!json/page-sections.json',[],function () { return '{ \n        "pageSections" : [\n\t\t{"id" : "sectionIntro", "componentName" : "section-intro", "template" : "text!templates/section-intro.html"},\n\t\t{"label" : "The Software", "labelWidth" : 220, "id" : "sectionTheSoftware", "componentName" : "section-the-software", "module" : "section-the-software", "template" : "text!templates/section-the-software.html"},\n                {"id" : "sectionTheIat", "componentName" : "section-the-iat", "module" : "section-the-iat", "template" : "text!templates/section-the-iat"},\n\t\t{"label" : "Download", "labelWidth" : 220, "id" : "sectionDownload", "componentName" : "section-download", "module" : "section-download", "template" : "text!templates/section-download.html"},\n                {"label" : "Sample IATs", "labelWidth" : 220, "id" : "sectionSampleTests", "componentName" : "sample-tests", "module" : "sample-tests", "template" : "test!templates/sample-tests.html"},\n                {"id" : "sectionCommercialUse", "componentName" : "section-commmercial-use", "module" : "section-commercial-use", "template" : "text!templates/section-commercial-use.html"},\n                {"id" : "sectionOauth", "componentName" : "section-oauth", "module" : "section-oauth",  "template" : "text!templates/section-oauth.html"},\n                {"id" : "sectionCors", "componentName" : "section-cors", "module" : "section-cors", "template" : "text!templates/section-cors.html"},\n                {"label" : "Contact", "labelWidth" : 220, "id" : "sectionContact", "componentName" : "section-contact", "module" : "section-contact", "template" : "text!templates/section-contact.html"}\n        ],\n        "manual":\n        [\n            { "label" : "Your first IAT", "component" : "manual-your-first-iat", "template" : "text!templates/manual/your-first-iat.html" },\n            { "label" : "Main Interface", "component" : "manual-main-interface", "template" : "text!templates/manual/main-interface.html" },\n            { "label" : "Block Design", "component" : "manual-block-design", "template" : "text!templates/manual/block-design.html" },\n            { "label" : "Response Keys", "component" : "manual-response-keys", "template" : "text!templates/manual/response-keys.html" },\n            { "label" : "Instruction Screens", "component" : "manual-instruction-screens", "template" : "text!templates/manual/instruction-screens.html" },\n            { "label" : "Questionnaires", "component" : "manual-questionnaires", "template" : "text!templates/manual/surveys.html" },\n            { "label" : "Layout", "component" : "manual-layout", "template" : "text!templates/manual/layout.html" },\n            { "label" : "Alternating Items", "component" : "manual-alternating-items", "template" : "text!templates/manual/alternating-items.html" },\n            { "label" : "Server Interface", "component" : "manual-server-interface", "template" : "text!templates/manual/server-interface.html" },\n            { "label" : "Privacy (Data Security)", "component" : "manual-privacy", "template" : "text!templates/manual/privacy.html" },\n            { "label" : "Identifying Test Takers", "component" : "manual-tokens", "template" : "text!templates/manual/tokens.html" },\n            { "label" : "Direct Data Retrieval", "component" : "manual-oauth", "module" : "modules/manual/manual-oauth", "template" : "text!templates/manual/manual-oauth.html" },\n            { "label" : "Hosting From Another Site", "component" : "manual-cors", "template" : "text!templates/manual/cors.html" }\n        ],\n        "components" : [\n                { "component" : "oauth-example", "module" : "manual/oauth-example", "template" : "text!templates/manual/oauth-example.html" },\n                { "component" : "manual-wrapper", "module" : "manual-wrapper" }\n        ]        \n}\n';});

define('modules/menu-bar',['knockout', 'text!templates/menu-bar.html', 'text!json/page-sections.json'], function (ko, htmlString, pageSectionsJSON) {
    function MenuBar(params) {
        var self = this;
        self.display = params.display;
        self.mainContent = JSON.parse(pageSectionsJSON);
        self.menuButtons = ko.observableArray();
        self.mainContent.pageSections.forEach(function (section) {
            if (section.label)
                self.menuButtons.push({ label: section.label, id: section.id, buttonWidth: section.labelWidth });
        });
        self.id = 'mainMenuBarWrapper';
        self.headerHeight = params.headerHeight;
        self.height = params.height;
        self.position = ko.observable("absolute");
        self.top = ko.observable("500px");
    }

    return { viewModel: MenuBar, template: htmlString };
});

define('text!templates/menu-button.html',[],function () { return '<div class="menuButton" data-bind="attr : { id : id }">\n\t<svg data-bind="style : { width : width.toString() + \'px\' }, click: buttonClick, attr : { width : width.toString(), height : height.toString() }, \n            event : { mouseover : function() { isMousedOver(true) }, mouseout : function() { isMousedOver(false) }}">\n\t\t<defs>\n\t\t\t<linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : backgroundGradientId} " class="menuBarGradient"> \n                            <stop offset="0" />\n                            <stop offset=".83" />\n                            <stop offset="1"/>\n\t\t\t</linearGradient>\n                        <linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : textGradientId }" class="menuButtonTextGradient">\n                            <stop offset="0" />\n                            <stop offset=".15" />\n                            <stop offset="1" />\n                        </linearGradient>\n                        <linearGradient x1="0" y1="0" x2="0" y2="1" data-bind="attr : { id : hilightedGradientId }" class="menuButtonHilightedGradient">\n                            <stop offset="0" />\n                            <stop offset=".45" />\n                            <stop offset="1" />\n                        </linearGradient>\n\t\t</defs>\n\t\t<rect x="0" y="0" data-bind="attr : { width : width, height : height, fill : backgroundGradientUrl }" />\n\t\t<path data-bind="attr : { d : pathString }" stroke="rgb(0, 0, 0)" fill="rgba(0, 0, 0, 0)" />\n\t\t<text text-anchor="middle" data-bind="text: label, style : { fontSize : Math.floor(height / 2).toString() + \'px\', \n                fontFamily : fontFamily, fontWeight : fontWeight }, attr : { x : (width / 2).toString(), \n                y : (height * 5 / 7).toString(), fill : isMousedOver() ? hilightedGradientUrl : textGradientUrl }" />\n\t</svg>\n</div>\n\n\n';});

define('modules/menu-button',['knockout', 'text!templates/menu-button.html'], function (ko, htmlString) {

    function MenuButton(params) {
        MenuButton.Count++;
        var self = this;
        self.label = params.label;
        self.targetId = params.targetId;
        self.idPrefix = params.idPrefix;
        self.display = params.display;
        self.width = params.width;
        self.height = params.height;
        self.fontFamily = params.fontFamily || "myriad-pro";
        self.fontWeight = params.fontWeight || 600;
        self.id = "menu-button-" + MenuButton.Count.toString();
        self.backgroundGradientId = self.id + "-background-linear-gradient";
        self.backgroundGradientUrl = "url(#" + self.backgroundGradientId + ")";
        self.textGradientId = self.id + "-text-linear-gradient";
        self.textGradientUrl = "url(#" + self.textGradientId + ")";
        self.hilightedGradientId = self.id + "-hilighted-linear-gradient";
        self.hilightedGradientUrl = "url(#" + self.hilightedGradientId + ")";
        self.isMousedOver = ko.observable(false);
        self.pathString = [ (params.buttonNdx() === 0) ? "M1,0v" : "M0,0v", self.height.toString() + "h", 
            ((params.buttonNdx() === 0) ? (self.width - 1) : self.width).toString(),  "v-" + self.height.toString()].join('');
    }

    MenuButton.Count = 0;

    MenuButton.prototype.buttonClick = function () {
        var self = this;
        self.display({page : "page", section : self.targetId });
    };

    return {viewModel: MenuButton, template: htmlString};
});
define('modules/font-face-map',['knockout', 'text!json/svg-headers.json'], function (ko, jsonText) {
    function FontFaceMap() {
        var json = JSON.parse(jsonText);
        if (!FontFaceMap.prototype.fontMap) {
            let map = new Map();
            Object.values(json).forEach((v) => {
                if (!map.has(v.font))
                    map.set(v.font, ko.observable(undefined));
            });
            FontFaceMap.prototype.fontMap = map;
        }
        this.fontMap = FontFaceMap.prototype.fontMap;
    }
    return new FontFaceMap().fontMap;
});

define('text!templates/page-body.html',[],function () { return '<iat-header params=\'logoImageHeight : logoImageHeight, displaySections: display\'></iat-header>\n\n<div id="pageContentWrapper" data-bind="style : { top : logoImageHeight() }, descendantsComplete : onDescendantsComplete">\n    <menu-bar style="width: 100%; position: sticky; top: 0px; z-index: 100;" params=\'headerHeight : logoImageHeight(), height : 60, display : display\'></menu-bar>    \n    <div id="pageContent" data-bind="if : display().page === \'page\'">\n        <page-content params=\'display : display\'></page-content>\n    </div>\n    \n    <div class="manualContent" data-bind="if : display().page === \'manual\'">\n        <manual-wrapper params="display : display"></manual-wrapper>\n    </div>\n</div>\n';});

define('modules/page-body',['knockout', 'modules/font-face-map', 'text!templates/page-body.html', 'text!json/page-sections.json'],
    function (ko, fontMap, htmlString, sectionsJson) {
        function PageBody() {
            var self = this;
            self.fontMap = fontMap;
            self.sections = JSON.parse(sectionsJson);
            self.logoImageHeight = ko.observable(0);
            self.isPoppingState = false;
            let search = new URLSearchParams(window.location.search);
            self.display = ko.observable({ page: "page", section: null });
            self.display.subscribe((newVal) => {
                if (!self.isPoppingState) {
                    window.history.pushState(newVal, document.title);
                } 
                self.isPoppingState = false;
            });
            window.onpopstate = (evt) => {
                self.isPoppingState = true;
                self.display(evt.state);
            };
            window.history.pushState({ page : 'page' }, document.title);
            self.scrollWidth = self.getScrollBarWidth();
            self.descendantsComplete = ko.observable(false);
            self.currentPage = self.display().currentPage;
            self.display.subscribe(function (newVal) {
                if (!newVal.section || (newVal.page === 'manual')) {
                    window.scrollTo(0, 0);
                }
                else if ((newVal.page === "page") && (self.currentPage === "page")) {
                    window.scrollTo(0, document.getElementById(newVal.section).offsetTop + document.getElementById("headerWrapper").offsetHeight - 2 *
                        document.getElementById("mainMenuBarWrapper").offsetHeight);
                } 
                self.currentPage = newVal.page;
            });
            self.currentPage = "page";
            if (search.has("page") && search.has("section")) {
                let page = search.get("page");
                let section = search.get("section");
                if ((page === 'page') || (page === 'manual')) {
                    let validSections = [];
                    self.sections.pageSections.forEach(s => validSections.push(s.id));
                    self.sections.manual.forEach(s => validSections.push(s.component));
                    if (validSections.find((s) => { return s === section; }))
                        self.display( { page : page, section : section });
                } else if ((page === 'page') && !section) 
                    self.display( { page : 'page', section : null });
            }
            self.onDescendantsComplete = self._onDescendantsComplete.bind(self);
        }

        PageBody.prototype.menuLoaded= function () {
//            document.querySelector("div#pageContentWrapper div.manualContent").style.width = menuWidth.toString() + 'px';
        };


        PageBody.prototype._onDescendantsComplete = function () {
            let self = this;
            require(['https://use.typekit.net/sra2zjj.js'], function () {
                Typekit.load({
                    async: true,
                    active: function () {
                        document.fonts.onloadingdone = () => {
                            for (const k of self.fontMap.keys()) {
                                var loopSelf = {};
                                loopSelf.k = k;
                                loopSelf.tk = k.replace(/^([0-9]+\s+[0-9]+[A-Za-z]+\s+)(.+)$/, "$1tk-$2");
                                loopSelf.kPromise = document.fonts.load(loopSelf.k);
                                loopSelf.tkPromise = document.fonts.load(loopSelf.tk);
                                loopSelf.myPromise = Promise.resolve(loopSelf).then(l => l.tkPromise.then(() => l)).then((l) => l.kPromise.then(() => l)).then((l) => {
                                    self.fontMap.get(l.k)(l.k);
                                });
                            }
                        };
                    }
                });
                document.dispatchEvent(new Event("descendantsComplete"));
            });
             let lastWidth = null;
            let resizeFunc = rect => {
                if (lastWidth === rect.width) 
                    return;
               //let elem = document.getElementById('pageContentWrapper');
               if (screen.availWidth > screen.availHeight) {
                   document.body.style.width = (rect.width > 1200 ? 1200 : rect.width).toString() + 'px';
               } else {
                   document.body.style.width = rect.width.toString() + "px";
               }
               lastWidth = rect.width;
            };
/*            let observer = new ResizeObserver(es => {
                es.forEach(e => resizeFunc(e.contentRect));
            });
            observer.observe(document.getElementById('mainMenuButtonWrapper')); */
            resizeFunc({ width : 1200 });
        };

        PageBody.prototype.getScrollBarWidth = function () {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.overflow = "scroll";
            outer.style.msOverflowStyle = "scrollbar";
            document.body.appendChild(outer);

            var inner = document.createElement("div");
            outer.appendChild(inner);
            var scrollWidth = outer.offsetWidth - inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return scrollWidth;
        };


        return {
            viewModel: PageBody,
            template: htmlString
        };
    });

define('text!templates/page-content.html',[],function () { return '<div data-bind="foreach: pageContent">\n    <div class="pageContent" data-bind="attr : { id : id }, component: { name : componentName, params : { id : id, display : $parent.display } }"></div>\n</div>';});

define('modules/page-content',['knockout', 'text!templates/page-content.html', 'text!json/page-sections.json'], function (ko, htmlString, sectionsJSON) {

    function PageContent(params) {
        var self = this;
        self.display = params.display;
        self.display.subscribe((val) => {
            if (!val.section)
                window.scrollTo(0, 0);
            else if (val.page === 'page') {
                window.scrollTo(0, document.getElementById(val.section).offsetTop -
                document.getElementById("headerWrapper").querySelector("div.highRes").offsetHeight + window.innerHeight);
            }
            else {
                window.scrollTo(0, 0);
            }
        });
        self.pageContent = ko.observableArray(JSON.parse(sectionsJSON).pageSections);
    }

    PageContent.prototype.koDescendantsComplete = function (node) {
        var self = this;
        if ((self.display().section === null) || (self.display().section === undefined))
            window.scrollTo(0, 0);
        else
            window.scrollTo(0, document.getElementById(self.display().section).offsetTop -
                    document.getElementById("mainMenuBarWrapper").offsetHeight);
        window.addEventListener("scroll", self.scrollHandler, false);
        self.display.subscribe(function (newVal) {
            if (newVal.page !== "page")
                window.removeEventListener("scroll", self.scrollHandler);
        });
    };

    return {viewModel: PageContent, template: htmlString};
});

define('text!templates/sample-test.html',[],function () { return '<div class="sampleTest" data-bind="attr : { id : id }, childrenComplete : childrenComplete">\n    <div class="header" data-bind="foreach: testData.titleLines">\n        <svg-header params="caption : $data, template : $parent.headerTemplate, display : $parent.display"></svg-header>\n    </div>\n    <div class="sampleTestSlide" data-bind="event : { mouseover : onMouseOver, mouseout : onMouseOut }">\n        <a data-bind="attr : { href : testData.url }">\n            <canvas class="sample-test-canvas" data-bind="attr : { id : canvasId, width : slideWidth, height : slideHeight }"></canvas>\n        </a>\n    </div>\n    <div class="sampleTestDescription" data-bind="foreach: { data : testData.descriptionParagraphs, as : \'paragraph\' }">\n        <p data-bind="text : paragraph"></p>\n    </div>\n</div>';});

define('modules/sample-test',['knockout', 'text!templates/sample-test.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerJson) {

    function SampleTest(params) {
        SampleTest.Count++;
        var self = this;
        self.display = params.display;
        self.id = "sample-test-" + SampleTest.Count.toString();
        self.testData = params.testData;
        self.slideWidth = params.slideWidth;
        self.slideHeight = self.testData.height * self.slideWidth / self.testData.width;
        self.images = [];
        self.presentationNum = -1;
        self.isMouseOver = false;
        self.slide = new Image();
        self.headerTemplate = JSON.parse(headerJson).sampleTestHeader;
        self.playPresentation = self._playPresentation.bind(self);
        self.onMouseOver = self._onMouseOver.bind(self);
        self.onMouseOut = self._onMouseOut.bind(self);
        self.canvasId = self.id + "-canvas";
        self.tLastPresentation = -1;
        self.loadImages = self._loadImages.bind(self);
        self.childrenComplete = self._childrenComplete.bind(self);
        self.testLoaded = params.testLoaded;
    }

    SampleTest.Count = 0;

    SampleTest.prototype._childrenComplete = function() {
        let self = this;
        self.canvas = document.getElementById(self.canvasId);
        self.ctx = self.canvas.getContext("2d");
        self.slide.onload = () => {
            self.ctx.drawImage(self.slide, 0, 0, self.canvas.width, self.canvas.height);
        };
        self.slide.src = self.testData.slideSrc;
        self.elem = document.getElementById(self.id);
        self.elem.addEventListener("mouseout", self.onMouseOut);
        self.elem.addEventListener("mouseover", self.onMouseOver);
        self.elem.addEventListener("mouseover", self.loadImages);
        self.testLoaded(document.getElementById(self.id));
    };

    SampleTest.prototype._loadImages = function () {
        var self = this;
        self.elem.removeEventListener("mouseover", self.loadImages);
        self.testData.images.forEach(function (imgData) {
            var img = new Image();
            img = new Image();
            img.src = "images/tests/" + self.testData.name + "/" + imgData.filename;
            self.images.push(img);
        });
        window.requestAnimationFrame((t) => self.playPresentation(t));
    };

    SampleTest.prototype._descendantsComplete = function (node) {
        var self = this;
        self.elem = node;
    };

    SampleTest.prototype._onMouseOver = function () {
        var self = this;
        self.isMouseOver = true;
        window.requestAnimationFrame(function (t) {
            self.playPresentation(t);
        });
    };

    SampleTest.prototype._onMouseOut = function () {
        var self = this;
        self.isMouseOver = false;
        if (self.ctx !== undefined)
            self.ctx.drawImage(self.slide, 0, 0, self.canvas.width, self.canvas.height);
    };

    SampleTest.prototype._playPresentation = function (t) {
        var self = this;
        if (!self.isMouseOver) {
            self.tLastPresentation = -1;
            return;
        }
        if (t - self.tLastPresentation > 250) {
            var currBlock = 0;
            var presNum = Math.floor(Math.random() * 90);
            if (presNum < 10)
                currBlock = 0;
            else if (presNum < 20)
                currBlock = 1;
            else if (presNum < 30)
                currBlock = 2;
            else if (presNum < 50)
                currBlock = 3;
            else if (presNum < 60)
                currBlock = 4;
            else if (presNum < 70)
                currBlock = 5;
            else if (presNum < 90)
                currBlock = 6;
            else {
                currBlock = 0;
                self.presentationNum = 0;
            }
            var imageIds = [self.testData.blocks[currBlock].leftKey, self.testData.blocks[currBlock].rightKey, self.testData.blocks[currBlock].instructions,
            self.testData.blocks[currBlock].stimuli[Math.floor(Math.random() * self.testData.blocks[currBlock].stimuli.length)]];
            if (imageIds.every(function (id) {
                if (self.images[id] === undefined)
                    return false;
                return self.images[id].complete;
            })) {
                var offscreenCanvas = document.createElement("canvas");
                offscreenCanvas.width = self.testData.width;
                offscreenCanvas.height = self.testData.height;
                var offscreenCtx = offscreenCanvas.getContext("2d");
                offscreenCtx.fillStyle = self.testData.backColor;
                offscreenCtx.fillRect(0, 0, self.testData.width, self.testData.height);
                imageIds.forEach(function (id) {
                    var imageData = self.testData.images[id];
                    offscreenCtx.drawImage(self.images[id], imageData.x, imageData.y, imageData.width, imageData.height);
                });
                self.ctx.drawImage(offscreenCanvas, 0, 0, self.testData.width, self.testData.height, 0, 0, self.slideWidth, self.slideHeight);
                self.presentationNum = presNum + 1;
            } else if ((self.presentationNum === -1) && (self.slideImage)) {
                self.ctx.drawImage(self.slideImage, 0, 0, self.slideImage.width, self.slideImage.height, 0, 0, self.slideWidth, self.slideHeight);
            }
            self.tLastPresentation = t;
        }
        window.requestAnimationFrame(function (t) {
            self.playPresentation(t);
        });
    };

    return { viewModel: SampleTest, template: htmlString };
});

define('text!templates/sample-tests.html',[],function () { return '<div data-bind="childrenComplete : function() { testLoaded(document.getElementById(\'sampleTests\')); }">\n<svg-header params="caption : \'Sample Tests\', template : headerTemplate, display : display"></svg-header>\n<div id="sampleTests" data-bind="foreach: { data : sampleTestData, as : \'test\' }">\n    <sample-test params="testData : test, slideWidth : 450, display : $component.display, testLoaded : $component.testLoaded"></sample-test>\n</div>\n</div>';});


define('text!json/sample-tests.json',[],function () { return '{\n    "slideWidth" : 400, "tests" : [ \n        "json/sample-tests/flower-insect.json", "json/sample-tests/marketing.json", "json/sample-tests/self-esteem.json", \n            "json/sample-tests/beauty-intelligence.json", "json/sample-tests/swift.json"\n    ]\n}';});

define('modules/sample-tests',['knockout', 'text!templates/sample-tests.html', 'text!json/svg-headers.json', 'text!json/sample-tests.json'], function (ko, htmlString, headerTemplates, testsJson) {
    function SampleTests(params) {
        var self = this;
        self.display = params.display;
        self.sampleTestJson = JSON.parse(testsJson);
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.sampleTestData = ko.observableArray([]);
        self.sampleTestJson.tests.forEach(function (elem) {
            require(["text!" + elem], function (json) {
                self.sampleTestData.push(JSON.parse(json));
            });
        });
        if (!ko.components.isRegistered("sample-test"))
            ko.components.register("sample-test", {
                require: "modules/sample-test"
            });
        self.resizeObserver = new ResizeObserver(elems => {
            if (elems.length > 0)
                self.calculateHeight();
        });
        const mutationObserver = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if ((mutation.type == "subtree") || (mutation.type == "childList")) {
                    for (const node of addedNodes) {
                        resizeObserver.observe(node);
                    }
                }
            }
        });
        self.testLoaded = ((elem) => {
            self.calculateHeight();
            self.resizeObserver.observe(elem);
        }).bind(self);
    }

    SampleTests.prototype.calculateHeight = () => {
        let testNode = document.getElementById("sampleTests");
        if (testNode === null)
            return;
        let width = testNode.clientWidth;
        let tests = testNode.querySelectorAll("sample-test");
        if (tests.length === 0)
            return;
        let numTests = tests.length;
        let testWidth = tests[0].clientWidth;
        let nCols = Math.floor(width / testWidth);
        let nRows = Math.ceil(numTests / nCols);
        let height = 0;
        let ctr = 0;
        let colHeight = 0;
        while (ctr < tests.length) {
            colHeight = 0;
            do {
                colHeight += tests[ctr++].offsetHeight + 33;
            } while ((ctr % nRows !== 0) && (ctr < tests.length));
            if (colHeight > height)
                height = colHeight;
        }
        testNode.style.maxHeight = height.toString() + 'px';
        testNode.style.height = height.toString() + "px";
    };

    return {
        viewModel: SampleTests,
        template: htmlString
    };
});

define('text!templates/section-the-software.html',[],function () { return '<div id="sectionSoftware" style="display: flex; flex-flow: column nowrap;">\n    \n<svg-header params="caption : \'The Software\', template : headerTemplate, display : display"></svg-header>\n\n<slideshow-canvas params="id : \'section-the-software-slideshow\', width : 1010, height : 726, loadPhotos : $root, display : display"></slideshow-canvas>\n<div>\n    <p>The software only supports the 7-Block IAT format developed by Greenwald. It allows you\n        to customize the layout of your IAT, choose either words or images in your response keys, and create instruction\n        blocks to precede any or all sections of the test. It also allows you to design questionnaires to precede and\n        follow your IAT. For the more advanced user, it is possible to link IAT results with data gathered on other\n        web sites. For a complete list of features, click the <span class="buttonReference">Manual</span> button above or, \n        for quick reference, click one of the links on the left below to learn more. If you just want to download it, \n        click the <span class="buttonReference">Download</span> button above.</p>\n</div>\n<div class="featureContainer">\n    <features></features>\n</div>\n</div>';});

define('modules/section-the-software',['knockout', 'text!templates/section-the-software.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerTemplates) {
    function TheSoftware(params) {
        var self = this;
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.display = params.display;
        if (!ko.components.isRegistered("slideshow-canvas"))
            ko.components.register("slideshow-canvas", {require: "modules/slideshow-canvas"});
        if (!ko.components.isRegistered("features"))
            ko.components.register("features", {require: "modules/features"});
    }

    return {viewModel: TheSoftware, template: htmlString};
});

define('text!templates/section-the-iat.html',[],function () { return '<svg-header params="caption : \'The IAT\', template : headerTemplate, display : display"></svg-header>\n<div>\n    <div>\n        <p>The Implicit Association Test (IAT) offers two important tools. One is that it offers a test \n            administrator the capacity to measure attitudes and biases that a subject is not willing to admit. Perhaps more \n            interesting is the second tool. The IAT offers the test administrator the ability to measure attitudes and biases \n            of which the test taker might not be aware.</p>\n        <p>Beyond determining whether John or Mary is a pedophile or a bigot, it can be used to measure thought processes on an\n            unconscious level. It can determine how people think or feel about things in an intuitive way that doesn\'t involve rational thought. These\n            invisible thought processes have been shown to predict or account for phenomena in ways that other measurements cannot.</p>\n        <p>So how does it work? The concept is simple when grasped but not the easiest to explain. An IAT measures bias between\n            pairings of words or images. For instance, suppose you wanted to find out if John is a bigot. You might try to determine\n            whether he associates the word <span class="hilight">Black</span> with the word <span class="hilight">Good</span>\n            or the word <span class="hilight">Bad</span>.</p>\n    </div>\n    <svg-header params="caption : \'Bias measured by paired values\', template : subHeaderTemplate, display : display"></svg-header>\n    <div id="mlkSample">\n        <div class="relativeZero">\n            <div class="leftResponseKey">\n                <picture>\n                    <source srcset="images/black-good.webp" type="image/webp">\n                    <source srcset="images/black-good.png" type="image/png">\n                    <img src="images/black-good.png" />\n                </picture>\n                <img src="/images/underline-animation.gif" />\n            </div>\n            <div class="rightResponseKey">\n                <picture>\n                    <source srcset="images/white-bad.webp" type="image/webp">\n                    <source srcset="images/white-bad.png" type="image/png">\n                    <img src="images/white-bad.png" />\n                </picture>\n                <img src="/images/underline-animation.gif" />\n            </div>\n            <picture class="stimulus">\n                <source srcset="images/mlk.webp" type="image/webp" />\n                <source srcset="images/mlk.jpg" type="image/jpeg" />\n                <img src="images/mlk.jpg" />\n            </picture>\n        </div>\n    </div>\n    <div>\n        <p>Here you see a picture of Dr. Martin Luther King Jr with two response keys. The subject is asked to categorize\n            this picture as being either of a black person or a white person by selecting <span class="hilight">Black</span>\n            or <span class="hilight">White</span>.</p>\n    </div>\n    <svg-header params="caption : \'The continuum end\', template : subHeaderTemplate, display : display"></svg-header>\n    <div id="brokenHeartSample">\n        <div class="relativeZero">\n            <div class="leftResponseKey">\n                <picture>\n                    <source srcset="images/black-bad.webp" type="image/webp">\n                    <source srcset="images/black-bad.png" type="image/png">\n                    <img src="images/black-bad.png" />\n                </picture>\n                <img src="/images/underline-animation.gif" />\n            </div>\n            <div class="rightResponseKey">\n                <picture>\n                    <source srcset="images/white-good.webp" type="image/webp">\n                    <source srcset="images/white-good.png" type="image/png">\n                    <img src="images/white-good.png" />\n                </picture>\n                <img src="/images/underline-animation.gif" />\n            </div>\n            <picture class="stimulus">\n                <source srcset="images/heart-broken.webp" type="image/webp" />\n                <source srcset="images/heart-broken.png" type="image/png" />\n                <img src="images/heart-broken.png" />\n            </picture>\n        </div>\n    </div>\n    <div>\n        <p>Here you see a broken heart that is to be placed in the category in the upper-right corner as "Bad." This is\n            the cornerstone of IAT design, to devise two concepts such as "black" and "white" and then two words that lie at polar\n            opposite ends of the same continuum. This way, you are able to determine which end of the continuum the subject associates\n            each concept with.</p>\n    </div>\n    <svg-header params="caption : \'The 7-block design\', template : subHeaderTemplate, display : display"></svg-header>\n    <div>\n        <p>Each IAT is divided into seven blocks. The first two blocks supply a response key that contains only the\n            concept words or only the continuum words. For instance, the first block might have the response value <span class="hilight">Black</span> in the\n            upper-left corner and <span class="hilight">White</span> in the upper-right corner. The subject would be shown faces of black and white people and\n            asked to categorize them by pressing keys on their keyboard. Then the second block would have <span class="hilight">Good</span> in the upper-left corner\n            and <span class="hilight">Bad</span> in the upper-right corner. For this block, the subject would see stimuli &ndash; words or images &ndash; that are categorically\n            good or bad.</p>\n        <p>Blocks three and four appear identical to the test taker and are only regarded as separate for the purpose of\n            scoring the test. In these blocks, the two response keys from blocks one and two are combined to form the response keys\n            you saw on the previous screen. During these blocks, the subject would be shown pictures of white and black people as well\n            as stimuli that are categorically good or bad. The idea is that if the subject associates <span class="hilight">Good</span> with \n            <span class="hilight">Black</span>, he will\tprovide correct responses faster for those stimuli.</p>\n        <p>Block five is largely a rehash of block two, with the response keys transposed from left to right. Blocks\n            six and seven consist of the combined response keys as did blocks three and four, however the pairings are reversed, so\n            <span class="hilight">Black</span> would appear with <span class="hilight">Bad</span> and <span class="hilight">White</span> \n            would appear with <span class="hilight">Good</span>. This provides a counter-point to the measurements\n            made in blocks three and four.</p>\n    </div>\n</div>';});

define('modules/section-the-iat',['knockout', 'text!templates/section-the-iat.html', 'text!json/svg-headers.json'], function(ko, htmlString, headerTemplates) {
	function SectionTheIAT(params)
        {
            var self = this;
            self.templates = JSON.parse(headerTemplates);
            self.display = params.display;
            self.headerTemplate = self.templates.sectionHeader;
            self.subHeaderTemplate = self.templates.subHeader;
        }
	
	return { viewModel : SectionTheIAT, template : htmlString };
});

define('text!templates/section-commercial-use.html',[],function () { return '<svg-header params="caption: \'Commercial Use\', template : headerTemplate, display : display"></svg-header>\n<p><span class="hilight">IAT Design</span> contains a handful of useful features for commercial use, \n    including the faculties to track test takers across other methods of data collection, retrieve data \n    for individual single test takers via a direct connection to the server as opposed to downloading data \n    with the client program and exporting it to an Excel file before it is accessible. Additionally, \n    though it is not possible to host IATs on your own server, it possible to keep your own domain in the \n    address bar. Below are registration forms for these features.</p>\n';});

define('modules/section-commercial-use',['knockout', 'text!templates/section-commercial-use.html', 'text!json/svg-headers.json'], function(ko, htmlString, headerTemplates) {
    function CommercialUse(params) {
        var self = this;
        var svgJSON = JSON.parse(headerTemplates);
        self.display = params.display;
        self.headerTemplate = svgJSON.sectionHeader;
        return this;
    }
    
    CommercialUse.prototype.submitCorsRequest = function() {
        var self = this;
        var form = document.getElementById("corsRegistration");
        self.corsDomain(form.namedItem("domain").value);
        self.corsAllowHttp(form.namedItem("allowHttp").value);
        var formData = new FormData(form);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if ((this.readystate === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                if (response.submissionErrors.length > 0) {
                    self.corsSubmissionErrors(response.submissionErrors);
                    return;
                }
                self.corsForm("corsConfirmation");
            } else if (this.status === 200) {
                self.corsErrorId(this.getResponseHeader("Error-Id"));
                self.corsForm("error");
            }
        };
        ajax.open("POST", "/FormSubmissions/CorsRegistration", true);
        ajax.setRequestHeader("accept", "text/json");
        ajax.send(formData);
    };

    return { viewModel : CommercialUse, template : htmlString };
});

define('text!templates/section-contact.html',[],function () { return '<svg-header params="caption : \'Contact\', template : headerTemplate, display : display"></svg-header>\n<div>\n    <p>If you have any questions, inquiries, concerns. If you encounter any bugs. Even if you &quot;just need someone to talk to&quot;\n    or need relationship advice. If you want to argue politics and religion. If there\'s something you\'d like help with, I want to try\n    to provide that help or explain why I cannot or, in some cases, will not. Please contact me at the address below. Incidentally, my name\'s Michael.</p>\n</div>\n<div id="contactEmail">\n<picture>\n    <source srcset="images/email.webp" type="image/webp">\n    <source srcset="images/email.png" type="image/png">\n    <img src="images/email.png" />\n</picture>\n</div>\n';});

define('modules/section-contact',['knockout', 'text!templates/section-contact.html', 'text!json/svg-headers.json'], function(ko, htmlString, svgHeadersJson) {
   function SectionContact(params) {
       var self = this;
       self.headerTemplate = JSON.parse(svgHeadersJson).sectionHeader;
       self.display = params.display;
   } 

    return { viewModel : SectionContact, template : htmlString };
});

define('text!templates/section-cors.html',[],function () { return '<!-- ko ifnot: corsForm() === \'corsConfirmation\' -->\n<svg-header\n    params="caption : \'Maintaining Your Website Domain Name\', template : sectionHeaderTemplate, display : display">\n</svg-header>\n<p>If you would like to have your website URL appear in the browser bar as opposed to <span class="hilight">\n    www.iatsoftware.net</span>, this can be accomplished by setting up a forward proxy on your server and \n    registering your domain below. A sample forward proxy setup for the Apache web server can be found \n    <span class="hilightHover" data-bind="event : { click : () => { navigate(\'manual\', \'manual-cors\'); } }">here</span>.</p>\n<!-- /ko -->\n<div data-bind="if : corsForm() === \'corsRegistration\'">\n    <form id="cors-registration">\n        <p>To preclude distribution of tests to third parties, you may only register one domain with your product\n            key. If\n            you have already registered a domain, it will be replaced with the one you supply below.</p>\n        <div class="fieldSummary">\n            <h2>Field Summary</h2>\n            <p><span class="fieldName">product key &ndash;</span> This is accessible via the\n                Help&mdash;&gt;About menu in the test design program</p>\n            <p><span class="fieldName">your domain &ndash;</span> The domain name you would like to forward\n                proxy from.\n                Exclude &quot;www.&quot; and &quot;https://&quot; and include only the host name,\n                omitting any path information.</p>\n            <p><span class="fieldName">allow http&ndash;</span> By default, the connection to your server\n                from the test taker\'s browser must be secure. Click this box to allow non-secure HTTP\n                connections.</p>\n            </ul>\n        </div>\n        <div class="errorDiv" data-bind="if : hasErrors()">\n            <svg-header params="caption: \'Errors in Submission\', template: errorCaptionTemplate, display : display">\n            </svg-header>\n            <div data-bind="foreach : { data : errors().filter(e => e.field === \'global\'), as : \'error\' }">\n                <h2 class="globalErrorMessage" data-bind=\'text : error.message\'></h2>\n            </div>\n        </div>\n        <div class="formDataGrid">\n            <!-- ko foreach: errors().filter(e => e.field === \'productKey\') -->\n            <p class="errorMessage" data-bind="text: $data.message"></p>\n            <!-- /ko -->\n            <p class="leftInputLabel">Product key:</p>\n            <input type="text" name="productKey" />\n            <!-- ko foreach: errors().filter(e => e.field === \'domain\') -->\n            <p class="errorMessage" data-bind="text: $data.message"></p>\n            <!-- /ko -->\n            <p class="leftInputLabel">Your domain:</p>\n            <input type="text" name="domain" />\n            <input type="checkbox" name="http" />\n            <p class="rightInputLabel">Allow HTTP</p>\n            <!-- ko ifnot: posting() -->\n            <input type="button" value="Submit" data-bind="click: submitCorsRequest" />\n            <!-- /ko -->\n            <!-- ko if: posting() -->\n            <span class="pleaseWait" data-bind="text : pleaseWaitText()"></span>\n            <!-- /ko -->\n        </div>\n    </form>\n</div>\n<!-- ko if: corsForm() === "corsConfirmation" -->\n<div data-bind=\'descendantsComplete : scrollToCorsConfirmation\' id="corsConfirmation">\n    <svg-header params="caption: \'Cors Registration Successful\', template: attentionTemplate, display : display">\n    </svg-header>\n    <p><span class="hilight">(www.)</span><span class="hilight" data-bind=\'text : corsDomain()\'></span> and all\n        paths on that\n        domain are now eligible for forward proxying to tests on <span class="hilight">iatsoftware.net</span>.\n        <!-- ko if: httpAllowed() -->\n        Both secure (HTTPS) and non-secure (HTTP) connections from the test taker will be permitted upon the next\n        server reboot.\n        <!-- /ko -->\n        <!-- ko ifnot: httpAllowed() -->\n        Only secure (HTTPS) connects from the test taker will be permitted upon the next server reboot.\n        <!-- /ko -->\n        Server reboots occur weekly. Please contact me if you require one. For an example forward proxy setup\n        using the Apache web server, consult the documentation\n        <span class=\'hilightHover\'\n            data-bind=\'event : { click : () => { navigate("manual", "manual-cors"); } }\'>here</span>.</p>\n</div>\n<!-- /ko -->\n<div data-bind="if : corsForm() === \'error\'">\n    <server-error-notification params="errorId : corsErrorId()"></server-error-notification>\n</div>';});

define('modules/section-cors',['knockout', 'text!templates/section-cors.html', 'text!json/svg-headers.json'], function(ko, htmlString, svgJson) {
   
    function Cors(params) {
        var self = this;
        var json = JSON.parse(svgJson);
        self.display = params.display;
        self.navigate = self._navigate.bind(self);
        self.sectionHeaderTemplate = json.subHeader;
        self.errorCaptionTemplate = json.errorCaption;
        self.attentionTemplate = json.attentionHeader;
        self.registrationResponse = ko.observable(null);
        self.errorId = ko.observable(null);
        self.corsForm = ko.observable("corsRegistration");
        self.corsDomain = ko.observable();
        self.httpAllowed = ko.observable();
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.errors = ko.observableArray([]);
        self.hasErrors = ko.observable(false);
        self.pleaseWaitText = ko.pureComputed(function() {
           var text = "Please wait";
           for (var ctr = 0; ctr < self.waitDots(); ctr++)
               text += ". ";
           return text;
        });
        return this;
    }
    
    Cors.prototype._navigate = function(p, s) {
        this.display({ page : p, section : s });
    }
    Cors.prototype.submitCorsRequest = function() {
        var self = this;
        self.waitDotInterval = window.setInterval(function() {
            if (self.waitDots() < 3)
                self.waitDots(self.waitDots() + 1);
            else
                self.waitDots(0);
        }, 300);
        self.posting(true);
        var formData = new FormData(document.getElementById("cors-registration"));
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState === 4) {
                self.errors([]);
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
            }
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
                self.errors([]);
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                self.hasErrors(response.hasErrors);
                if (response.hasErrors) {
                    response.globalErrors.forEach((ge) => self.errors.push({ field : 'global', message : ge }));
                    Object.keys(response.fieldErrors).forEach((k) => self.errors.push({ field : k, message : response.fieldErrors[k] }));
                    return;
                }
                self.corsForm("corsConfirmation");
                self.corsDomain(formData.get("domain"));
                self.httpAllowed(formData.has("http"));
            } else if (this.readyState === 4) {
                self.errorId(this.getResponseHeader("Error-Id"));
            }
        };
        window.setTimeout(function() {
            ajax.open("POST", "/FormSubmissions/CorsRegistration", true);
            ajax.setRequestHeader("accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    Cors.prototype.scrollToCorsConfirmation = () => {
        window.scrollTo(0, document.getElementById("corsConfirmation").offsetTop);
    };
    
    return { viewModel : Cors, template : htmlString };
});

define('text!templates/section-download.html',[],function () { return '<div data-bind="ifnot: errorId()">\n    <div data-bind="component : { name : form().component, params : { state : state, formId : form().component, display : display }}"></div>\n</div>\n<div data-bind="if : errorId()">\n    <server-error-notification params="errorId : errorId"></server-error-notification>\n</div>';});

define('modules/section-download',['knockout', 'text!templates/section-download.html', 'text!json/svg-headers.json'], function (ko, htmlString, headerTemplates) {

    function SectionDownload(params) {
        var self = this;
        self.id = params.id;
        self.display = params.display;
        self.formStates = [];
        self.headerTemplate = JSON.parse(headerTemplates).sectionHeader;
        self.headerCaptions = ["Download", "Registered?", "Downloading...", "eMail Sent"];
        self.formStates["download-form"] = {caption: "Download", component: "download-form"};
        self.formStates["already-registered-form"] = {caption: "Registered?", component: "already-registered-form"};
        self.formStates["download-notification"] = {caption: "Downloading...", component: "download-notification"};
        self.formStates["emailing-product-key-notification"] = {caption: "eMail Sent", component: "emailing-product-key-notification"};
        self.formStates["error"] = {caption: "Server Error", component: "server-error-notification"};
        self.errorId = ko.observable(null);
        self.state = ko.observable({downloaded: false, productKeySent: false });
        self.form = ko.observable(self.formStates["download-form"]);
        self.form.subscribe(function () {
            self.display({ page : "page", section : self.id });
        });
        self.state.subscribe(function (newVal) {
            switch (newVal.action) {
                case "register" :
                    self.form(self.formStates["download-form"]);
                    break;
                case "client-exists" :
                    self.form(self.formStates["already-registered-form"]);
                    break;
                case "user-exists" :
                    self.form(self.formStates["already-registered-form"]);
                    break;
                case "already-registered" :
                    self.form(self.formStates["already-registered-form"]);
                    break;
                case "download" :
                    self.form(self.formStates["download-notification"]);
                    break;
                case "initial-download" :
                    self.form(self.formStates["download-notification"]);
                    break;
                case "emailing-product-key" :
                    self.form(self.formStates["emailing-product-key-notification"]);
                    break;
                case "organization-download" :
                    self.form(self.formStates["download-notification"]);
                    break;
                case "error" :
                    self.errorId(self.state().errorId);
                    self.form(self.formStates["error"]);
                    break;
            }
        });
        self.caption = ko.pureComputed(function () {
            return self.form().caption;
        });
        if (!ko.components.isRegistered("download-form"))
            ko.components.register("download-form", {require: "modules/download-form"});
        if (!ko.components.isRegistered("already-registered-form"))
            ko.components.register("already-registered-form", {require: "modules/already-registered-form"});
        if (!ko.components.isRegistered("download-notification"))
            ko.components.register("download-notification", {require: "modules/download-notification"});
        if (!ko.components.isRegistered("emailing-product-key-notification"))
            ko.components.register("emailing-product-key-notification", {require: "modules/emailing-product-key-notification"});
        if (!ko.components.isRegistered("server-error-notification")) {
            ko.components.register("server-error-notification", {require: "modules/server-error-notification"});
        }
    }

    return {viewModel: SectionDownload, template: htmlString};
});

define('text!templates/section-oauth.html',[],function () { return '<svg-header params="caption: \'Direct Data Retrieval\', template : sectionHeaderTemplate, display : display"></svg-header>\n<p>If you want to integrate IATs with another application, it will likely be necessary to retrieve\n    test results on-the-fly. Traditionally, test results are downloaded from within the test design program\n    but this is insufficient for, say, a mobile credit application application that includes an IAT. The server\n    supports an OAuth interface that makes this possible. Depending on demand, a Java SDK might become available\n    as well.</p>\n<p>Once authentication is complete, individual result sets may be retrieved. A prerequisite is that you include\n    a &quot;token&quot; in your test during upload. A token is a query string parameter that you include\n    in your IAT link that uniquely identifies each test-taker. For more information on tokens, <span\n        class="hilightHover" data-bind=\'event : { click : () => { navigate("manual", "manual-tokens"); } }\'>click\n        here</span>. When you retrieve data, you supply the token\n    value for the result set you desire and your IAT password, and the result data is returned in JSON in a\n    small handful of formats you may select from. For the ins and outs of the process, as well as a step-by-step\n    OAuth example, please refer to the manual <span class="hilightHover"\n        data-bind="event : { click : () => { navigate(\'manual\', \'manual-oauth\'); } }">here</span>.</p>\n<p>When you are ready to begin, upload your test then register it for OAuth data retrieval with the form below. You may\n    modify\n    the redirection URL for an existing OAuth registration by supplying the information below. You may not regenerate\n    your client id or client secret once your test has been registered. If your client secret has been compromised,\n    contact me at <span class="hilight">michael@iatsoftware.net</span>.</p>\n<div data-bind="if : oauthForm() === \'oauthRegistration\'">\n    <form id="oauthRegistration">\n        <p>Complete the following form to enable result retrieval via an application other than <span\n                class="hilight">IAT Design</span>.\n            You will be issued a client id and client secret that you must use when retrieving data. If you have lost\n            your client id\n            or client secret, submitting this form again will retrieve them for you. It is highly recommended that you\n            <span class="hilightHover"\n                data-bind="event : { click : () => { navigate(\'manual\', \'manual-oauth\'); } }">consult the\n                documentation</span> for the mechanics of data retrieval\n            using OAuth to ensure it meets your needs and also to understand what information is required in the form\n            below before proceeding.</p>\n        <div class="fieldSummary">\n            <h2>Field Summary</h2>\n            <p><span class="fieldName">product key &ndash;</span> This is accessible via the Help&mdash;&gt;About\n                menu in the test\n                design program</p>\n            <p><span class="fieldName">test &ndash;</span> The name of the test you are registering</p>\n            <p><span class="fieldName">password &ndash;</span> The password you selected for the test</p>\n            <p><span class="fieldName">redirect url &ndash;</span> The URL that you will be redirected back to\n                during\n                the authentication process. This should reference a domain you own. You may enter a minimal path\n                for the URL and allow redirections to explicitly specified subpaths or if you may specify a\n                unique URL. This can be modified if you have already registered your test by completing the remainder of the\n                form.</p>\n        </div>\n        <div class="errorDiv" data-bind="if : hasErrors()">\n            <svg-header params="caption: \'Errors in Submission\', template: errorCaptionTemplate, display : display">\n            </svg-header>\n            <div data-bind="foreach : { data : errors().filter(e => e.field === \'global\'), as : \'error\' }">\n                <h2 class="globalErrorMessage" data-bind=\'text : error.message\'></h2>\n            </div>\n        </div>\n        <div class="formDataGrid">\n            <!-- ko foreach: errors().filter(e => { return e.field === \'productKey\' }) -->\n            <p class="errorMessage" data-bind="text : $data.message"></p>\n            <!-- /ko -->\n            <p class=\'leftInputLabel\'>Product key:</p>\n            <input type="text" name="productKey" />\n            <!-- ko foreach: errors().filter(e => { return e.field === \'testName\' }) -->\n            <p class="errorMessage" data-bind="text : $data.message"></p>\n            <!-- /ko -->\n            <p class=\'leftInputLabel\'>Test name:</p>\n            <input type="text" name="testName" />\n            <!-- ko foreach: errors().filter(e => { return e.field === \'password\' }) -->\n            <p class="errorMessage" data-bind="text : $data.message"></p>\n            <!-- /ko -->\n            <p class="leftInputLabel">Test password:</p>\n            <input type="text" name="password" />\n            <!-- ko foreach: errors().filter(e => { return e.field === \'redirect\' }) -->\n            <p class="errorMessage" data-bind="text : $data.message"></p>\n            <!-- /ko -->\n            <p class="leftInputLabel">Redirect URL:</p>\n            <input type="text" name="redirect" />\n            <input type="checkbox" name="subpaths" checked />\n            <p class="rightInputLabel">Allow explicit redirects to subpaths of redirection URL</p>\n            <!-- ko ifnot: posting() -->\n            <input type="button" value="Submit" data-bind="click: submitOAuthRequest" />\n            <!-- /ko -->\n            <!-- ko if: posting() -->\n            <span class="pleaseWait" data-bind="text : pleaseWaitText()"></span>\n            <!-- /ko -->\n        </div>\n    </form>\n</div>\n<div data-bind="if : oauthForm() === \'oauthConfirmation\'">\n    <form id=\'oauthConfirmation\'>\n        <div data-bind="if : registrationResponse().alreadyRegistered">\n            <p>You have already registered this test for remote data access with OAuth. Below is listed your client id\n                and client secret. If you need to change the\n                redirection URL that the server will send to your application during the first stage of authentication,\n                click the update button to do so. If you require\n                information on OAuth or the RESTful interface used to retrieve data once authentication is complete,\n                <span class="hilightHover"\n                    data-bind="event : { click : () => { navigate(\'manual\', \'manual-oauth\'); } }">click here to view the\n                    documentation</span>. Or you can contact me at\n                <span class="hilight">michael@iatsoftware.net</span>.</p>\n        </div>\n        <div data-bind="ifnot : registrationResponse().alreadyRegistered">\n            <p>Below is the client id and client secret you will use to authenticate your application with the server.\n                Also listed is the URL the server\n                will redirect your application to in the first stage of authentication. You can revisit this page to\n                change that URL later.</p>\n            <p>If you have any questions about OAuth or the RESTful interface used to retrieve data, feel free to\n                contact me at <span class="hilight">\n                    michael@iatsoftware.net</span>. I will assist you as I am able and provide links to further reading\n                material.</p>\n        </div>\n        <div class="oauthCredentials">\n            <p>client id:</p>\n            <p data-bind="text: registrationResponse().clientId"></p>\n            <p>client secret:</p>\n            <p data-bind="text: registrationResponse().clientSecret"></p>\n            <p>redirect url:</p>\n            <!-- ko if: (redirectUpdatePhase() === redirectStatus.none) || (redirectUpdatePhase() === redirectStatus.complete) -->\n            <p data-bind="text: redirect()"></p>\n            <!-- /ko -->\n            <!-- ko ifnot: (redirectUpdatePhase() === redirectStatus.none) || (redirectUpdatePhase() === redirectStatus.complete) -->\n            <input type="text" name="newRedirect" data-bind="attr : { value : redirect() }" />\n            <!-- /ko -->\n            <!-- ko if: (redirectUpdatePhase() === redirectStatus.none) || (redirectUpdatePhase() === redirectStatus.complete) -->\n            <input type="button" value=\'Change\' data-bind="click : startRedirectUpdate"></input>\n            <!-- /ko -->\n            <!-- ko if: redirectUpdatePhase() === redirectStatus.editing -->\n            <input type="button" value=\'Update\' data-bind="click : submitRedirectUpdate" />\n            <!-- /ko -->\n            <!-- ko if: redirectUpdatePhase() === redirectStatus.updating -->\n            <input type="button" value=\'Update\' disabled />\n            <!-- /ko -->\n            <!-- ko if: redirectUpdatePhase() === redirectStatus.errorState -->\n            <input type="button" value=\'Update\' data-bind="click : submitRedirectUpdate" />\n            <!-- /ko -->\n            <input type="hidden" name="clientId" data-bind=\'attr : { value : registrationResponse().clientId }\' />\n        </div>\n        <div data-bind="if : redirectUpdateError()">\n            <p style="text-align: center;" class="error" data-bind="text: redirectUpdateError()"></p>\n        </div>\n        <div data-bind="if: redirectUpdatePhase() === redirectStatus.complete">\n            <p style="text-align: center;"><span class="hilight">Your auth requests will now be directed to the URL\n                    above.</span></p>\n        </div>\n    </form>\n</div>\n<div data-bind="if : oauthForm() === \'error\'">\n    <server-error-notification params="errorId : errorId()"></server-error-notification>\n</div>';});

define('modules/section-oauth',['knockout', 'text!templates/section-oauth.html', 'text!json/svg-headers.json'], function (ko, htmlString, svgJson) {

    function OAuth(params) {
        var self = this;
        var svgTemplates = JSON.parse(svgJson);
        self.display = params.display;
        self.navigate = function (p, s) {
            self.display({ page : p, section : s });
        };
        self.errorId = ko.observable(null);
        self.sectionHeaderTemplate = svgTemplates.subHeader;
        self.errorCaptionTemplate = svgTemplates.errorCaption;
        self.oauthForm = ko.observable("oauthRegistration");
        self.errors = ko.observableArray([]);
        self.hasErrors = ko.observable(false);
        self.registrationResponse = ko.observable(null);
        self.redirect = ko.observable();
        self.redirectUpdateError = ko.observable();
        self.redirectStatus = { none : 0, editing : 1, updating : 2, complete : 3, errorState : 4 };
        self.redirectUpdatePhase = ko.observable(self.redirectStatus.none);
        self.posting = ko.observable(false);
        self.waitDots = ko.observable(0);
        self.pleaseWaitText = ko.pureComputed(function() {
           var text = "Please wait";
           for (var ctr = 0; ctr < self.waitDots(); ctr++)
               text += ". ";
           return text;
        });
        if (!ko.components.isRegistered("server-error-notification")) {
            ko.components.register("server-error-notification", { require : "modules/server-error-notification" });
        }
        return this;
    }

    OAuth.prototype.submitOAuthRequest = function() {
        var self = this;
        self.waitDotInterval = window.setInterval(function() {
            if (self.waitDots() < 3)
                self.waitDots(self.waitDots() + 1);
            else
                self.waitDots(0);
        }, 300);
        self.posting(true);
        var form = document.getElementById("oauthRegistration");
        var formData = new FormData(form);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status !== 429)) {
                window.clearInterval(self.waitDotInterval);
                self.posting(false);
                self.errors([]);
            }
            if ((this.readyState === 4) && (this.status === 200)) {
                var response = JSON.parse(this.responseText);
                self.hasErrors(response.hasErrors);
                if (response.hasErrors) {
                    self.hasErrors(true);
                    response.globalErrors.forEach((ge) => self.errors.push({ field : 'global', message : ge }));
                    Object.keys(response.fieldErrors).forEach((k) => self.errors.push({ field : k, message : response.fieldErrors[k] }));
                    return;
                }
                self.errors([]);
                self.hasErrors(false);
                self.registrationResponse(response);
                self.redirect(response.redirect);
                self.oauthForm("oauthConfirmation");
                self.navigate("page", "oauthConfirmation");
            } else if ((this.readyState === 4) && (this.status !== 429)) {
                self.errorId(this.getResponseHeader("Error-Id"));
                self.oauthForm("error");
            }
        };
        window.setTimeout(function() {
            ajax.open("POST", "/FormSubmissions/OauthRegistration", true);
            ajax.setRequestHeader("accept", "text/json");
            ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
            ajax.send(formData);
        }, 100);
    };

    OAuth.prototype.startRedirectUpdate = function(phase) {
        var self = this;
        self.redirectUpdatePhase(self.redirectStatus.editing);
    };

    OAuth.prototype.redirectInputClick = function() {
        var self = this;
        document.getElementById("oauthRedirectUpdateInput").className = "";
    };
    
    OAuth.prototype.submitRedirectUpdate = function() {
        var self = this;
        self.redirectUpdatePhase(self.redirectStatus.updating);
        var formData = new FormData(document.getElementById("oauthConfirmation"));
        self.redirect(formData.get("newRedirect"));
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if ((this.readyState === 4) && (this.status === 200)) {
                if (this.responseText === 'updated') 
                    self.redirectUpdatePhase(self.redirectStatus.complete);
                else  {
                    self.redirectUpdateError(this.responseText);
                    self.redirectUpdatePhase(self.redirectStatus.errorState);
                }
            } else if (this.readyState === 4) {
                self.form("error");
                self.errorId(this.getResponseHeader("Error-Id") );
            }
        };
        ajax.open("POST", "/FormSubmissions/UpdateOauthRedirect", true);
        ajax.setRequestHeader("token", sessionStorage.getItem("iat-website-token"));
        ajax.setRequestHeader("accept", "text/plain");
        ajax.send(formData);
    };

    return { viewModel : OAuth, template : htmlString };
});

define('text!templates/slideshow-canvas.html',[],function () { return '<div class="slideShow" data-bind="childrenComplete : loadImages">\n    <canvas data-bind="attr: { width : width, height : height, id : id}"></canvas>\n</div>';});

define('modules/slideshow-canvas',['knockout', 'text!templates/slideshow-canvas.html'], function (ko, htmlString) {
    var SLIDE_PAUSE_PERIOD = 5000;
    var SLIDE_MOVE_PERIOD = 500;
    var images = ["screenshot1.png", "screenshot2.png", "screenshot3.png", "screenshot4.png", "screenshot5.png", "screenshot6.png"];
    function SlideShowCanvas(params) {
        var self = this;
        self.activeImageNdx = 0;
        self.nextImageNdx = null;
        self.lastT = null;
        self.lastDisplayT = null;
        self.id = params.id;
        self.width = params.width;
        self.height = params.height;
        self.imageNames = [];
        images.forEach(i => self.imageNames.push("images/" + i));
        self.images = ko.observableArray();
        self.imageDataAry = [];
        self.nextImageNdx = 1;
        self.numImages = self.imageNames.length;
        self.loadImages = self._loadImages.bind(self);
        self.images.subscribe(() => self.imageLoaded());

        self.display = params.display;
        self.on = ko.pureComputed(() => params.display().page === 'page');
    }
    SlideShowCanvas.prototype._loadImages = function() {
        let self = this;
        self.imageNames.forEach((name) => {
            let img = new Image();
            img.onload = (evt) => {
                self.images.push(img);
            };
            img.src = name;
        });
    };
    SlideShowCanvas.prototype.sizeImage = function (img) {
        var self = this;
        if (!self.canvas) {
            self.canvas = document.getElementById(self.id);
            self.ctx = self.canvas.getContext("2d");
            self.background = self.ctx.getImageData(0, 0, self.width, self.height);
            self.offscreen = document.createElement("canvas");
            self.offscreen.width = self.width;
            self.offscreen.height = self.height;
            self.offscreenCtx = self.offscreen.getContext("2d");
        }
        var selfAr = self.width / self.height;
        var imgAr = img.width / img.height;
        self.offscreenCtx.putImageData(self.background, 0, 0);
        var finalImgWidth, finalImgHeight;
        if (selfAr > imgAr) {
            if (img.height > self.height) {
                finalImgHeight = self.height;
                finalImgWidth = img.width * self.height / img.height;
                self.offscreenCtx.drawImage(img, (self.width - finalImgWidth) / 2, 0, self.width - (self.width - finalImgWidth) / 2, self.height);
            } else {
                self.offscreenCtx.drawImage(img, (self.width - img.width) / 2, (self.height - img.height) / 2,
                        self.width - (self.width - img.width) / 2, self.height - (self.height - img.height) / 2);
            }
        } else {
            if (img.width > self.width) {
                finalImgWidth = self.width;
                finalImgHeight = img.height * self.width / img.width;
                self.offscreenCtx.drawImage(img, 0, (self.height - finalImgHeight) / 2, self.width, self.height - (self.height - finalImgHeight) / 2);
            } else {
                self.offscreenCtx.drawImage(img, (self.width - img.width) / 2, (self.height - img.height) / 2,
                        self.width - (self.width - img.width) / 2, self.height - (self.height - img.height) / 2);
            }
        }
        return self.offscreenCtx.getImageData(0, 0, self.width, self.height);
    };

    SlideShowCanvas.prototype.imageLoaded = function () {
        var self = this;
        var imgData = self.sizeImage(self.images()[self.images().length - 1]);
        self.imageDataAry.push(imgData);
        if (!self.lastT) {
            self.on.subscribe(newVal => {
                if (newVal) {
                    self.lastT = 0;
                    window.requestAnimationFrame(function (t) {
                        self.runShow(t);
                    });
                }
            });
            self.lastT = 0;
            window.requestAnimationFrame(function (t) {
                self.runShow(t);
            });
        }
    };

    SlideShowCanvas.prototype.runShow = function (t) {
        var self = this;
        if (!self.on())
            return;
        if ((self.lastT === 0) || (self.imageDataAry.length === 1)) {
            self.ctx.putImageData(self.imageDataAry[0], 0, 0);
            self.lastDisplayT = t;
        } else if (t - SLIDE_PAUSE_PERIOD < self.lastDisplayT) {
            self.lastT = t;
        } else if ((t > self.lastDisplayT + SLIDE_PAUSE_PERIOD + SLIDE_MOVE_PERIOD) && (self.nextImageNdx < self.imageDataAry.length)) {
            self.ctx.putImageData(self.imageDataAry[self.nextImageNdx], 0, 0);
            self.activeImageNdx = self.nextImageNdx;
            if (++self.nextImageNdx >= self.imageDataAry.length) {
                self.nextImageNdx = 0;
            }
            self.lastDisplayT = t;
        } else if (t > self.lastDisplayT + SLIDE_PAUSE_PERIOD) {
            var activeX = (t - (self.lastDisplayT + SLIDE_PAUSE_PERIOD)) * (t - (self.lastDisplayT + SLIDE_PAUSE_PERIOD)) / (SLIDE_MOVE_PERIOD * SLIDE_MOVE_PERIOD) * self.width;
            self.ctx.putImageData(self.imageDataAry[self.nextImageNdx], activeX - self.width, 0);
            self.ctx.putImageData(self.imageDataAry[self.activeImageNdx], activeX, 0);
        }
        self.lastT = t;
        window.requestAnimationFrame(function (t) {
            self.runShow(t);
        });
    };

    return {viewModel: SlideShowCanvas, template: htmlString};
});

define('text!templates/svg-header.html',[],function () { return '<div data-bind="if: loaded()" class="svg-header">\n<div data-bind="foreach: captions">\n    <div data-bind="style : { textAlign : ($component.template.textAnchor === \'middle\') ? \'center\' : \'left\' }">\n<svg data-bind="attr : { viewBox : $component.viewBox(), width : $component.width().toString(), \n        height : $component.height().toString()  }, styles : $component.template.styles" >\n    <g overflow="hidden" class="outer">\n        <defs>\n            <mask data-bind="attr : { id : $component.textMaskId }">\n                <text fill="white" data-bind="text: $data, attr : { x : $component.textX(), \n                    y : $component.textY() }, style : { font : $component.template.font }"></text>\n                <filter data-bind="attr : { id : $component.innerShadowId, x : $component.filterX($component.template), \n                    y : $component.filterY($component.template), width : $component.filterWidth($component.template), \n                    height : $component.filterHeight($component.template) }">\n                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />\n                    <feOffset in="blur" dx="2.5" dy="-2.5" />\n                </filter>\n            </mask>\n            <lineargradient data-bind="foreach: $component.template.gradient.gradientStops, \n                attr : { id : $component.linearGradientId, x1 : $component.template.gradient.x1, \n                y1 : $component.template.gradient.y1, x2 : $component.template.gradient.x2, \n                y2 : $component.template.gradient.y2 }">\n                <stop data-bind="attr : { offset: $data.stop }, style : { stopColor : $data.color }" />\n            </lineargradient>\n        </defs>\n        <g class="inner" data-bind="attr : { mask : $component.textMaskUrl }">\n            <rect x="0" y="0" data-bind="attr : { width: $component.width(), \n                height : $component.height(), fill: $component.template.bevelColor }" />\n            <!-- ko if: $component.id -->\n            <text data-bind="text : $data, attr : { x : $component.textX(), \n                y : $component.textY(), filter : $component.innerShadowUrl, \n                fill : $component.linearGradientUrl, id : $component.id }, style : { font : $component.template.font }"></text>\n                  \n            <!-- /ko -->\n            <!-- ko ifnot: $component.id -->\n            <text data-bind="text : $data, attr : { x : $component.textX(), y : $component.textY(), \n                filter : $component.innerShadowUrl, fill : $component.linearGradientUrl },\n                style : { font : $component.template.font }"></text>\n            <!-- /ko -->\n        </g>\n    </g>\n</svg>\n    </div>\n</div>\n</div>';});

define('modules/svg-header',['knockout', 'text!templates/svg-header.html', 'modules/font-face-map'],
    function (ko, htmlString, fontFaceMap) {
        function SvgHeader(params) {
            SvgHeader.Count++;
            var self = this;
            self.loaded = ko.observable(false);
            self.display = params.display;
            self.caption = params.caption;
            self.captionText = ko.pureComputed(function () {
                return ko.isObservable(self.caption) ? self.caption() : self.caption;
            });
            if (params.id)
                self.id = params.id;
            else
                self.id = "svgh-" + SvgHeader.Count.toString();
            self.template = params.template;
            self.textMaskId = self.id + "-text-mask";
            self.innerShadowId = self.id + "-inner-shadow";
            self.linearGradientId = self.id + "-linear-gradient";
            self.textMaskUrl = "url(#" + self.textMaskId + ")";
            self.innerShadowUrl = "url(#" + self.innerShadowId + ")";
            self.linearGradientUrl = "url(#" + self.linearGradientId + ")";
            self.captions = ko.observableArray([]);
            if (ko.isObservable(self.caption)) {
                self.captions.push(self.caption());
                self.caption.subscribe(function (newVal) {
                    if (self.captions.indexOf(newVal) === -1)
                        self.captions.push(newVal);
                });
            } else {
                self.captions.push(self.caption);
            }
            self.template.displayWidth = self.template.displayWidth || self.template.width;
            if (self.template.displayWidth > self.template.width)
                self.template.displayWidth = self.template.width;
            self.resolveFont();
        }

        SvgHeader.prototype.resolveFont = function () {
            let self = this;
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            ctx.font = self.template.font;
            const textMetrics = ctx.measureText(self.captionText());
            const template = self.template;
            self.height = ko.pureComputed(() => 1.05 * (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent));
            self.width = ko.pureComputed(() => textMetrics.width * 1.05);
            self.viewBox = ko.pureComputed(() => "0 0 " + self.width().toString() + " " + self.height().toString());
            self.textX = ko.computed(() => (template.textAnchor === "start") ? 0 : textMetrics.width * 0.525);
            self.textY = ko.pureComputed(() => (template.textAnchor === "start") ? self.height() * 0.975 :
                textMetrics.actualBoundingBoxAscent);
            self.filterX = function (template) {
                return "-" + ((template.blurSize - 100) / 2).toString() + "%";
            };
            self.filterY = function (template) {
                return "-" + ((template.blurSize - 100) / 2).toString() + "%";
            };
            self.filterWidth = function (template) {
                return template.blurSize.toString() + "%";
            };
            self.filterHeight = function (template) {
                return template.blurSize.toString() + "%";
            };
            self.loaded(true);
        };
        SvgHeader.Count = 0;

        return { viewModel: SvgHeader, template: htmlString };
    });


define('text!templates/manual/manual-oauth.html',[],function () { return '\n<div id="manual-oauth">\n    <svg-header params="caption: \'Direct Data Retrieval\', template : smallHeaderTemplate, display : display">\n    </svg-header>\n    <p>The most powerful use of <span class="hilightHover" data-bind="event : { click : () => { navigate(\'manual\', \'manual-tokens\'); } }">Tokens</span> --> is that they allow you to retrieve results for individual test-takers without using\n        <span class="hilight">IAT Design</span>. This feature is invaluable for constructing applications that demand real time integration of test results with other data. To implement such an app, you must utilize OAuth to negoltiate authentication\n        with <span class="hilight">iatsoftware.net</span> before retrieving your results via what amounts to a REST request that includes an access token. A thorough example follows.\n    </p>\n    <svg-header params="caption : \'OAuth Registration\', template : subHeaderTemplate, display : display"></svg-header>\n    <p>\n        Before obtaining an access token from <span class="hilight">iatsoftware.net</span>, it is necessary that you register your test for remote data retrieval to obtain a "client id" and "client secret." These are not the authentication items you will\n        supply to obtain your test data. They are part of a security procedure known as OAuth that ensures requests to retrieve result data originate from a party you authorize. After completing authentication, you will use the access token provided to\n        you when you submit the request for test data.\n    </p>\n    <form class="oauthRegistration">\n        <p>\n            Complete the following form to enable result retrieval via an application other than\n            <span class="hilight">IAT Design</span>. You will be issued a client id and client secret that you must use when retrieving data. If you have lost your client id or client secret, submitting this form again will retrieve them for you. It is\n            highly recommended that you\n            <span class="clickable" data-bind="event : { click : () => { navigate(\'manual\', \'manual-oauth\'); } }">consult the\n                documentation</span> for the mechanics of data retrieval using OAuth to ensure it meets your needs and also to understand what information is required in the form below before proceeding.\n        </p>\n        <div class="fieldSummary">\n            <h2>Field Summary</h2>\n            <p><span class="fieldName">product key &ndash;</span> This is accessible via the Help&mdash;&gt;About menu in the test design program.</p>\n            <p><span class="fieldName">test &ndash;</span> The name of the test you are registering</p>\n            <p><span class="fieldName">password &ndash;</span> The password you selected for the test</p>\n            <p><span class="fieldName">redirect url &ndash;</span> The URL that you will be redirected back to during the authentication process. This should reference a domain you own. You may enter a minimal path for the URL and allow redirections to explicitly\n                specified subpaths or if you may specify a unique URL. This can be modified if you have already registered your test by completing the remainder of the form.</p>\n        </div>\n        <div class="formDataGrid">\n            <p class="leftInputLabel">Product key:</p>\n            <input type="text" name="productKey" readonly value="12345678901234567890" /></td>\n            <p class="leftInputLabel">Test name:</p>\n            <input type="text" name="testName" readonly value="straight-drag" />\n            <p class="leftInputLabel">Test password:</p>\n            <input type="text" name="password" readonly value="password" />\n            <p class="leftInputLabel">Redirect URL:</p>\n            <input type="text" name="redirect" readonly data-bind="attr : { value : redirect }" />\n            <input id="subpaths" type="checkbox" name="subpaths" readonly />\n            <p class="rightInputLabel">Allow explicit redirects to subpaths of redirection URL</p>\n            <input type="button" value="Submit" disabled />\n        </div>\n    </form>\n    <p>Two fields bear explanations. The first is <span class="hilight">Redirect Url</span>. To ensure that OAuth requests originate from a party you permit, the initial authorization request will be answered with a redirection (HTTP Status Code 302) to\n        the URL you provide here. The reason for this will become apparent as you continue reading. It is not likely that you will choose to redirect to an HTML page. I am using one for simplicity\'s sake. The <span class="hilight">\n            Allow explicit redirects to subpaths of the redirection URL</span>, if checked, would permit you to supply a host name as the redirection URL and a path on its URL as the precise relocation destination. By default, OAuth will redirect to the\n        pre-agreed upon URL. If you desire redirection to a subpath, you must supply a full URL to that subpath in your request for authentication. For the purpose of this example, we will use the product key <span class="hilight">12345678901234567890</span>        a test named\n        <span class="hilight">\n            OauthSampleTest</span> with a test password of <span class="hilight">ezasabcdefg</span>. After the <span class="hilight">\n            Submit</span> button, which is disabled in this exercise, you should see the following form.</p>\n    <svg-header params="caption : \'OAuth Credentials\', template : subHeaderTemplate, display : display"></svg-header>\n    <form class=\'oauthConfirmation\'>\n        <div>\n            <p>Below is the client id and client secret you will use to authenticate your application with the server. Also listed is the URL the server will redirect your application to in the first stage of authentication. You can revisit this page to\n                change that URL later.</p>\n            <p>If you have any questions about OAuth or the RESTful interface used to retrieve data, feel free to contact me at <span class="hilight">\n                    michael@iatsoftware.net</span>. I will assist you as I am able and provide links to further reading material.\n            </p>\n        </div>\n        <div class="dataDisplay">\n            <p>client id:</p>\n            <p data-bind="text : clientId"></p>\n            <p>client secret:</p>\n            <p data-bind="text : clientSecret"></p>\n            <p>redirect url:</p>\n            <p data-bind="text : redirect"></p>\n            <input type="button" value=\'Change\' disabled />\n        </div>\n    </form>\n    <p>The OAuth redirect URL can be modified via the Change button. You may return to this form at any time to alter it by completing the OAuth Registration form which will redirect you here.</p>\n    <svg-header params="caption : \'Conducting Authentication\', template : subHeaderTemplate, display : display"></svg-header>\n    <p>\n        The first step in authenticating with the server to request test results programically is to issue a GET request to the URL below. Note that a <span class="hilight">client_id</span> parameter scripts at the end of the query string, the same client\n        id as above. When you issue the GET request, the server will respond with a 302 (redirect) to the agreed upon URL. You may optionally include a <span class="hilight">state</span> query parameter that will be appended in the query string of the\n        URL that you are redirected to. It might be wise to pass a session state token. Click the link below to submit a GET request to see the results of that request or copy and paste the link in your own browser bar.\n    </p>\n    <p>\n        <span class="hilightHover" data-bind="event : { click : oauthGetRequest }, text : authUrl"></span>\n    </p>\n    <!-- ko if: oauthGetLinkClicked() -->\n    <div style="background-image: url(../../images/oauth-sample-background.png); background-size: 100% auto; overflow: clip; background-repeat: repeat-y; padding: 20px 4%;" \n        data-bind="foreach: oauthLines.html">\n        <p style="margin: 0px 0px;" data-bind="html: $data"></p>\n    </div>\n    <p>\n        Again, you should <span class="hilight">NEVER</span>, embed your client secret in a webpage or mobile app. Client secrets are preceded with the word "secret" specifically to discourage you from doing so. Click one of the two authentication methods\n        above.\n    </p>\n    <!-- /ko -->\n    <!-- ko if: oauthGetLinkClicked() && oauthSuccess() -->\n    <p>\n        If all the information you supply is valid, the server will return a JSON object of the form:\n    </p>\n    <div class="json">\n        <p>{</p>\n        <div style="margin-left: 100px;">\n            <p>access_token : &quot;{access_token}&quot;,</p>\n            <p>refresh_token : &quot;{refresh_token}&quot;,</p>\n            <p>token_type : &quot;bearer&quot;,</p>\n            <p>expires : {expiration time in seconds}</p>\n        </div>\n        <p>}</p>\n    </div>\n    <p>\n        At the time of this writing, access tokens have a lifetime of 20 minutes and refresh tokens have a lifetime of 24 hours. It is not anticipated that you will distribute your access token and process third-party refresh requests, but you may do so by making\n        a GET request to:\n    </p>\n    <div style="margin-left: 150px;">\n        <p>\n            <span class="hilight" style="white-space: pre-wrap;">https://www.iatsoftware.net/IAT/OAuth/Refresh?client_id={client\n                id}&amp;client_secret={client secret}\n                &amp;refresh_token={refresh token}&amp;grant_type=refresh_token</span>\n        </p>\n    </div>\n    <p>\n        The same object as that listed above will be returned. In either case, if there is an error,\n        <span class="hilight">access_token</span> and <span class="hilight">refresh_token</span> will both be set to &quot;error&quot;, <span class="hilight">token_type</span> will be set to &quot;none&quot; and an\n        <span class="hilight">error</span> field will be present with a description of the error. Otherwise, you are ready to retrieve data.\n    </p>\n    <svg-header params="caption : \'OAuth Step 3\', template : subHeaderTemplate, display : display"></svg-header>\n    <p>\n        There are two options for retrieving data. The first is a GET request. You simply put all the parameters in the query string and post to the following address:\n    </p>\n    <div style="margin-left: 150px;">\n        <p>\n            <span class="hilight">https://www.iatsoftware.net/IAT/Restful/RetrieveResult?access_token={access_token}\n                &amp;test_name={test_name}&amp;test_password={test_password}&amp;product_key={product_key}\n                &amp;token={test_taker_token}&amp;results_format={results_format}</span>\n        </p>\n    </div>\n    <p>\n        Alternatively, you may use a POST request and include the data in JSON within the request body. In this instance, the query string need only contain the <span class="hilight">access_token</span>.\n    </p>\n    <div style="margin-left: 150px;">\n        <p>\n            <span class="hilight">https://www.iatsoftware.net/IAT/Restful/RetrieveResult?access_token={access_token}</span>\n        </p>\n    </div>\n    <p>Request body:</p>\n    <div class="json">\n        <p>{</p>\n        <div style="margin-left: 100px;">\n            <p>&quot;test_name&quot; : &quot;{test name}&quot;,</p>\n            <p>&quot;test_password&quot; : &quot;{test password}&quot;,</p>\n            <p>&quot;token&quot; : &quot;{test taker token}&quot;,</p>\n            <p>&quot;results_format&quot; : &quot;{results format}&quot;</p>\n        </div>\n        <p>}</p>\n    </div>\n    <p>\n        In either case, &quot;results_format&quot; may be omitted. The default value is &quot;ResultsSummary&quot;, which returns the IAT score and all questionnaire answers, &quot;DScore&quot; which returns only the IAT score, and &quot;FullResults,&quot; which\n        returns all data collected for that test-taker.\n    </p>\n    <!-- /ko -->\n\n</div>\n<!--ffdfdfdfdf\nko if: viewState() === \'requestAuthResponse\' \n<div id="oauthWalkthrough1">\n    <svg-header params="caption : \'Requesting Authentication\', template : sectionHeaderTemplate, display : display">\n    </svg-header>\n    <div id="container">\n        <div class="page">\n            <h1>Redirect Complete</h1>\n            <div class="authContent">\n                <p>client_id:</p>\n                <p>CLIENT611:straight-drag:16269d02f38b4e3a</p>\n                <p>client_secret:</p>\n                <p>secret:481dd7bce7f17ec6bf3f71345af4a1c7</p>\n                <p>code:</p>\n                <p class="code"></p>\n                <p>state:</p>\n                <p class="state"></p>\n            </div>\n            <br />\n            <p>\n                Please note that you should <span class="hilight">NEVER</span> embed your client secret into a webpage or even a mobile app. Practice is to issue client secrets that begin with &quot;secret:&quot; to discourage such behavior. It is embedded\n                here for simplicity\'s sake.\n            </p>\n            <p>\n                The &quot;code&quot; and &quot;state&quot; parameters are retrieved from the query string, not from the respose body. Again, when the GET request was issued, the server responded with a redirect (302) which has no response body. Instead, it sends you\n                to the pre-agreed upon URL with the query parameters shown. Let us suppose that the state token that was issued in the GET request makes reference to some key on this server that the test, test password, and test-taker token can be gotten\n                with. Additionally, this value could perhaps be used to retrieve the client id and client secret. The &quot;code&quot; parameters will be supplied in the next step to complete authentication.\n            </p>\n            <p>\n                The next step is to issue a POST request back to\n                <span style="color: #c01352">\n                    https://iatsoftware.net/IAT/OAuth/RequestAuth</span> that contains the client id, client secret, authentication code, and a &quot;grant_type&quot; parameter that must be set equal to &quot;code&quot;. You may pack the\n                four values into a query string and submit a POST, you may send a JSON object via AJAX, you may send a FormData object via AJAX. Sending them as request headers is impermissable because request headers are not encrypted. Look at the example\n                code to the right for options.\n            </p>\n            <div style="display: flex; flex-flow: row; justify-content: space-around">\n                <input type="button" value="Auth with JSON" onclick="authWithJson()" />\n                <input type="button" value="Auth with Form Data" onclick="authWithFormData()" />\n            </div>\n            <div id="authResponse"></div>\n        </div>\n\n    </div>\n</div>\n-->\n';});

define('modules/manual/manual-page',['knockout'], function(ko) {

    class ManualPage {
        constructor(params) {
            if (!params)
                return;
            let self = this;
            self.navigate = params.navigate;
            self.headerTemplate = params.svg.headerTemplate;
            self.smallHeaderTemplate = params.svg.smallHeaderTemplate;
            self.subHeaderTemplate = params.svg.subHeaderTemplate;
            self.display = params.display;
        }
    }
    
    return ManualPage;
});

define('text!json/formatted-html/request-auth.json',[],function () { return '{\n    "html": [\n        "<span style=\'color:#5CDBEF;\'>&lt;!</span><span style=\'color:#F92672;\'>DOCTYPE</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>html</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>meta</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>charset</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;utf-8&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>/&gt;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>html</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>head</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>title</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>OAuth&nbsp;Sample</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>title</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>link</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>rel</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;stylesheet&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>href</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;../css/frames.css&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>/&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>script</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>type</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;text/javascript&quot;</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>function</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>onLoad</span><span style=\'color:white;\'>()&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>document</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>querySelector</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;div.authContent&nbsp;p.code&quot;</span><span style=\'color:white;\'>).</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#9CDCFE;\'>innerText</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>URLSearchParams</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>window</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>location</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>search</span><span style=\'color:white;\'>).</span><span style=\'color:#A6E22E;\'>get</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>document</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>querySelector</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;div.authContent&nbsp;p.state&quot;</span><span style=\'color:white;\'>).</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#9CDCFE;\'>innerText</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>URLSearchParams</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>window</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>location</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>search</span><span style=\'color:white;\'>).</span><span style=\'color:#A6E22E;\'>get</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;state&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;}</span>",\n        "<span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>function</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>authWithJson</span><span style=\'color:white;\'>()&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>let</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>authObj</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>client_id</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;CLIENT611:straight-drag:16269d02f38b4e3a&quot;</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>client_secret</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;secret:481dd7bce7f17ec6bf3f71345af4a1c7&quot;</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#9CDCFE;\'>code</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>URLSearchParams</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>window</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>location</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>search</span><span style=\'color:white;\'>).</span><span style=\'color:#A6E22E;\'>get</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>grant_type</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;}</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#66D9EF;\'>let</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>XMLHttpRequest</span><span style=\'color:white;\'>()</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>onreadystatechange</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;()&nbsp;</span><span style=\'color:#66D9EF;\'>=&gt;</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#F92672;\'>if</span><span style=\'color:white;\'>&nbsp;(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>readyState</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>===</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#AE81FF;\'>4</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>&amp;&amp;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>status</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>===</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#AE81FF;\'>200</span><span style=\'color:white;\'>)&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>parent</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>document</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>body</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>dispatchEvent</span><span style=\'color:white;\'>(</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>CustomEvent</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;oauthsuccess&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>detail</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#9CDCFE;\'>result</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>JSON</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>parse</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>responseText</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#A6E22E;\'>displayAuthResults</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>responseText</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span><span style=\'font-style: italic; color:#F92672;\'>else</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>if</span><span style=\'color:white;\'>&nbsp;(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>readyState</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>===</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#AE81FF;\'>4</span><span style=\'color:white;\'>)&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#A6E22E;\'>displayAuthResults</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>responseText</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;}</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;}</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>open</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;POST&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;http://127.0.0.1/IAT/OAuth/RequestAuth&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#B3B3B3;\'>//&nbsp;------&nbsp;MAKE&nbsp;SURE&nbsp;TO&nbsp;DO&nbsp;THIS&nbsp;--------&nbsp;//</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>setRequestHeader</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;content-type&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;text/json&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>setRequestHeader</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;accept&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;text/json&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>send</span><span style=\'color:white;\'>(</span><span style=\'color:#A6E22E;\'>JSON</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>stringify</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>authObj</span><span style=\'color:white;\'>))</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;}</span>",\n        "<span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>function</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>authWithFormData</span><span style=\'color:white;\'>()&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#66D9EF;\'>let</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>form</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>FormData</span><span style=\'color:white;\'>()</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>form</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>set</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;client_id&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;CLIENT611:straight-drag:16269d02f38b4e3a&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>form</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>set</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;client_secret&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;secret:481dd7bce7f17ec6bf3f71345af4a1c7&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>form</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>set</span><span style=\'color:white;\'>(</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>URLSearchParams</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>window</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>location</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>search</span><span style=\'color:white;\'>).</span><span style=\'color:#A6E22E;\'>get</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:white;\'>)</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>form</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>set</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;grant_type&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#66D9EF;\'>let</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>XMLHttpRequest</span><span style=\'color:white;\'>()</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>onreadystatechange</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;()&nbsp;</span><span style=\'color:#66D9EF;\'>=&gt;</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#F92672;\'>if</span><span style=\'color:white;\'>&nbsp;(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>readyState</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>===</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#AE81FF;\'>4</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>&amp;&amp;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>status</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>===</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#AE81FF;\'>200</span><span style=\'color:white;\'>)&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>parent</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>document</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>body</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>dispatchEvent</span><span style=\'color:white;\'>(</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-weight: 900; color:#F92672;\'>new</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>CustomEvent</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;oauthsuccess&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>detail</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#9CDCFE;\'>result</span><span style=\'color:#F3C6BE;\'>:</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>JSON</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>parse</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>responseText</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span style=\'color:#F3C6BE;\'>,</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#A6E22E;\'>displayAuthResults</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>responseText</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span><span style=\'font-style: italic; color:#F92672;\'>else</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>if</span><span style=\'color:white;\'>&nbsp;(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>readyState</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>===</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#AE81FF;\'>4</span><span style=\'color:white;\'>)&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#A6E22E;\'>displayAuthResults</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>responseText</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;}</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;}</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>open</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;POST&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;http://127.0.0.1/IAT/OAuth/RequestAuth&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#B3B3B3;\'>//&nbsp;------&nbsp;MAKE&nbsp;SURE&nbsp;TO&nbsp;DO&nbsp;THIS&nbsp;--------&nbsp;//</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>setRequestHeader</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;accept&quot;</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;text/json&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>ajax</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>send</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>form</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;}</span>",\n        "<span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>function</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>displayAuthResults</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>results</span><span style=\'color:white;\'>)&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>let</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>resultLines</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>results</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>split</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;</span><span style=\'color:#AE81FF;\'>\\n</span><span style=\'color:#F9EC6D;\'>&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#9CDCFE;\'>resultLines</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>forEach</span><span style=\'color:white;\'>((</span><span style=\'color:#9CDCFE;\'>line</span><span style=\'color:white;\'>)&nbsp;</span><span style=\'color:#66D9EF;\'>=&gt;</span><span style=\'color:white;\'>&nbsp;{</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>line</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>line</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>innerHTML</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>replaceAll</span><span style=\'color:white;\'>(</span><span style=\'color:#D16969;\'>/</span><span style=\'color:#AE81FF;\'>\\t</span><span style=\'color:#D16969;\'>/g</span><span style=\'color:#F3C6BE;\'>,</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F9EC6D;\'>&quot;&amp;nbsp;&amp;nbsp;&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'font-style: italic; color:#66D9EF;\'>let</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>pre</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>document</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>createElement</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;pre&quot;</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>pre</span><span style=\'color:white;\'>.</span><span style=\'color:#9CDCFE;\'>innerText</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#F92672;\'>=</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#9CDCFE;\'>line</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#9CDCFE;\'>document</span><span style=\'color:white;\'>.</span><span style=\'color:#A6E22E;\'>querySelector</span><span style=\'color:white;\'>(</span><span style=\'color:#F9EC6D;\'>&quot;body&nbsp;div#authResponse&quot;</span><span style=\'color:white;\'>).</span><span style=\'color:#A6E22E;\'>appendChild</span><span style=\'color:white;\'>(</span><span style=\'color:#9CDCFE;\'>pre</span><span style=\'color:white;\'>)</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;})</span><span style=\'color:#F3C6BE;\'>;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;}</span>",\n        "<span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>script</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>head</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>body</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>onload</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;</span><span style=\'color:#A6E22E;\'>onLoad</span><span style=\'color:#F9EC6D;\'>()&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>onResize</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;onResize()&quot;</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>h1</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>Redirect&nbsp;Complete</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>h1</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>div</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>class</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;authContent&quot;</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>client_id:</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>CLIENT611:straight-drag:16269d02f38b4e3a</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>client_secret:</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>secret:481dd7bce7f17ec6bf3f71345af4a1c7</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>code:</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>class</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;code&quot;</span><span style=\'color:#5CDBEF;\'>&gt;&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>state:</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>class</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;state&quot;</span><span style=\'color:#5CDBEF;\'>&gt;&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>div</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>br</span><span style=\'color:#5CDBEF;\'>&nbsp;/&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;Please&nbsp;note&nbsp;that&nbsp;you&nbsp;should&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>span</span><span style=\'color:#5CDBEF;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>class</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;hilight&quot;</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>NEVER</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>span</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;embed&nbsp;your&nbsp;client&nbsp;secret&nbsp;into&nbsp;a&nbsp;webpage&nbsp;or&nbsp;even&nbsp;a&nbsp;mobile&nbsp;app.&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;Practice&nbsp;is&nbsp;to&nbsp;issue&nbsp;client&nbsp;secrets&nbsp;that&nbsp;begin&nbsp;with&nbsp;</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>secret:</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;discourage&nbsp;such&nbsp;behavior.&nbsp;It&nbsp;is&nbsp;embedded&nbsp;here&nbsp;for&nbsp;simplicity&apos;s&nbsp;sake.</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;The&nbsp;</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>code</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>&nbsp;and&nbsp;</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>state</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>&nbsp;parameters&nbsp;are&nbsp;retrieved&nbsp;from&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;query&nbsp;string,&nbsp;not&nbsp;from&nbsp;the&nbsp;respose&nbsp;body.&nbsp;Again,&nbsp;when&nbsp;the&nbsp;GET&nbsp;request&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;was&nbsp;issued,&nbsp;the&nbsp;server&nbsp;responded&nbsp;with&nbsp;a&nbsp;redirect&nbsp;(302)&nbsp;which&nbsp;has&nbsp;no&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;response&nbsp;body.&nbsp;Instead,&nbsp;it&nbsp;sends&nbsp;you&nbsp;to&nbsp;the&nbsp;pre-agreed&nbsp;upon&nbsp;URL&nbsp;with&nbsp;the&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;query&nbsp;parameters&nbsp;shown.&nbsp;Let&nbsp;us&nbsp;suppose&nbsp;that&nbsp;the&nbsp;state&nbsp;token&nbsp;that&nbsp;was&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;issued&nbsp;in&nbsp;the&nbsp;GET&nbsp;request&nbsp;makes&nbsp;reference&nbsp;to&nbsp;some&nbsp;key&nbsp;on&nbsp;this&nbsp;server&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;that&nbsp;the&nbsp;test,&nbsp;test&nbsp;password,&nbsp;and&nbsp;test-taker&nbsp;token&nbsp;can&nbsp;be&nbsp;gotten</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;with.&nbsp;Additionally,&nbsp;this&nbsp;value&nbsp;could&nbsp;perhaps&nbsp;be&nbsp;used&nbsp;to&nbsp;retrieve&nbsp;the&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;client&nbsp;id&nbsp;and&nbsp;client&nbsp;secret.&nbsp;The&nbsp;</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>code</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>&nbsp;parameters&nbsp;will&nbsp;be&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;supplied&nbsp;in&nbsp;the&nbsp;next&nbsp;step&nbsp;to&nbsp;complete&nbsp;authentication.</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;The&nbsp;next&nbsp;step&nbsp;is&nbsp;to&nbsp;issue&nbsp;a&nbsp;POST&nbsp;request&nbsp;back&nbsp;to&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>span</span><span style=\'color:#5CDBEF;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>style</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;color:&nbsp;#c01352&quot;</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>https://iatsoftware.net/IAT/OAuth/RequestAuth</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>span</span><span style=\'color:#5CDBEF;\'>&gt;</span><span style=\'color:white;\'>&nbsp;that&nbsp;contains&nbsp;the&nbsp;client&nbsp;id,&nbsp;client&nbsp;secret,&nbsp;authentication&nbsp;code,&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;a&nbsp;</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>grant_type</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>&nbsp;parameter&nbsp;that&nbsp;must&nbsp;be&nbsp;set&nbsp;equal&nbsp;to&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>code</span><span style=\'color:#AE81FF;\'>&amp;quot;</span><span style=\'color:white;\'>.&nbsp;You&nbsp;may&nbsp;pack&nbsp;the&nbsp;four&nbsp;values&nbsp;into&nbsp;a&nbsp;query&nbsp;string&nbsp;and&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;submit&nbsp;a&nbsp;POST,&nbsp;you&nbsp;may&nbsp;send&nbsp;a&nbsp;JSON&nbsp;object&nbsp;via&nbsp;AJAX,&nbsp;you&nbsp;may&nbsp;send&nbsp;a&nbsp;FormData&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;object&nbsp;via&nbsp;AJAX.&nbsp;Sending&nbsp;them&nbsp;as&nbsp;request&nbsp;headers&nbsp;is&nbsp;impermissable&nbsp;because&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;request&nbsp;headers&nbsp;are&nbsp;not&nbsp;encrypted.&nbsp;Look&nbsp;at&nbsp;the&nbsp;example&nbsp;code&nbsp;to&nbsp;the&nbsp;right&nbsp;for&nbsp;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;options.</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>p</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>div</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>style</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;display:&nbsp;flex;&nbsp;flex-flow:&nbsp;row;&nbsp;justify-content:&nbsp;space-around&quot;</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>input</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>type</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;button&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>value</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;Auth&nbsp;with&nbsp;JSON&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>onclick</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;</span><span style=\'color:#A6E22E;\'>authWithJson</span><span style=\'color:#F9EC6D;\'>()&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>/&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>input</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>type</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;button&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>value</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;Auth&nbsp;with&nbsp;Form&nbsp;Data&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>onclick</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;</span><span style=\'color:#A6E22E;\'>authWithFormData</span><span style=\'color:#F9EC6D;\'>()&quot;</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#5CDBEF;\'>/&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>div</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:white;\'>&nbsp;&nbsp;&nbsp;</span><span style=\'color:#5CDBEF;\'>&lt;</span><span style=\'color:#F92672;\'>div</span><span style=\'color:white;\'>&nbsp;</span><span style=\'color:#A6E22E;\'>id</span><span style=\'color:#F3C6BE;\'>=</span><span style=\'color:#F9EC6D;\'>&quot;authResponse&quot;</span><span style=\'color:#5CDBEF;\'>&gt;&lt;/</span><span style=\'color:#F92672;\'>div</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>body</span><span style=\'color:#5CDBEF;\'>&gt;</span>",\n        "<span style=\'color:#5CDBEF;\'>&lt;/</span><span style=\'color:#F92672;\'>html</span><span style=\'color:#5CDBEF;\'>&gt;</span>"\n    ]\n}';});


define('text!json/oauth.json',[],function () { return '{\n    "product_key" : "2X5D9YE5GRLSHNKRL2I0",\n    "test_name" : "straight-drag",\n    "test_password" : "1234",\n    "client_id" : "CLIENT1:straight-drag:c3bb1b8c77c18f7d",\n    "client_secret" : "secret:3dfc85e02c8ee877dbe84d9bea57ceaa",\n    "redirect" : "http://127.0.0.1/oauth-example/oauth-stub.html"\n}';});

define('modules/manual/manual-oauth',['knockout', 'text!templates/manual/manual-oauth.html', "modules/manual/manual-page",
    "text!json/formatted-html/request-auth.json", "text!json/oauth.json"], function (ko, htmlString, ManualPage,
        oauthPageJSON, oauthJSON) {
    class ManualOAuth extends ManualPage {
        constructor(params) {
            super(params);
            var self = this;
            let oauthData = JSON.parse(oauthJSON);
            self.productKey = oauthData.product_key;
            self.testName = oauthData.test_name;
            self.password = oauthData.test_password;
            self.redirect = oauthData.redirect;
            self.clientId = oauthData.client_id;
            self.clientSecret = oauthData.client_secret;
            self.requestAuthFrameHeight = ko.observable(undefined);
            self.oauthGetLinkClicked = ko.observable(false);
            self.oauthSuccess = ko.observable(false);
            self.onOauthCodePageLoad = self._onOauthCodePageLoad.bind(self);
            self.onOauthSuccess = self._onOauthSuccess.bind(self);
            self.oauthLines = JSON.parse(oauthPageJSON);
            self.authUrl = window.location.protocol + "//" + window.location.hostname + "/IAT/OAuth/RequestAuth?client_id=" + self.clientId + "&state=SOMEVALUE";
            document.body.addEventListener("oauthcodepageload", self.onOauthCodePageLoad);
            document.body.addEventListener("oauthsuccess", self.onOauthSuccess);
        }

        oauthGetRequest() {
            this.oauthGetLinkClicked(true);
        }
        oauthIframeLoad() {
            this.requestAuthFrameHeight(evt.detail.height);
        }
        _onOauthCodePageLoad(evt) {
            this.requestAuthFrameHeight(evt.detail.height);
        }
        _onOauthSuccess(evt) {
            let self = this;
            self.authResponseJSON = ko.observable(evt.detail.result);
            self.authResponseJSONString = JSON.stringify(evt.detail, null, 4);
            document.body.removeEventListener("oauthsuccess", self.onOauthSuccess);
            self.oauthSuccess(true);
        }
    }

    return {
        viewModel: ManualOAuth,
        template: htmlString
    };
});
