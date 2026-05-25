/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = []
    for (let ch of path.split('/')) {
        if (ch === '' || ch === '.') continue;

        if (ch === '..') {
            if (stack) {
                stack.pop();
            }
        } else {
            stack.push(ch)
        }
    }
    return '/' + stack.join('/')
};