const express = require('express')
const fs = require('fs')
const app = express()

app.use((request,response,next) => {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
  console.log(data);
  fs.appendFile("server.log", data + "\n", function(){});
  next();
})

app.use("/about", function(request, response, next){
     
  console.log("About Middleware");
  response.send("About Middleware");
});

app.get('/', (req,res) => {
  console.log('core')
  res.send('<h2>Hello</h2>')
})


app.listen(3000)