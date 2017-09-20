 var mysql=require('mysql');
 
 var pool =global.pool;
  if (!pool) {
   pool=mysql.createPool({
     host:'127.0.0.1',
     database:'web1702',
     user:'root',
     password:'root',
     port:'3306'

   })
    global.pool=pool;
  }

 
 
 module.exports=pool
