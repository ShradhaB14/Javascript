let user = {
  name: "john",
  years: 30
};

let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

//Ass-2

let salaries = {
  john: 100,
  pete: 350,
  Mary: 250,
  shra: 50
};

let topSalary = function(salaries) {
  console.log(salaries);
  let maxSalary = 0;
  let maxName = null;
  for (const [key, value] of Object.entries(salaries)) {
    if (maxSalary < value) {
      maxSalary = value;
      console.log(maxSalary);
      maxName = key;
      //   console.log(maxName);
    }
  }
  console.log("Top Paid Insan:", maxName);
};
topSalary(salaries);
