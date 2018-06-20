const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    console.log(err);
    return console.log('unable to connect');
  }
  console.log('connected..');
  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err)
  //   {
  //     return console.log('unable to insert');
  //   }
  //
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })
  db.collection('Users').insertOne({
    name:'pooja',
    age:25,
    location:'gurgaon',
  },(err,result)=>{
    if(err)
    {
      return console.log('unable to insert user');
    }

   console.log(result.ops[0]._id.getTimestamp());
    //console.log(JSON.stringify(result.ops,undefined,2));
  })
  db.close(
    
  );
});
