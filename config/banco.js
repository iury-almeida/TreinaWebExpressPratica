var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/treinaweb', function(err, db){
   db.collection('cursos').find().sort({nome: 1}).toArray(function(err, result){
      console.log(result);
   })
})