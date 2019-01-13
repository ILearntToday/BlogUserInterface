const allowedAssignments = {
  defaultProps: true,
  propTypes: true,
  contextTypes: true,
  state: true,
};

module.exports = function(context) {
  return {
    'AssignmentExpression': function(node) {
      const property = node.left.property && node.left.property.name;
      const type = node.left.property && node.left.object.type;
      if (!allowedAssignments[property] && type !== 'ThisExpression') {
        context.report({
          loc: node.loc,
        }, 'Unexpected assignment, Assignment to variables not allowed');
      }
    }
  };
};
