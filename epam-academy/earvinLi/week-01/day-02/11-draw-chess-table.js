// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
for (let i = 1; i <= 8; i++) {
  if (i % 2 !== 0) {
    console.log('% % % % ');
    continue;
  }
  console.log(' % % % %');
}
