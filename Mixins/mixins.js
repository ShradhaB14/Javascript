const jsSkills = {
  knowsJS() {
    return true;
  }
};

const engDegree = {
  hasDegree() {
    return true;
  }
};

const jsEngineer = Object.assign({}, jsSkills, engDegree);
console.dir(jsEngineer);

console.log(jsEngineer.hasDegree());
console.log(jsEngineer.knowsJS());
