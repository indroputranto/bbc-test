const express = require('express');
const config = require('./config');
const fs = require('fs');
const https = require('https');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/dist'));

require('./app')(app);

app.listen(config.http_port, () => {
	console.log(`Server running at port : ${config.http_port}`);
});
https.createServer(app).listen(config.https_port, () => {
  console.log(`Example app listening on port ${config.https_port}`)
});

module.exports = app;