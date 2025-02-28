const data = require("./xyz.js"); // one module into another
const { calculateSum, calculateMultiply } = require("./calculate");

calculateSum(2, 5);
calculateMultiply(2, 5);
console.log("Hello");
