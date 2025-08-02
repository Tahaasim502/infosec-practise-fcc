const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`Infosec practise App started on port ${PORT}`);
});

//here we are check if process.env.port can read a port number from the environment 
//if it cannot read the port number we are going to use 3030, so its a default set