const x = 100;
function doSumOfTwoNumber(x, y){
  const c = x + y;
  console.log(c);
}

console.log(module.exports);
//module.exports = { x , doSumOfTwoNumber};
// There is one more way to write this as module.export is a empty object initially.
module.exports.x = x;
module.exports.doSumOfTwoNumber = doSumOfTwoNumber;
// Above will also work

