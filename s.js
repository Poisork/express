const express = require('express')

const app = express()

app.get('/', (req,res) => {
  res.send('<h2>hello dick</h2>')
})

app.get('/about', (req,res) => {
  res.send('<h2>about</h2>')
})

app.get('/contact', (req,res) => {
  res.send('<h2>contact</h2>')
})


app.listen(3000)