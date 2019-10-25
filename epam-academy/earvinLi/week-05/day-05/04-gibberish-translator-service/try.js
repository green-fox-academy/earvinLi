const text = 'This is an example sentence.';

const words = text.toLowerCase().split(' ');
const newWords = [];

words.forEach(word => {
  const newChars = [];

  word.split('').forEach(char => {
    if (
      char === 'a'
        || char === 'e'
        || char === 'i'
        || char === 'o'
        || char === 'u'
    ) char = `${char}l${char}`;
    newChars.push(char);
  });

  const newWord = newChars.join('');
  newWords.push(newWord);
});

const newSentence = newWords.join(' ');
console.log(newSentence[0].toUpperCase() + newSentence.slice(1));
