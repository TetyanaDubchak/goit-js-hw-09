function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var u=o("7Y9D8");const i=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');i.addEventListener("submit",(r=>{r.preventDefault();let t=0,n=Number(d.value),o=Number(l.value),i=Number(a.value);if(!(o<0||i<0||n<0))for(let r=0;r<n;r++)t+=1,o+=i,f(t,o).then((({numberOfPromise:r,delayDate:t})=>{e(u).Notify.success(`:white_check_mark: Fulfilled promise ${r} in ${t}ms`)})).catch((({numberOfPromise:r,delayDate:t})=>{e(u).Notify.failure(`:x: Rejected promise ${r} in ${t}ms`)}));function f(e,r){return new Promise(((t,n)=>{const o=Math.random()>.3;setTimeout((()=>{o?t({numberOfPromise:e,delayDate:r}):n({numberOfPromise:e,delayDate:r})}),r)}))}}));
//# sourceMappingURL=03-promises.190dbc61.js.map
