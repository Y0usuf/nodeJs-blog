const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

const port = 3000;
const hostName = '127.0.0.1';   

mongoose.connect('mongodb://127.0.0.1:27017/node_blog', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});


// statik dosyalarin yerini belirtiyoruz
app.use(express.static('public'));

// view engine ile alakali yaptiklarimiz. uzantisini daha kisa yaptik.
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


const main = require('./routes/main');
app.use(main)


app.listen(port, hostName, () => {
    console.log('Server on');
})