const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const srvURL = 'localhost'
const routes = path.join(__dirname, 'routes');


app.get('/', (req, res) => {
  
  res.sendFile(path.join(routes, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server rodando em: ${srvURL}:${PORT}`);
  
});

