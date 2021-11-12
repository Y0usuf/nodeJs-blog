const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const hostName = '127.0.0.1';   

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, hostName, () => {
    console.log('Proje ayağa kalktı.');
})