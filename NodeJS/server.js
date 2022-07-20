const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');

// create a connection variable with the required details
var con = mysql.createConnection({
    host: "aecaibuildinginfo.cptepezvlrst.us-east-1.rds.amazonaws.com", // ip address of server running mysql
    user: "AecaiJz", // user name to your mysql database
    password: "Ilovecai!", // corresponding password
    database: "BuildingInfo" // use the specified database
});

// make to connection to the database.
con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    console.log('connection successful');
});



app.get('/',(req,res)=>{
    res.json('OK');
})

app.post('/',(req,res)=>{
    var  {HouseID,ZipCode,Stories,Bedrooms,Baths,Garages,TotalArea,Porches,Basement}=req.body;
    console.log(req.body);
    var records =[[req.body.HouseID,req.body.ZipCode,req.body.Stories,req.body.Bedrooms,req.body.Baths,req.body.Garages,req.body.TotalArea,req.body.Porches,req.body.Basement]];
    res.json('Form recieved');

    if(records[0][0]!=null)
    {
        con.query("INSERT into HouseInfo (HouseID,ZipCode,Stories,Bedrooms,Baths,Garages,TotalArea,Porches,Basement) VALUES ?",[records],function(err,res,fields){

            if(err) throw err;

            console.log(res);
        });
    }

})

app.listen(3001,()=>{
    console.log("Port 3001");
})








