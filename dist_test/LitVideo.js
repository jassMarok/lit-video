parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"MkbE":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return o(t)||i(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}!function(r){var i,o,n;void 0===r.litVideo&&(r.litVideo=(o={target:void 0,wrapperClass:void 0,videoURL:void 0,width:void 0,height:void 0,youtube:!1,vimeo:!1},n={wrapperClass:["video-lit","video-lit-wrapper"],iframeWidth:560,iframeHeight:315},(i={}).init=function(t){try{if(i.resetSettings(),!i.isObject(t)||i.checkObjectParams(t))throw"Object Expected to initialize LitVideo";var e=i.createVideoWrapper(),r=document.querySelector(o.target),n=i.createIframe();e.appendChild(n),r.appendChild(e)}catch(a){console.error("Error: "+a)}},i.checkObjectParams=function(t){if("string"!=typeof t.target||!t.target.length)throw"Target could not be found in the object";if(!(0!=t.youtube&&void 0!==t.youtube||0!=t.vimeo&&void 0!==t.vimeo))throw"Lit Video requires a vendor flag pass -> {youtube:true} or {vimeo:true} in options object";i.setTarget(t.target);var e=i.extractVideoURLFromTargetElement();if(!e.length||void 0===e)return"Error no url attrbute detected";void 0!==t.width&&i.setIframeWidth(t.width),void 0!==t.height&&i.setIframeHeight(t.height),i.setVideoURL(e)},i.createVideoWrapper=function(){var t,r,i=document.createElement("div");return void 0===o.wrapperClass?((r=i.classList).add.apply(r,e(n.wrapperClass)),i):((t=i.classList).add.apply(t,e(o.wrapperClass)),i)},i.extractVideoURLFromTargetElement=function(){var t=document.querySelector(o.target),e=t.attributes["data-video-url"].value;if(0==e.length||void 0===e)throw"Missing video url on target ".concat(o.target," element");return t.attributes["data-video-url"].value},i.createIframe=function(){var t=document.createElement("iframe"),e={src:o.videoURL,width:void 0===o.width?n.iframeWidth:o.width,height:void 0===o.height?n.iframeHeight:o.height};return i.setAttributes(t,e),t},i.setTarget=function(t){return o.target=t,o.target},i.setVideoURL=function(t){return o.videoURL=t,o.videoURL},i.setIframeWidth=function(t){return o.width=t,o.width},i.setIframeHeight=function(t){return o.height=t,o.height},i.setDefaultIframeWidth=function(t){return n.iframeWidth=t,n.iframeWidth},i.setDefaultIframeHeight=function(t){return n.iframeHeight=t,n.iframeHeight},i.isObject=function(e){return"object"===t(e)},i.setAttributes=function(t,e){for(var r in e)t.setAttribute(r,e[r])},i.resetSettings=function(){o={target:void 0,wrapperClass:void 0,videoURL:void 0,width:void 0,height:void 0}},i))}(window);
},{}]},{},["MkbE"], null)
//# sourceMappingURL=/LitVideo.map