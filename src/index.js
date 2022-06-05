const path = require('path');
const express = require('express');
const morgan = require('morgan');
const route = require('./routes')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// Path public static
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
console.log("__dirname",__dirname);


// Route init
route(app)

app.listen(port, ()=> console.log(`Express app listening at http://localhost:${port}`))