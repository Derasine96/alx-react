(()=>{"use strict";var e,n,t,r,o,a,c,s,i,u,f,p,l,d,v={993:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(942),o=t.n(r),a=t(278),c=t.n(a)()(o());c.push([e.id,"body {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,8BAA8B;IAC9B,yBAAyB;AAC7B",sourcesContent:["body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f0f0f0;\r\n}\r\n"],sourceRoot:""}]);const s=c},278:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var u=0;u<e.length;u++){var f=[].concat(e[u]);r&&c[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},942:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},292:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],u=r.base?i[0]+r.base:i[0],f=a[u]||0,p="".concat(u," ").concat(f);a[u]=f+1;var l=t(p),d={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==l)n[l].references++,n[l].updater(d);else{var v=o(d,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:v,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=t(a[c]);n[s].references--}for(var i=r(e,o),u=0;u<a.length;u++){var f=t(a[u]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}a=i}}},383:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},88:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},884:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},893:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},997:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function y(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return v[e](t,t.exports,y),t.exports}y.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return y.d(n,{a:n}),n},y.d=(e,n)=>{for(var t in n)y.o(n,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},y.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),y.nc=void 0,e=y(292),n=y.n(e),t=y(893),r=y.n(t),o=y(383),a=y.n(o),c=y(884),s=y.n(c),i=y(88),u=y.n(i),f=y(997),p=y.n(f),l=y(993),(d={}).styleTagTransform=p(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=u(),n()(l.A,d),l.A&&l.A.locals&&l.A.locals,console.log("Hello from Webpack!")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsSUFFMUUsRUNORFYsRUFBb0JXLEVBQUksQ0FBQy9ELEVBQUtvRSxJQUFVSixPQUFPSyxVQUFVQyxlQUFlQyxLQUFLdkUsRUFBS29FLEdDQWxGaEIsRUFBb0JvQixRQUFLL0YsRSxxSGRXckJ2QixFQUFVLENBQUMsR0FFUHdGLGtCQUFvQixJQUM1QnhGLEVBQVFrRixjQUFnQixJQUN4QmxGLEVBQVFrRSxPQUFTLFNBQWMsS0FBTSxRQUNyQ2xFLEVBQVF1RCxPQUFTLElBQ2pCdkQsRUFBUXVGLG1CQUFxQixJQUVoQixJQUFJLElBQVN2RixHQUtKLEtBQVcsSUFBUXVILFFBQVMsSUFBUUEsT2V0QjFEQyxRQUFRQyxJQUFJLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza181Ly4vc3JjL3N0eWxlcy5jc3M/ZTY3YiIsIndlYnBhY2s6Ly90YXNrXzUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90YXNrXzUvLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YXNrXzUvLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza181Ly4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrXzUvLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrXzUvLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2tfNS8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFza181Ly4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2tfNS8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrXzUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza181L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2tfNS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza181L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFza181L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90YXNrXzUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuY29uc29sZS5sb2coJ0hlbGxvIGZyb20gV2VicGFjayEnKTtcclxuIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuYyIsImxvY2FscyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9