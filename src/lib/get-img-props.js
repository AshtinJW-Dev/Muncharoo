function isStaticRequire(node) {
  return node && node.type === 'CallExpression' && node.callee.name === 'require';
}

// Example usage
const exampleNode = { type: 'CallExpression', callee: { name: 'require' } };
getImgProps(exampleNode);

function getImgProps(node) {
  console.log('getImgProps function called');
  return node && node.type === 'ImportDeclaration';
}

function getImgProps(node) {
  if (!node) {
    throw new TypeError('Node is null or undefined');
  }
  // ...existing code...
  if (isStaticRequire(node) || isStaticImport(node)) {
    // ...existing code...
  }
  // ...existing code...
}
