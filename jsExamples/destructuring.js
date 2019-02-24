//seperates the array and places it in different variables
//note:left side variables must be in square brackets
let name = ["Shradha", "bhandari"];
let [fulname] = name;
console.log(fulname);

let [fname, lname] = name;
console.log(fname, lname);

//if you want to skip any element from the array then mention commas(,) to skip the element
//in this example it will skip first 2 fruits and takes the third element  and skips the rest of the elements.
//to get the remaining elements use rest operator
let fruits = ["orange", "apple", "grapes", "banana", "dalimb"];
let [, , myFav] = fruits;
console.log(myFav);
let [, , ...rest] = fruits;
console.log(rest);

//destructuring with objects

let person = {
  name1: "Dhruvita",
  age1: 22,
  gender1: "female"
};
//let { name1, age1, gender1 } = person;
//console.log(name1);

//destructuring using equality and colon

let { name1: n, age1 = a, gender1: g } = person;
console.log(g);
