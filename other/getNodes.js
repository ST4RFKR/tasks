function getNodes(tree, type) {
  const result = [];

  if (tree.type === type) {
    result.push(tree);
  }

  if (Array.isArray(tree.children)) {
    for (const ch of tree.children) {
      result.push(...getNodes(ch, type));
    }
  }

  return result;
}
