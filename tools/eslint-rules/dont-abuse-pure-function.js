var pureFunctionMap = {
  'map': 'map',
  'filter': 'filter',
  'reduce': 'reduce',
  'reduceRight': 'reduceRight',
  'find': 'find',
  'findIndex': 'findIndex',
  'sort': 'sort',
  'some': 'some',
  'every': 'every',
};

module.exports = function (context) {
  return {
    "ExpressionStatement": function (node) {
      var callee = node.expression.callee;
      var name = callee && callee.property && callee.property.name;
      if (pureFunctionMap[name] && name !== 'toLocaleString' && name !== 'toString') {
        context.report({
         loc: node.loc,
         }, 'Unexpected abuse of pure function "' + name + '". Use return value');
      }
    }
  };
};

module.schema = [];
