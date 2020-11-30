'use strict';

class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const postItOne = new PostIt('orange', 'blue', 'Idea 1');
const postItTwo = new PostIt('pink', 'black', 'Awesome');
const postItThree = new PostIt('yellow', 'green', 'Superb!');

console.log(postItOne.text);
