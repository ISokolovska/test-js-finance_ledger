!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},i=e.parcelRequire0c43;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire0c43=i);var o={},a=i("l5bVx"),u="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,m=v||g||Function("return this")(),p=Object.prototype.toString,b=Math.max,y=Math.min,T=function(){return m.Date.now()};function x(e,t,n){var r,i,o,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function m(e){return c=e,f=setTimeout(x,t),s?g(e):a}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function x(){var e=T();if(p(e))return h(e);f=setTimeout(x,function(e){var n=t-(e-l);return d?y(n,o-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?g(e):(r=i=void 0,a)}function j(){var e=T(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return m(l);if(d)return f=setTimeout(x,t),g(l)}return void 0===f&&(f=setTimeout(x,t)),a}return t=w(t)||0,O(n)&&(s=!!n.leading,o=(d="maxWait"in n)?b(w(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},j.flush=function(){return void 0===f?a:h(T())},j}function O(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(O(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=c.test(e);return r||s.test(e)?d(e.slice(2),r?2:8):l.test(e)?NaN:+e}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return O(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),x(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".form__request"),j="callback-form-state";h.addEventListener("submit",(function(e){e.preventDefault(),S.name=e.currentTarget.message.value,S.email=e.currentTarget.email.value,console.log(S),localStorage.removeItem(j),e.currentTarget.reset()})),h.addEventListener("input",o((function(e){S[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(S))}),500));var S={name:"",email:""};!function(){if(localStorage.getItem(j))for(var e in S=JSON.parse(localStorage.getItem(j)))h.elements[e].value=S[e]}()}();
//# sourceMappingURL=index.e18e5c3b.js.map
