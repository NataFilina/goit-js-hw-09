!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",!0),e=setInterval((function(){return t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),clearInterval(e)}));var e=null}();
//# sourceMappingURL=01-color-switcher.85190158.js.map