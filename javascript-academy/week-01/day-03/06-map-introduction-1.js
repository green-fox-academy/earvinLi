'use strict';

const aLovelyMap = new Map([
  [97, 'a'],
  [98, 'b'],
  [99, 'c'],
  [65, 'A'],
  [66, 'B'],
  [67, 'C'],
]);

console.log(aLovelyMap);
console.log(aLovelyMap.keys());
console.log(aLovelyMap.values());

aLovelyMap.set(68, 'D');

console.log(aLovelyMap.size);
console.log(aLovelyMap.get(99));

aLovelyMap.delete(97);

console.log(aLovelyMap.has(100));

aLovelyMap.clear();
