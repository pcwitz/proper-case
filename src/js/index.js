'use strict';
 
var titleCase = require('title-case');

// var re = /(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$/; // (?!^.*[A-Z]{2,}.*$) don't match the whole expression if there are two or more consecutive uppercase letters. ^[A-Za-z]*$ match uppercase and lowercase letters.

var properCase = function(nameAsEntered) {

  var spaceless = nameAsEntered.indexOf(' ') === -1; // titlecase makes dePaola into De Paola. we don't want the space
  var map = {};
  var nameArr = nameAsEntered.split('');
 
  nameArr.forEach(function(char, i) {
    if (char === ' ' || char === '\'' || char === '-') {
      map[i] = char;
    }
  });
 
  var titleCased = titleCase(nameAsEntered);
 
  if (Object.keys(map).length) {
    // Yes it has at least one
    var titleCasedArr = titleCased.split('');
 
 
    titleCasedArr.forEach(function(char, i, titleCasedArr) {
      if (char === ' ') {
        titleCasedArr[i] = map[i];
      }
    });
    return titleCasedArr.join('');
  } else {
    var titleSpaced = titleCased.indexOf(' ') !== -1;
    if (spaceless && titleSpaced) {
      titleCased = titleCased.replace(' ', '');
    }
    return titleCased;
  }
};
 
module.exports = {
  properCase: properCase
};
