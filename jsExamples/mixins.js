// const jsSkills = {
//   knowsJS() {
//     return true;
//   }
// };

// const engDegree = {
//   hasDegree() {
//     return true;
//   }
// };

// const jsEngineer = Object.assign({}, jsSkills, engDegree);
// console.dir(jsEngineer);

// console.log(jsEngineer.hasDegree());
// console.log(jsEngineer.knowsJS());
// console.log(this);

// let name = "shradha";
// console.log(`Hi ${name}`);

//var and let

function test() {
  var a = 1;
  console.log("Inside test value of a:", a);
  let b = 100;
  console.log("Inside test value of b:", b);
}
console.log("Outside function:", a);
//console.log("value of b:", b);

test();
