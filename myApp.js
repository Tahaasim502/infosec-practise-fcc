const express = require('express');
const helmet = require('helmet');
const app = express();




//here we are check if process.env.port can read a port number from the environment 
//if it cannot read the port number we are going to use 3030, so its a default set



module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Infosec practise App started on port ${PORT}`);
});
