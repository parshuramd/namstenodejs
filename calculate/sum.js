// modules protects variables and functions by default from leaking

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = { calculateSum };
