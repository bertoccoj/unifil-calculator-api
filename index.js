// create an app instance using express
const express = require('express');
const app = express();
const port = 3000;
// use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add', (req, res) => {
  const arg1 = parseInt(req.query.arg1);
  const arg2 = parseInt(req.query.arg2);
  const sum = arg1 + arg2;
  res.send(`The sum of ${arg1} and ${arg2} is ${sum}`);
});

app.get('/subtract', (req, res) => {
  const arg1 = parseInt(req.query.arg1);
  const arg2 = parseInt(req.query.arg2);
  const sum = arg1 - arg2;
  res.send(`The difference of ${arg1} and ${arg2} is ${sum}`);
});

app.get('/multiply', (req, res) => {
  const arg1 = parseInt(req.query.arg1);
  const arg2 = parseInt(req.query.arg2);
  const sum = arg1 * arg2;
  res.send(`The product of ${arg1} and ${arg2} is ${sum}`);
});

app.get('/divide', (req, res) => {
  const arg1 = parseInt(req.query.arg1);
  const arg2 = parseInt(req.query.arg2);
  const sum = arg1 / arg2;
  res.send(`The quotient of ${arg1} and ${arg2} is ${sum}`);
});

// listen to port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
