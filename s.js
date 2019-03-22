const express = require("express");
const app = express();
 // static html 
// app.use(function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });
app.get("/",function (request, response) {
  response.send('hello')
});

app.use("/home",function (request, response) {
  response.status(404).send(`Ресурс не найден`);
});
app.listen(3000);