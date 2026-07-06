function checkBrackets(str) {
  const stack = [];
  const normalizeStr = normalizeString(str);
  const braces = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  for (const brace of normalizeStr) {
    if (braces[brace]) {
      stack.push(brace);
    } else {
      const last = stack.pop();
      if (braces[last] !== brace) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBrackets("{Hi(good day)!}"));

function normalizeString(str) {
  return [...str].filter((ch) => "[]{}()".includes(ch));
}
