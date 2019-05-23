const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Olá do Express, via VS Code' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));