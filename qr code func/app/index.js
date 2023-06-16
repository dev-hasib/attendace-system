const express = require('express');
const path = require('path');
const fs = require('fs')

const students = require('.')

const app = express();

app.set('view engine', 'ejs')
// app.use()
app.use(express.static('public'))

const myPath = path.join('icons', 'tick.svg')


app.get('/', (req, res) => {
    res.render('index', { icon: myPath })
})

app.get('/create', (req, res) => {
    res.render('router/createqr.ejs');
})

app.get('/:name/:roll/:attendRate/:studentType/:TeacherResRate', (req, res) => {
    res.render('router/student.ejs', { student: req.params });
})





const PORT = 3000;
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
})