const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const router = require('./routes/web');;
const port = process.env.PORT || 3000 ;
const publicPath = path.join(__dirname,'/public');
const viewsPath = path.join(__dirname,'/resources/templates/views');
const partialPath = path.join(__dirname,'/resources/templates/partials');
const mongoose = require('mongoose');


// Database Connection
mongoose.connect("mongodb://localhost:27017/pizza2",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=>
{
    console.log("Database Mongo Connected");
}).catch((e)=>
{
    console.log(e);
})


//assests
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath));
hbs.registerPartials(partialPath);
app.use(express.json());
app.set('views',viewsPath);
app.set("view engine", 'hbs');
app.use(router);



//connection
app.listen(port,()=>
{
    console.log(`Listening to the port ${port}`);
})
