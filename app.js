const app =require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config=require('./config/config')
const cors=require('cors');

const product=require('./routes/product');



mongoose.connect(config.database.path,(err)=>{
    console.log("connect to database");
});


//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//cors
app.use(cors());


const port=process.env.PORT || 3000;


app.use('/api/products', product);


app.get('/',(req,res)=>{
    res.send('home page');
})




app.listen(port, (err)=>{
    if(err) throw err;
    console.log('listenning on port '+port);
})