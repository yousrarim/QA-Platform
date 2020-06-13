var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const routeproj = require('./routes/project_controller');
const routeces = require('./routes/ces_controller');
const routecss = require('./routes/css_controller');
const routeaudit = require('./routes/audit_controller');
const routepgcrr = require('./routes/pgcrr_controller');
const routepdri = require('./routes/pdri_controller');
const routevs = require('./routes/vs_controller');
const routepin = require('./routes/pin_controller');

//port no
const port = 3000;

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1/dms',{ useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log('Connected to database ');
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
    console.log('Failed to connect to database: '+ err);
    }
})

//add midleware
app.use(cors({origin : 'http://localhost:4200'}));

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', routeproj);
app.use('/api', routeces);
app.use('/api', routecss);
app.use('/api', routepdri);
app.use('/api', routeaudit);
app.use('/api', routepgcrr);
app.use('/api', routevs);
app.use('/api', routepin);

//testing server
app.get('/',(req,res)=>{
     res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port:'+ port);
});