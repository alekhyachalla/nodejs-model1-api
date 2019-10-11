
let router = require('express').Router();
//let MongoClient =  require('mongodb').MongoClient;
//var url = "mongodb://192.168.18.154:27017/";
var request = require('request');

var querystring = require('querystring');
var http = require('http');
var fs = require('fs');


function PostCode(obj_name, obj_email) {
  // Build the post string from an object
  // var post_data = querystring.stringify({
  //     'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
  //     'output_format': 'json',
  //     'output_info': 'compiled_code',
  //       'warning_level' : 'QUIET',
  //       'js_code' : codestring
  // });

  var obj_name = obj_name;
  var obj_email = obj_email;
  
  var post_data=querystring.stringify({
    'name': obj_name,
    'email': obj_email
  });
  // An object of options to indicate where to post to
  var post_options = {
      host: '192.168.0.110',
      port: '3000',
      path: '/api/add',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          //'Content-Length': Buffer.byteLength(post_data)
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}

router.get('/get', (req, res, next) => {
    // res.json({
    //     message: 'Get request'
    // });
    qname = req.query.name;
    console.log(qname);
    //console.log("Your name is "+ qname);
    
   // below is the working code
 //   MongoClient.connect(url, function(err, db) {
 //       if (err) throw err;
 //       var dbo = db.db("mydb3");
 //       var query = { name: qname };
 //       dbo.collection("customers").find(query).toArray(function(err, result) {
 //         if (err) throw err;
 //         console.log(result);
 //        // get_result = result;
 //         db.close();
 //       });
 //     });
      
      res.json({
        message: 'returning documents',
	name: qname
        
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
    // var url = "mongodb://192.168.18.154:27017/";

    // below is the working code
            // MongoClient.connect(url, function(err, db) {
            //     if (err) throw err;
            //     var dbo = db.db("mydb3");
            //     var myobj = { name: obj_name, email: obj_email };
            //     dbo.collection("customers").insertOne(myobj, function(err, res) {
            //       if (err) throw err;
            //       console.log("1 document inserted");
            //       db.close();
            //     });
            //   });
            //   res.json({
            //     message: '1 document inserted'
                
            //   });
      
      if(obj_name,obj_email
        ) {
        PostCode(obj_name,obj_email);
      }
      else {
        console.log("No data to post");
        process.exit(-1);
      }

      res.json({

       name: obj_name,
       email: obj_email

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
  
  // var url = "mongodb:/ 192.168.18.154:27017/";
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

   // var url = "mongodb:/ 192.168.18.154:27017/";
//    MongoClient.connect(url, function(err, db) {
//        if (err) throw err;
//        var dbo = db.db("mydb");
//        var query = { id: id };
//        dbo.collection("customers").find(query).toArray(function(err, result) {
//          if (err) throw err;
//          console.log(result);
//          db.close();
//        });
//      });
    // res.json({
    //     message: 'You passed an ID',
    //     id: id
    // });

});


module.exports = router;
