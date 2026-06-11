function array(string) {
  const newStr = string.split(",").slice(1, -1).join(" ");
  return newStr.length > 0 ? newStr : null;
}
