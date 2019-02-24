//It looks same like rest opeartor but behaves in a opposite manner i.e it combines the element into a single object

let testSpread = (...args) => {
  let val2 = [99, 88, 00];
  let finalVal = [...val2, ...val, 55, 44];
  document.write(finalVal);
};
let val = [1, 4, 7];
testSpread(val);
