const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;
const hostName = '127.0.0.1';   

// statik dosyalarin yerini belirtiyoruz
app.use(express.static('public'));

// view engine ile alakali yaptiklarimiz. uzantisini daha kisa yaptik.
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('site/index');
})

app.get('/about', (req, res) => {
    res.render('site/about');
})

app.get('/blog', (req, res) => {
    res.render('site/blog');
})

app.get('/contact', (req, res) => {
    res.render('site/contact');
})

app.get('/login', (req, res) => {
    res.render('site/login');
})

app.get('/register', (req, res) => {
    res.render('site/register');
})

app.listen(port, hostName, () => {
    console.log('Server on');
})