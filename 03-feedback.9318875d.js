!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,d=s||v||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,c,l=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function b(e){return l=e,f=setTimeout(w,t),s?m(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=a}function w(){var e=p();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-c);return v?y(n,a-(e-l)):n}(e))}function S(e){return f=void 0,d&&r?m(e):(r=o=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return b(c);if(v)return f=setTimeout(w,t),m(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(v="maxWait"in n)?g(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||c.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var O="feedback-form-state",w=document.querySelector(".feedback-form"),S={};w.addEventListener("input",e(t)((function(e){var t=e.target;console.log(t);var n=t.value,o=t.name;S[o]=n,r.save(O,S)}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),r.remove(O),e.currentTarget.reset()})),function(){var e=r.load(O);if(void 0!==e){var t=w.elements;for(var n in e)e.hasOwnProperty(n)&&(t[n].value=e[n])}}()}();
//# sourceMappingURL=03-feedback.9318875d.js.map
