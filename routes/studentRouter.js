 var express =require('express');
 var studentDB=require('../db/studentDB');

 var studentRouter=express.Router();
 studentRouter.get('/findAll',function(req,resp){
 	//resp.send('ff');
 	studentDB.findAll(function(results){
 		resp.json(results)
 	})

 });
 studentRouter.post('/login',function(req,resp){
 	resp.send('hh');
 });
module.exports=studentRouter;