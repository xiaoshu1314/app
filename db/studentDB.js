var pool=require('./pool');
 
 function findAll(handler){
 pool.getConnection(function(err,connection){
   if(err){
       throw err
    } else{
         var sql='select * from xk_student';
         connection.query(sql,function(err,results){
                 if(err){
                    throw err
                 }else{
                    handler.call(this,results)
                 }
                 connection.release();
                 })
     } 
 })
  }
  // function findById(id,handler){
  //        pool.getConnection(function(err,connection){
  //                if(err){
  //                throw err;
  //                } else{
  //      //          handler.call(this.results);
  //                var sql ='select * from xk_student where id = ?';
  //                connection.query(sql,[id],function(err,results){
  //                   if (err) {
  //                     throw err;
  //                   }else{
  //                     handler.call(this,results)
  //                   }
  //                     connection.release();
  //                })
  //                }
  //         })
  // }
  // function deleteById(id,handler){
  //   pool.getConnection(function(err,connection){
  //     if (err) {
  //       throw err;
  //     }else {
  //       var sql ="delete from students where id = ?";
  //       connection.query(sql,[id],function(err,results){
  //         if (err) {
  //           throw err;
  //         }else {
  //           handler.call(this,results)
  //         }
  //         connection.release();
  //       })

  //     }
  //   })
  // }
// module.exports={
//     findAll:findAll,
//     deleteById:deleteById,
//     findById:findById,
// }

module.exports.findAll=findAll;