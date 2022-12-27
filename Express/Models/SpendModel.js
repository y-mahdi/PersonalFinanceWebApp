const mongoose=require('mongoose');
 const spend=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
 })

const spendModel=new mongoose.model("spend",spend);
module.exports=spendModel;