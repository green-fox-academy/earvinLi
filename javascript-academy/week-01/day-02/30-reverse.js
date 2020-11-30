'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

const aj = [3, 4, 5, 6, 7];

const reversedAj = aj.reverse();

reversedAj.forEach(ele => console.log(ele));
