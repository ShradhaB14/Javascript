// let name = "shradha";
// console.log(`Hi $name`);
var a = 1;
let test = () => {
  let b = 4;
  console.log("Inside function test value of a:", a);
  console.log("Inside function test value of b:", b);
};
console.log("Outside function test value of a:", a);
console.log("Outside function test value of b:", b);
test();
