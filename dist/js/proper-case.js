"use strict";var titleCase=require("title-case");module.exports=function(e){var t=e.indexOf(" ")===-1,r={};e.split("").forEach(function(e,t){" "!==e&&"'"!==e&&"-"!==e||(r[t]=e)});var i=titleCase(e);if(Object.keys(r).length){var n=i.split("");return n.forEach(function(e,t,i){" "===e&&(i[t]=r[t])}),n.join("")}var a=i.indexOf(" ")!==-1;return t&&a&&(i=i.replace(" ","")),i};