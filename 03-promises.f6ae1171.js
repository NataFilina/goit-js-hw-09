!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i={form:document.querySelector(".form")};function l(e,n){return new Promise((function(o,t){Math.random()>.3?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))}i.form.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(i.form.elements.delay.value),t=Number(i.form.elements.step.value),r=Number(i.form.elements.amount.value),f=[l(1,o)],a=1;a<r;a+=1)f.push(l(a+1,a*t+o));Promise.allSettled(f).then((function(n){n.forEach((function(n,r){setTimeout((function(){"fulfilled"===n.status?e(u).Notify.success(n.value):e(u).Notify.failure(n.reason)}),r*t+o)}))}))}))}();
//# sourceMappingURL=03-promises.f6ae1171.js.map
