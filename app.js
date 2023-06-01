const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const pug = require('pug');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'views')));

// About Me
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Resume
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'resume.html'));
});

// Projects
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

// Contact Me
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});