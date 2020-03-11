require('./models/db'); //mongoDB Connection

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const dataController = require('./controllers/dataController'); //init DataController


var app = express(); //define express as app for easier calls

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('views', path.join(__dirname, '/views/')); //define views directory

app.engine('hbs', exphbs({
    extname: 'hbs', //.hbs extension registration
    defaultLayout: 'mainLayout', //mainLayout.hbs
    layoutsDir: __dirname + '/views/layouts' 
}));
app.set('view engine', 'hbs'); //set view engine to handlebars


app.listen(3000, () => { 
    console.log('Server Started at port: 3000'); // Start http server
});

app.use('/', dataController); // route "/" to dataController
app.use(express.static('public'))

