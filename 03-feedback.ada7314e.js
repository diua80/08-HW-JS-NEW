function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var f=new Error("Cannot find module '"+e+"'");throw f.code="MODULE_NOT_FOUND",f}).register=function(e,o){r[e]=o},o.parcelRequired7c6=n);var f=n("9OeKo"),a=n("5uEKZ");const l={form:document.querySelector(".feedback-form")};console.log(l.form);let d={};l.form.addEventListener("input",e(f)((function({target:e}){const{name:o,value:t}=e;d[o]=t,a.default.save("feedback-form-state",d)}),500)),l.form.addEventListener("submit",(function(e){if(e.preventDefault(),!d.email||!d.message)return void alert("Заповніть усі поля, будь ласка!");l.form.reset(),console.log(d),d={},a.default.remove("feedback-form-state")})),function(){const e=a.default.load("feedback-form-state");if(e)for(let o in e)l.form[o].value=e[o],d[o]=e[o]}();
//# sourceMappingURL=03-feedback.ada7314e.js.map