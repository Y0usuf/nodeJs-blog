const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('site/index');
})

route.get('/about', (req, res) => {
    res.render('site/about');
})

route.get('/blog', (req, res) => {
    res.render('site/blog');
})

route.get('/contact', (req, res) => {
    res.render('site/contact');
})

route.get('/login', (req, res) => {
    res.render('site/login');
})

route.get('/register', (req, res) => {
    res.render('site/register');
})

route.get('/post/new', (req, res) => {
    res.render('site/addpost');
})

route.post('/post/test', (req, res) => {
    res.render('');
})



module.exports = route;