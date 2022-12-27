const express=require('express');
const {addUser,existUsername,updatePassword,Login} =require('../Controllers/userController');
const userRouter=express.Router();

userRouter.post('/api/postUser',addUser);
userRouter.post('/api/existUsername',existUsername);
userRouter.put('/api/updatePassword',updatePassword);
userRouter.post('/api/verifyLogin',Login);

module.exports=userRouter;