const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title : 'Home' })
})

app.get('/menu-1', function (req, res) {
    res.render('menu-1', { title : 'Menu 1' })
})

app.get('/menu-2', function (req, res) {
    res.render('menu-2', { title : 'Menu 2' })
})

app.get('/menu-3', function (req, res) {
    res.render('menu-3', { title : 'Menu 3' })
})

app.get('/menu-4', function (req, res) {
    res.render('menu-4', { title : 'Menu 4' })
})

app.get('/menu-5', function (req, res) {
    res.render('menu-5', { title : 'Menu 5' })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))