var MAX_LENGTH = 20;
var regex = new RegExp('describe|it|expect');

function includesTests(comment) {
  var lines = comment.split('\n');
  return lines.some((str) => {
    return str.match(regex);
  });
}

function getLine(line) {
  return line.substr(0, MAX_LENGTH) + ' ...';
}

module.exports = function (context) {
  'use strict';

  var comments = context.getAllComments();

  comments
    .filter((comment) => {
      return includesTests(comment.value.trim());
    })
    .forEach((commentedTest) => {
      var test = getLine(commentedTest.value.trim());
      var lines = commentedTest.loc.end.line - commentedTest.loc.start.line + 1;
      var linesMsg = '(' + lines + ' line' + (lines === 1 ? '' : 's') + ')';
      context.report({
        loc: commentedTest.loc
      }, 'commented test ' + test + ' ' + linesMsg);
    });

  return {};
};
