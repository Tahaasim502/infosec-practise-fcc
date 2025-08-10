

const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet.hidePoweredBy()); //this will hide the X-Powered-By header -> so that attackers cannot see what technology is being used



//here we are check if process.env.port can read a port number from the environment 
//if it cannot read the port number we are going to use 3030, so its a default set



module.exports = app;
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Infosec practise App started on port ${port}`);
});


