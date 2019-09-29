// ES5
var coffeeES5 = function(sugar, milk) {
  if (sugar === undefined) sugar = false;
  if (milk === undefined) milk = false;

  var sugar = sugar ? ' with sugar' : '';
  var milk = milk ? ' with milk' : '';
  var and = sugar && milk ? ' and' : '';

  return 'coffee' + sugar + and + milk;
};

// ES6
const coffeeES6 = (sugar = false, milk = false) => {
  const sugarText = sugar ? 'with sugar' : '';
  const milkText = milk ? 'with milk' : '';
  const andText = sugar && milk ? 'and' : '';

  // TODO: Simplifiy the logic here？
  return !sugarText && milkText ? `coffee ${milkText}` : `coffee ${sugarText} ${andText} ${milkText}`;
};

console.log(coffeeES6(false, true));
