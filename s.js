const express = require("express");
const app = express();
 // static html 
app.use(express.static(__dirname, + '/public'));
app.get("/",function (request, response) {
  response.send('hello')
});

app.listen(3000);