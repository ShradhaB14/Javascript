let add = (...args) => {
  console.log(args);
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
    result = result + args[i];
    console.log(result);
  }
  return result;
};

document.write(add(1, 2, 3));
