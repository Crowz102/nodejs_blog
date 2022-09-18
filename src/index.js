const path = require('path');
const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const morgan = require('morgan')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {
  res.render('new');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})