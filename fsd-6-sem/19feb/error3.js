const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost/TestDB';
MongoClient.connect(url)
.then(function(err,db){
  db.collection('Test').updateOne({
    "name":"Avinash"
  },{
    $set:{
      "name":"Avinash Mishra"
    }
  });
})
.catch(error=>alert(error.message));