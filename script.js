const greet = function (name) {
  return (
    "Hello " +
    name.substring(0, 1).toUpperCase() +
    name.slice(1).toLowerCase() +
    "!"
  );
};
console.log(greet("riley"));
