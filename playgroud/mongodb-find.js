const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect');
  }
  console.log('connected..');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5b29cc4fc0c291d5de1cc584')}).toArray().then((docs)=>{
  // console.log('Todos');
  // console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('error '+err);
  // });
  // db.collection('Todos').find().count().then((count)=>{
  // console.log(`Todos count: ${count}`);
  //
  // },(err)=>{
  //   console.log('error '+err);
  // });
  db.collection('Users').find({name:'pooja'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('error '+err);
  });
  //db.close();
});
