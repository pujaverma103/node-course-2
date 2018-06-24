const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect');
  }
  console.log('connected..');

  db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5b29d446c0c291d5de1cc589")},{
  $set:{

    completed:true
  }},{
    returnOriginal:false
  }).then((result)=>{
  console.log(result);
  },(err)=>{
    console.log('error '+err);
  });
  //db.close();
});
