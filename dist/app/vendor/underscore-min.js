!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n=n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,function(){var n="1.11.0",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,o=Object.prototype,h="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,f=e.slice,v=o.toString,i=o.hasOwnProperty,t="undefined"!=typeof ArrayBuffer,a=Array.isArray,c=Object.keys,l=Object.create,s=t&&ArrayBuffer.isView,p=isNaN,y=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),d=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function b(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}for(var e=Array(i+1),t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}}function _(n){var r=typeof n;return"function"==r||"object"==r&&!!n}function j(n){return!0===n||!1===n||"[object Boolean]"===v.call(n)}function w(r){return function(n){return v.call(n)==="[object "+r+"]"}}var x=w("String"),A=w("Number"),S=w("Date"),O=w("RegExp"),M=w("Error"),E=w("Symbol"),B=w("Map"),N=w("WeakMap"),D=w("Set"),I=w("WeakSet"),k=w("ArrayBuffer"),T=w("DataView"),V=a||w("Array"),R=w("Function"),F=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof F&&(R=function(n){return"function"==typeof n||!1});var U=R;function q(n,r){return null!=n&&i.call(n,r)}var W=w("Arguments");!function(){W(arguments)||(W=function(n){return q(n,"callee")})}();var z=W;function L(n){return A(n)&&p(n)}function P(n){return function(){return n}}function C(r){return function(n){n=r(n);return"number"==typeof n&&0<=n&&n<=m}}function K(r){return function(n){return null==n?void 0:n[r]}}var J=K("byteLength"),$=C(J),G=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,H=t?function(n){return s?s(n)&&!T(n):$(n)&&G.test(v.call(n))}:P(!1),Q=K("length"),X=C(Q);function Y(n,r){r=function(r){for(var t={},n=r.length,e=0;e<n;++e)t[r[e]]=!0;return{contains:function(n){return t[n]},push:function(n){return t[n]=!0,r.push(n)}}}(r);var t=d.length,e=n.constructor,u=U(e)&&e.prototype||o,i="constructor";for(q(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=d[t])in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function Z(n){if(!_(n))return[];if(c)return c(n);var r,t=[];for(r in n)q(n,r)&&t.push(r);return g&&Y(n,t),t}function nn(n,r){var t=Z(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0}function rn(n){return n instanceof rn?n:this instanceof rn?void(this._wrapped=n):new rn(n)}function tn(n){if(!_(n))return[];var r,t=[];for(r in n)t.push(r);return g&&Y(n,t),t}function en(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function un(n){for(var r={},t=Z(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function on(n){var r,t=[];for(r in n)U(n[r])&&t.push(r);return t.sort()}function an(f,c){return function(n){var r=arguments.length;if(c&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=f(e),i=u.length,o=0;o<i;o++){var a=u[o];c&&void 0!==n[a]||(n[a]=e[a])}return n}}rn.VERSION=n,rn.prototype.valueOf=rn.prototype.toJSON=rn.prototype.value=function(){return this._wrapped},rn.prototype.toString=function(){return String(this._wrapped)};var fn=an(tn),cn=an(Z),ln=an(tn,!0);function sn(n){if(!_(n))return{};if(l)return l(n);function r(){}r.prototype=n;n=new r;return r.prototype=null,n}function pn(n){return _(n)?V(n)?n.slice():fn({},n):n}function hn(n){return n}function vn(r){return r=cn({},r),function(n){return nn(n,r)}}function yn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function gn(r){return V(r)?function(n){return yn(n,r)}:K(r)}function dn(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}}function mn(n,r,t){return null==n?hn:U(n)?dn(n,r,t):(_(n)&&!V(n)?vn:gn)(n)}function bn(n,r){return mn(n,r,1/0)}function _n(n,r,t){return rn.iteratee!==bn?rn.iteratee(n,r):mn(n,r,t)}function jn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}rn.iteratee=bn;var wn=Date.now||function(){return(new Date).getTime()};function xn(r){function t(n){return r[n]}var n="(?:"+Z(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}}var An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Sn=xn(An),On=xn(un(An)),Mn=rn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},En=/(.)^/,Bn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Nn=/\\|'|\r|\n|\u2028|\u2029/g;function Dn(n){return"\\"+Bn[n]}var In=0;function kn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);t=sn(n.prototype),u=n.apply(t,u);return _(u)?u:t}var Tn=b(function(u,i){var o=Tn.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return kn(u,a,this,this,t)};return a});Tn.placeholder=rn;var Vn=b(function(r,t,e){if(!U(r))throw new TypeError("Bind must be called on a function");var u=b(function(n){return kn(r,u,t,this,e.concat(n))});return u});function Rn(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,i=0,o=Q(n);i<o;i++){var a=n[i];if(X(a)&&(V(a)||z(a)))if(1<r)Rn(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var Fn=b(function(n,r){var t=(r=Rn(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Vn(n[e],n)}return n}),Un=b(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),qn=Tn(Un,rn,1);function Wn(n){return function(){return!n.apply(this,arguments)}}function zn(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var Ln=Tn(zn,2);function Pn(n,r,t){r=_n(r,t);for(var e,u=Z(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e}function Cn(i){return function(n,r,t){r=_n(r,t);for(var e=Q(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}}var Kn=Cn(1),Jn=Cn(-1);function $n(n,r,t,e){for(var u=(t=_n(t,e,1))(r),i=0,o=Q(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i}function Gn(i,o,a){return function(n,r,t){var e=0,u=Q(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(f.call(n,e,u),L))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}}var Hn=Gn(1,Kn,$n),Qn=Gn(-1,Jn);function Xn(n,r,t){t=(X(n)?Kn:Pn)(n,r,t);if(void 0!==t&&-1!==t)return n[t]}function Yn(n,r,t){if(r=dn(r,t),X(n))for(u=0,i=n.length;u<i;u++)r(n[u],u,n);else for(var e=Z(n),u=0,i=e.length;u<i;u++)r(n[e[u]],e[u],n);return n}function Zn(n,r,t){r=_n(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i}function nr(f){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!X(n)&&Z(n),i=(u||n).length,o=0<f?0:i-1;for(e||(t=n[u?u[o]:o],o+=f);0<=o&&o<i;o+=f){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,dn(r,e,4),t,u)}}var rr=nr(1),tr=nr(-1);function er(n,e,r){var u=[];return e=_n(e,r),Yn(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u}function ur(n,r,t){r=_n(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0}function ir(n,r,t){r=_n(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1}function or(n,r,t,e){return X(n)||(n=en(n)),"number"==typeof t&&!e||(t=0),0<=Hn(n,r,t)}var ar=b(function(n,t,e){var u,i;return U(t)?i=t:V(t)&&(u=t.slice(0,-1),t=t[t.length-1]),Zn(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=yn(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})});function fr(n,r){return Zn(n,gn(r))}function cr(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=X(n)?n:en(n)).length;a<f;a++)null!=(t=n[a])&&i<t&&(i=t);else e=_n(e,r),Yn(n,function(n,r,t){((u=e(n,r,t))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i}function lr(n,r,t){if(null==r||t)return X(n)||(n=en(n)),n[jn(n.length-1)];var e=(X(n)?pn:en)(n),n=Q(e);r=Math.max(Math.min(r,n),0);for(var u=n-1,i=0;i<r;i++){var o=jn(i,u),a=e[i];e[i]=e[o],e[o]=a}return e.slice(0,r)}function sr(i,r){return function(t,e,n){var u=r?[[],[]]:{};return e=_n(e,n),Yn(t,function(n,r){r=e(n,r,t);i(u,n,r)}),u}}var pr=sr(function(n,r,t){q(n,t)?n[t].push(r):n[t]=[r]}),hr=sr(function(n,r,t){n[t]=r}),a=sr(function(n,r,t){q(n,t)?n[t]++:n[t]=1}),r=sr(function(n,r,t){n[t?0:1].push(r)},!0),vr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function yr(n,r,t){return r in t}var gr=b(function(n,r){var t={},e=r[0];if(null==n)return t;U(e)?(1<r.length&&(e=dn(e,r[1])),r=tn(n)):(e=yr,r=Rn(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),F=b(function(n,t){var r,e=t[0];return U(e)?(e=Wn(e),1<t.length&&(r=t[1])):(t=Zn(Rn(t,!1,!1),String),e=function(n,r){return!or(t,r)}),gr(n,e,r)});function dr(n,r,t){return f.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function mr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:dr(n,n.length-r)}function br(n,r,t){return f.call(n,null==r||t?1:r)}var _r=b(function(n,r){return r=Rn(r,!0,!0),er(n,function(n){return!or(r,n)})}),R=b(function(n,r){return _r(n,r)});function jr(n,r,t,e){j(r)||(e=t,t=r,r=!1),null!=t&&(t=_n(t,e));for(var u=[],i=[],o=0,a=Q(n);o<a;o++){var f=n[o],c=t?t(f,o,n):f;r&&!t?(o&&i===c||u.push(f),i=c):t?or(i,c)||(i.push(c),u.push(f)):or(u,f)||u.push(f)}return u}t=b(function(n){return jr(Rn(n,!0,!0))});function wr(n){for(var r=n&&cr(n,Q).length||0,t=Array(r),e=0;e<r;e++)t[e]=fr(n,e);return t}An=b(wr);function xr(n,r){return n._chain?rn(r).chain():r}function Ar(t){return Yn(on(t),function(n){var r=rn[n]=t[n];rn.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),xr(this,r.apply(rn,n))}}),rn}Yn(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];rn.prototype[r]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0]),xr(this,n)}}),Yn(["concat","join","slice"],function(n){var r=e[n];rn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),xr(this,n)}});An=Ar({__proto__:null,VERSION:n,restArguments:b,isObject:_,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:j,isElement:function(n){return!(!n||1!==n.nodeType)},isString:x,isNumber:A,isDate:S,isRegExp:O,isError:M,isSymbol:E,isMap:B,isWeakMap:N,isSet:D,isWeakSet:I,isArrayBuffer:k,isDataView:T,isArray:V,isFunction:U,isArguments:z,isFinite:function(n){return!E(n)&&y(n)&&!isNaN(parseFloat(n))},isNaN:L,isTypedArray:H,isEmpty:function(n){return null==n||(X(n)&&(V(n)||x(n)||z(n))?0===n.length:0===Z(n).length)},isMatch:nn,isEqual:function(n,r){return function p(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"==u||"object"==u||"object"==typeof r)&&function n(r,t,e,u){r instanceof rn&&(r=r._wrapped),t instanceof rn&&(t=t._wrapped);var i=v.call(r);if(i!==v.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return h.valueOf.call(r)===h.valueOf.call(t);case"[object ArrayBuffer]":return n(new DataView(r),new DataView(t),e,u);case"[object DataView]":var o=J(r);if(o!==J(t))return!1;for(;o--;)if(r.getUint8(o)!==t.getUint8(o))return!1;return!0}if(H(r))return n(new DataView(r.buffer),new DataView(t.buffer),e,u);var a="[object Array]"===i;if(!a){if("object"!=typeof r||"object"!=typeof t)return!1;var f=r.constructor,i=t.constructor;if(f!==i&&!(U(f)&&f instanceof f&&U(i)&&i instanceof i)&&"constructor"in r&&"constructor"in t)return!1}u=u||[];for(var c=(e=e||[]).length;c--;)if(e[c]===r)return u[c]===t;if(e.push(r),u.push(t),a){if((c=r.length)!==t.length)return!1;for(;c--;)if(!p(r[c],t[c],e,u))return!1}else{var l,s=Z(r),c=s.length;if(Z(t).length!==c)return!1;for(;c--;)if(!q(t,l=s[c])||!p(r[l],t[l],e,u))return!1}return e.pop(),u.pop(),!0}(n,r,t,e)}(n,r)},keys:Z,allKeys:tn,values:en,pairs:function(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:un,functions:on,methods:on,extend:fn,extendOwn:cn,assign:cn,defaults:ln,create:function(n,r){n=sn(n);return r&&cn(n,r),n},clone:pn,tap:function(n,r){return r(n),n},has:function(n,r){if(!V(r))return q(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=_n(r,t);for(var e=Z(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},identity:hn,constant:P,noop:function(){},property:gn,propertyOf:function(r){return null==r?function(){}:function(n){return V(n)?yn(r,n):r[n]}},matcher:vn,matches:vn,times:function(n,r,t){var e=Array(Math.max(0,n));r=dn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:jn,now:wn,escape:Sn,unescape:On,templateSettings:Mn,template:function(i,n,r){!n&&r&&(n=r),n=ln({},n,rn.templateSettings);var t,e=RegExp([(n.escape||En).source,(n.interpolate||En).source,(n.evaluate||En).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(Nn,Dn),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(i){throw i.source=a,i}r=function(n){return t.call(this,n,rn)},e=n.variable||"obj";return r.source="function("+e+"){\n"+a+"}",r},result:function(n,r,t){V(r)||(r=[r]);var e=r.length;if(!e)return U(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=U(i)?i.call(n):i}return n},uniqueId:function(n){var r=++In+"";return n?n+r:r},chain:function(n){n=rn(n);return n._chain=!0,n},iteratee:bn,partial:Tn,bind:Vn,bindAll:Fn,memoize:function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return q(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},delay:Un,defer:qn,throttle:function(t,e,u){var i,o,a,f,c=0;u=u||{};function l(){c=!1===u.leading?0:wn(),i=null,f=t.apply(o,a),i||(o=a=null)}function n(){var n=wn();c||!1!==u.leading||(c=n);var r=e-(n-c);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),c=n,f=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(l,r)),f}return n.cancel=function(){clearTimeout(i),c=0,i=o=a=null},n},debounce:function(t,e,u){function i(n,r){o=null,r&&(a=t.apply(n,r))}var o,a,n=b(function(n){var r;return o&&clearTimeout(o),u?(r=!o,o=setTimeout(i,e),r&&(a=t.apply(this,n))):o=Un(i,e,this,n),a});return n.cancel=function(){clearTimeout(o),o=null},n},wrap:function(n,r){return Tn(r,n)},negate:Wn,compose:function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:zn,once:Ln,findKey:Pn,findIndex:Kn,findLastIndex:Jn,sortedIndex:$n,indexOf:Hn,lastIndexOf:Qn,find:Xn,detect:Xn,findWhere:function(n,r){return Xn(n,vn(r))},each:Yn,forEach:Yn,map:Zn,collect:Zn,reduce:rr,foldl:rr,inject:rr,reduceRight:tr,foldr:tr,filter:er,select:er,reject:function(n,r,t){return er(n,Wn(_n(r)),t)},every:ur,all:ur,some:ir,any:ir,contains:or,includes:or,include:or,invoke:ar,pluck:fr,where:function(n,r){return er(n,vn(r))},max:cr,min:function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=X(n)?n:en(n)).length;a<f;a++)null!=(t=n[a])&&t<i&&(i=t);else e=_n(e,r),Yn(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},shuffle:function(n){return lr(n,1/0)},sample:lr,sortBy:function(n,e,r){var u=0;return e=_n(e,r),fr(Zn(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")},groupBy:pr,indexBy:hr,countBy:a,partition:r,toArray:function(n){return n?V(n)?f.call(n):x(n)?n.match(vr):X(n)?Zn(n,hn):en(n):[]},size:function(n){return null==n?0:(X(n)?n:Z(n)).length},pick:gr,omit:F,first:mr,head:mr,take:mr,initial:dr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:br(n,Math.max(0,n.length-r))},rest:br,tail:br,drop:br,compact:function(n){return er(n,Boolean)},flatten:function(n,r){return Rn(n,r,!1)},without:R,uniq:jr,unique:jr,union:t,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Q(n);e<u;e++){var i=n[e];if(!or(r,i)){for(var o=1;o<t&&or(arguments[o],i);o++);o===t&&r.push(i)}}return r},difference:_r,unzip:wr,transpose:wr,zip:An,object:function(n,r){for(var t={},e=0,u=Q(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t=t||(r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(f.call(n,e,e+=r));return t},mixin:Ar,default:rn});return An._=An});