const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;
const hostName = '127.0.0.1';   

app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('site/index');
})

app.get('/about', (req, res) => {
    res.render('site/about');
})

app.get('/blog', (req, res) => {
    res.render('site/blog');
})


app.listen(port, hostName, () => {
    console.log('Server on');
})