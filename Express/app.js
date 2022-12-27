const express=require('express')
const path=require('path')
const App=express();
const userRouter =require('./Routes/userRoute');
const SpendRouter =require('./Routes/spendRoute');

App.use(express.json())
App.use(userRouter);
App.use(SpendRouter);
App.use(express.urlencoded({extended:false}));
App.use(express.static(path.join(__dirname,'public')));

module.exports=App;