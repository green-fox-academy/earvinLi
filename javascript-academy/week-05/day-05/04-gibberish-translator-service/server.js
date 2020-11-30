const path = require('path');

const app = require('./app');

app.post('/translate', (req, res) => {
  const {
    text,
    lang: language,
  } = req.body;

  // TODO: How about upper case letters appear inside a sentence?
  const words = text.toLowerCase().split(' ');
  const newWords = [];

  words.forEach(word => {
    const newChars = [];

    word.split('').forEach(char => {
      // TODO: Use regex to simplify the logic
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

  if (!text || !language) res.send({ error: 'I can\'t translate that!' });
  res.send({ translated: newSentence[0].toUpperCase() + newSentence.slice(1), lang: 'gibberish' });
});
