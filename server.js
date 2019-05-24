//  OpenShift sample Node application
const express = require('express'),
      app     = express(),
      morgan  = require('morgan');

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

const port          = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
      ip            = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
      mongoURL      = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
      mongoURLLabel = "";


app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Olá do Express, /api/mensagem' });
});

app.get('/', function (req, res) {
  res.send({ express: 'Olá do Express, página inicial' });
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;