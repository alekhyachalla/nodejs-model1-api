

let router = require('express').Router();
let MongoClient =  require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";


router.get('/get', (req, res, next) => {
    // res.json({
    //     message: 'Get request'
    // });
    qname = req.query.name;
    console.log(qname);
    //console.log("Your name is "+ qname);
    var get_result;
   
//    MongoClient.connect(url, function(err, db) {
//        if (err) throw err;
//        var dbo = db.db("mydb3");
//        var query = { name: qname };
//        dbo.collection("customers").find(query).toArray(function(err, result) {
//          if (err) throw err;
//          console.log(result);
         // get_result = result;
//          db.close();
 //       });
//      });
      //res.send(get_result);
      res.json({
        message: 'returning documents',
        
      });
      res.end();


    // var html='';
    // html +="<body>";
    // html += "<form action='/thank'  method='post' name='form1'>";
    // html += "</br>Name:</p><input type= 'text' name='name'></br>";
    // html += "</br>Email:</p><input type='text' name='email'></br>";
    // html += "</br><input type='submit' value='submit'></br>";
    // html += "</br><INPUT type='reset'  value='reset'></br>";
    // html += "</form>";
    // html += "</body>";
    // res.send(html)

    //res.body.name
});

router.post('/add', (req, res, next) => {

    console.log(req.body);

    console.log("Your name is "+req.body.name);
    obj_name= req.body.name;
    obj_email= req.body.email;
    
    //res.json({requestBody: req.body})  
    // res.json({
    //     //message: 'post call'
    //     requestbody: req.body
    // });
   
    // var myData = new User(req.body);
    // console.log(myData);
    // var url = "mongodb://localhost:27017/";
////    MongoClient.connect(url, function(err, db) {
 //       if (err) throw err;
 //       var dbo = db.db("mydb3");
 //       var myobj = { name: obj_name, email: obj_email };
  //      dbo.collection("customers").insertOne(myobj, function(err, res) {
  //        if (err) throw err;
  //        console.log("1 document inserted");
  //        db.close();
  //      });
  //    });
      res.json({
        message: '1 document inserted',
	nameapi2: obj_name,
	emailapi2: obj_email
        
      });
      res.end();
});

router.delete('/delete', (req, res, next) => {
  // res.json({
  //     message: 'Get request'
  // });
  qname = req.query.name;
  console.log(qname);
  //console.log("Your name is "+ qname);
  
  // var url = "mongodb://localhost:27017/";
//  MongoClient.connect(url, function(err, db) {
//      if (err) throw err;
//      var dbo = db.db("mydb3");
//      var query = { name: qname };
//      dbo.collection("customers").deleteMany(query, function(err, obj) {
//        if (err) throw err;
//        console.log(obj.result.n + " document(s) deleted");
//        
//        db.close();
//      });
//    });
    
    res.end();


  // var html='';
  // html +="<body>";
  // html += "<form action='/thank'  method='post' name='form1'>";
  // html += "</br>Name:</p><input type= 'text' name='name'></br>";
  // html += "</br>Email:</p><input type='text' name='email'></br>";
  // html += "</br><input type='submit' value='submit'></br>";
  // html += "</br><INPUT type='reset'  value='reset'></br>";
  // html += "</form>";
  // html += "</body>";
  // res.send(html)

  //res.body.name
});



router.get('/:customerid', (req, res, next) => {
    const id = req.params.productId;

 //   var url = "mongodb://localhost:27017/";
 //   MongoClient.connect(url, function(err, db) {
 //       if (err) throw err;
 //       var dbo = db.db("mydb");
//        var query = { id: id };
//        dbo.collection("customers").find(query).toArray(function(err, result) {
//          if (err) throw err;
//          console.log(result);
//          db.close();
 //       });
//      });
    // res.json({
    //     message: 'You passed an ID',
    //     id: id
    // });

});


module.exports = router;
