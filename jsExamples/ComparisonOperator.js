//(==) this oprator checks the value and returns a boolean value accordingly.
//(===) this operator checkss the value also it checks the datatype of the given variable and returns boolean

let testCompare = () => {
  var value = 10;
  if (value == 10) {
    document.write("Comparison using '==' and is true ");
  } else document.write("false!!");
  document.write("\n");
  if (value === "10") {
    document.write("Comparison using '===' and is true ");
  } else document.writeln("\nnot equal!!");
};

testCompare();
