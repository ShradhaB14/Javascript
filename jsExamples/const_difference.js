let difference = () => {
  const PI = 3.14;
  Object.defineProperty(typeof global === "object" ? global : window, "PI2", {
    value: 3.14,
    enumerable: true,
    writable: false,
    configurable: false
  });
  //console log using template string
  console.log(
    `ES2015/ES6 const value is ${PI} and Traditional const value is ${PI2}`
  );
};

difference();
