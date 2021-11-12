const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const hostName = '127.0.0.1';   

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'site/index.html'));
})

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'site/about.html'));
})

app.get('/blog.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'site/blog.html'));
})

app.listen(port, hostName, () => {
    console.log('Proje ayağa kalktı.');
})