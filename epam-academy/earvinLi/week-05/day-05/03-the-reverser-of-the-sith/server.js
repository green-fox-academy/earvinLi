const path = require('path');

const app = require('./app');

app.post('/sith', (req, res) => {
  const { text } = req.body;

  // TODO: Definitely we could have a much cleaner solution
  const sentences = text.split('. ');
  const newSentences = [];
  sentences.forEach((sentence, index) => {
    if (index === sentences.length - 1) sentence = sentence.substring(0, sentence.length - 1);
    const words = sentence.split(' ');

    for (i = 0; i < words.length - 2; i += 2) {
      if (i + 1 < words.length) {
        if (i === 0) {
          words[i] = words[i][0].toLowerCase() + words[i].slice(1);
          words[i + 1] = words[i + 1][0].toUpperCase() + words[i + 1].slice(1);
        }
        const tempWord = words[i];
        words[i] = words[i + 1];
        words[i + 1] = tempWord;
      }
    }

    newSentences.push(words.join(' '));
    const randomWordCount = Math.floor(Math.random() * (3 - 1) + 1);
    // TODO: Use a list to generate more interesting random sentences?
    for (j = 0; j < randomWordCount; j++) newSentences.push(Math.random().toString(36).replace(/[^a-z]+/g, ''));
  });

  if (!req.body.text) res.send({ error: 'Feed me some text you have to, padawan young you are. Hmmm.' });
  res.send({ sith_text: newSentences.join('. ') + '.' });
});
