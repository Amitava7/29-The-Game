const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login/google', (req, res) => {
  res.send(JSON.stringify({ greeting: `Hello world!` }));
});

app.listen(8080, () =>
  console.log('Express server is running on localhost:8080')
);