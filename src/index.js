const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

// template engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resourse/views'));
// console.log('Path: ', path.join(__dirname, 'resourse/views'))


//route 

app.get('/', (req, res) => {
    return res.render('home');
})

app.get('/search', (req, res) => {
    return res.render('search');
})

app.get('/about', (req, res) => {
    return res.render('about');
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}`))
