const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect');
  }
  console.log('connected..');


  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  // console.log(result);
  // },(err)=>{
  //   console.log('error '+err);
  // });
  // db.collection('Todos').deleteOne({text:'delete one'}).then((result)=>{
  // console.log(result);
  // },(err)=>{
  //   console.log('error '+err);
  // });
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  // console.log(result);
  // },(err)=>{
  //   console.log('error '+err);
  // });
  db.collection('Users').findOneAndDelete({_id:new ObjectID("5b28ff2b599e515a3bae7dd9")}).then((result)=>{
  console.log(result);
  },(err)=>{
    console.log('error '+err);
  });
  //db.close();
});
