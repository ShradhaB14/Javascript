let promise = new Promise(function(resolve, reject) {
  let var1 = "Shradha";
  let var2 = "Shradha";

  if (var1 === var2) resolve();
  else reject();
});

promise
  .then(function() {
    console.log("promise is resolved");
  })
  .catch(function() {
    console.log("promise is rejected");
  });
