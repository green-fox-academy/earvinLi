const generateRandomString = len => Math.random().toString(36).substr(13 - len);

const generateLongArray = len => {
  let targetArray = [];

  for (i = 0; i < len; i++) targetArray.push(generateRandomString(8));

  return targetArray;
}

const generateLongArrayWithObject = len => {
  // Hash Table
  let targetObject = {};

  for (i = 0; i < len; i++) targetObject[`${generateRandomString(8)}`] = 'Anything';

  return Object.keys(targetObject);
}

// console.log(generateLongArray(10));
console.log(generateLongArrayWithObject(10));
