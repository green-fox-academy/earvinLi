'use strict';

const bookMap = new Map([
  ['978-1-60309-452-8', 'A Letter to Jo'],
  ['978-1-60309-459-7', 'Lupus'],
  ['978-1-60309-444-3', 'Red Panda and Moon Bear'],
  ['978-1-60309-461-0', 'The Lab'],
]);

for (let [key, value] of bookMap) console.log(`${value} (ISBN: ${key})`);

bookMap.delete('978-1-60309-444-3');

// Find the key of a value of a map
const targetKey = [...bookMap.entries()]
  .filter(({ 1: v }) => v === 'The Lab')
  .map(([k]) => k);

bookMap.delete(targetKey[0]);

bookMap.set('978-1-60309-450-4', 'They Called Us Enemy');
bookMap.set('978-1-60309-453-5', 'Why Did We Trust Him?');

console.log(bookMap.has('478-0-61159-424-8'));
console.log(bookMap.get('978-1-60309-453-5'));
