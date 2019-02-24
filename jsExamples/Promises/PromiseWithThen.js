let promise = new Promise(function(resolve, reject) {
  resolve("This promise is resolved");
});

promise.then(
  function(success) {
    console.log(success);
  },
  function() {
    console.log("Promise is rejected");
  }
);
