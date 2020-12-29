const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.set('bufferCommands', false);


//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//Routes
app.get('/',(req,res)=>{
    res.send('Hello world');
});

//middleware
app.use('/post',() => {

    console.log("This is the paragraph");;
})

//connect to DB
const m = async ()=>{
    
    try{
        const val = await mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true , useNewUrlParser: true });
        
    }catch(ex){
        console.log(ex.message);
    }
    
     
    
}
m().then(console.log("connected"));
// mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true , useNewUrlParser: true }, (req,res) => 
//     console.log("DB")
// );
//server listing port
app.listen(3000);