// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let timeStart;

let candyCount = 0;
let lollypopCount = 3;
let candyIncreaseRate = (lollypopCount - (lollypopCount % 10)) / 10;

const createCandiesButton = document.querySelector('.create-candies');
const buyLollypopsButton = document.querySelector('.buy-lollypops');
const candyRainButton = document.querySelector('.candy-machine');
const candiesCol = document.querySelector('.candies');
const lollypopsCol = document.querySelector('.lollypops');
const speedCol = document.querySelector('.speed');

candiesCol.innerText = candyCount;
lollypopsCol.innerText = '🍭'.repeat(lollypopCount);

window.onload = () => {
  timeStart = Date.now();

  setInterval(() => {
    if (lollypopCount >= 10) {
      candyCount += candyIncreaseRate;
      candiesCol.innerText = candyCount;
      speedCol.innerText = (candyCount / new Date(Date.now() - timeStart).getSeconds()).toFixed(2);
    }
  }, 1000);
};

createCandiesButton.addEventListener('click', () => {
  candyCount++;
  candiesCol.innerText = candyCount;
});

buyLollypopsButton.addEventListener('click', () => {
  if (candyCount >= 100) {
    candyCount -= 100;
    lollypopCount++;
    candiesCol.innerText = candyCount;
    lollypopsCol.innerText = '🍭'.repeat(lollypopCount);
  }
});

candyRainButton.addEventListener('click', () => {
  candyIncreaseRate *= 10;
});
