function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const u=document.querySelector("button[type=submit]"),l=document.querySelector('input[name="delay"]'),a=(document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]'));u.addEventListener("submit",(t=>{t.preventDefault();let n=0,o=Number(a.value),i=Number(l.value),u=Number(stepElemElem.value);if(!(i<0||u<0||o<0))for(let t=0;t<o;t++)n+=1,i+=u,d(position,delay).then((({position:t,delay:n})=>{e(r).Notify.success(`:white_check_mark: Fulfilled promise ${ponumberOfPromisesition} in ${i}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`:x: Rejected promise ${n} in ${i}ms`)}));function d(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),i)}))}}));
//# sourceMappingURL=03-promises.1872f08c.js.map
