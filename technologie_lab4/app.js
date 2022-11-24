
const express = require('express');
const ejs = require('ejs');
const config = require('./config').config;

const app = express();

app.use('/img', express.static(__dirname+'/img'))

app.set('view engine', 'html');
app.engine('html',ejs.renderFile);

app.get('/', (request, response) => {
   response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu'})
})
app.listen(config.port, function () {
   console.info(`Server is running at port 3000`);
});

