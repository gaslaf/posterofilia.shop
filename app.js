const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/detail',(req,res) => res.sendFile(path.join(__dirname,'views','detail.html')));
app.get('/shop',(req,res) => res.sendFile(path.join(__dirname,'views','shop.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')));

app.listen(port,console.log(`Corriendo en http://localhost:${port}`))