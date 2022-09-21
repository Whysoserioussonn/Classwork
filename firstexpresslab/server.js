// Load express
const express = require('express');

// Create our express app
const app = express();

const PORT = process.env.PORT || 3000

app.get('/greeting/:name',  (req, res) =>
 {
  res.send('hello there ' + req.params.name);
});

app.get('/tip/:total/:tipPerc', (req, res) => {
    total = req.params.total;
    perc = req.params.tipPerc;
    res.send('The tip you should give is $' + (total *(perc * .01)))
})
// /magic

const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ]

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const random = Math.floor(Math.random() * (answers.length - 0)) + 0
    res.send(`<h1>Will I be a millionaire? ${answers[random]}</h1>`)
  })
  
  app.listen(PORT, () => console.log(`Port running on port: ${PORT}`))