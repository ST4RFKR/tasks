var addStrings = function (num1, num2) {
  let res = [];
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    const num1ToNumber = i >= 0 ? Number(num1[i]) : 0;
    const num2ToNumber = j >= 0 ? Number(num2[j]) : 0;

    let sum = num1ToNumber + num2ToNumber + carry;
    res.unshift(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return res.join('');
};