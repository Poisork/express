const express = require("express");
const app = express();
 // static html 
// app.use(express.static(__dirname, + '/public'));
app.get("/",function (request, response) {
  response.redirect("https://redirect.com")
});

app.listen(3000);