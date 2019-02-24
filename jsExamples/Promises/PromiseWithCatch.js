let promise = new Promise(function(resolve, reject) {
  reject("This promise is Rejected !!");
});

promise
  .then(function() {
    console.log("In then block");
  })
  .catch(function(reject) {
    console.log(reject);
  });
