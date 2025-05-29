const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  
  res.send('Ola');
});


app.listen(PORT, () => {
  console.log('Server ON!');
  
});

