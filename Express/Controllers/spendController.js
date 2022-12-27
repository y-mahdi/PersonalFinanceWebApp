
const spendModel=require("../Models/SpendModel");
module.exports.addSpend=(req,res,next)=>{
    spendModel.create(req.body).then(data=>{
        res.send(data)
    }).catch((e)=>{
        res.send(JSON.stringify(e))
    })
    next()
}
module.exports.SpendsById=(req,res,next)=>{
    spendModel.find({user:req.params.id}).then(data=>{
        res.send(data)
    }).catch((e)=>{
        res.send(JSON.stringify(e))
    })
}
