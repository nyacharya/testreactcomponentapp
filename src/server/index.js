const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const data = { body: 'Hello From Express', statusCode:200,
headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-methods": "GET,HEAD,POST,OPTIONS,PUT"
} }

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express', data });
});

app.listen(port, () => console.log(`Listening on port ${port}`));