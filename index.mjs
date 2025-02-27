//const express = require('express')
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/accounts', function (req, res) {
  res.send('Aqui se listaran las cuentas')
})


app.listen(3002, function () {
  console.log('Example app listening on port 3001!')
})
