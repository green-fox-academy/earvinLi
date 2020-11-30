const massHeight = {
  mass: 58,
  height: 1.72,
};

const addBMI = (obj) => {
  obj['BMI'] = (obj.mass / Math.pow(obj.height, 2)).toFixed(2);
  return obj
};

console.log(addBMI(massHeight));
