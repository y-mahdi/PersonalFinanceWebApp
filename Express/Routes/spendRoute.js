const express=require('express')
const {addSpend,SpendsById}=require('../Controllers/spendController');
const SpendRouter=express.Router();

SpendRouter.post('/api/postSpend',addSpend);
SpendRouter.get('/api/SpendById/:id',SpendsById);

module.exports=SpendRouter;