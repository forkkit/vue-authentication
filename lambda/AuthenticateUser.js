!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([,function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){return{hash:function(t,n){if(void 0===n&&t instanceof Function&&(n=t,t=void 0),!e)return n("No password provided");"string"==typeof t&&(t=new Buffer(t,"hex"));var o=function(){r.pbkdf2(e,t,1e4,64,"sha1",function(e,r){if(e)return n(e);var o="pbkdf2$10000$"+r.toString("hex")+"$"+t.toString("hex");n(null,o)})};t?o():r.randomBytes(64,function(e,r){if(e)return n(e);t=r,o()})},verifyAgainst:function(t,n){if(!t||!e)return n(null,!1);var r=t.split("$");return 4===r.length&&r[2]&&r[3]?"pbkdf2"!==r[0]||r[1]!==1e4.toString()?n("Wrong algorithm and/or iterations"):void this.hash(r[3],function(e,r){if(e)return n(e);n(null,r===t)}):n("Hash not formatted correctly")}}}},,,,,,,,function(e,t,n){var r=n(2);t.handler=function(e,t,n){if("POST"!=e.httpMethod){var o=new Error("Method not allowed");n(o,{statusCode:405,body:"Method not allowed"})}else{var f=JSON.parse(e.body);r(f.pass).hash(function(e,t){if(e)throw new Error("Something went wrong!");r(f.pass).verifyAgainst("pbkdf2$10000$78e9ee25373aa1ec58be855b9cd45300c4f9be902e8068c86281fb38a27bc3cc99e6fdcf0620a8434778e68d054cb7f389296878d733be9191d6f64ff726d169$0c5c9c93215114b9d52dde3d434c9e41a004129b7760bb0c9f42331989962067f60fa7a9e0c723a46c4bad6ef66714cea6f7d9d66860f31da6201e35d72bd5df",function(e,t){if(e)throw new Error("Something went wrong!");t?(console.log("The secret is..."),n(null,{statusCode:200,body:"The secret is.."})):(n(null,{statusCode:403,body:"WRONG PASSWORD!"}),console.log("Incorrect!"))})})}}}]));