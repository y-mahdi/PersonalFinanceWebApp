const App=require('./app.js');
require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(process.env.DB_KEY,()=>{
    console.log("connected")
})

App.listen(process.env.PORT,()=>{
    console.log(`Server is listening at ${process.env.PORT}`);
})