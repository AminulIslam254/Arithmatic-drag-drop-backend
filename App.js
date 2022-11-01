const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;
require("dotenv").config();


const { connectMongoose, User } = require("./Database.js");

connectMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get("/", (req, res) => {
  res.send("This is home page");
})

app.get("/read",(req,res)=>{
  User.find({},(err,result)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  });
      
});




app.post("/register", async (req, res) => {
  let arr = [];
  arr = req.body;
  if (arr[0] > 'E' || arr[0] < 'A') {
    res.send("Undefined value Try Again !!!");
  }
  else if (arr[2] > 'E' || arr[2] < 'A') {
    res.send("Undefined value Try Again !!!");

  }
  else if (arr[1] !== '+' && arr[1] !== '-' && arr[1] !== '*' && arr[1] !== '/') {
    res.send("Undefined value Try Again !!!");
    console.log("lol")
  }
  else if (arr[3] !== '>' && arr[3] !== '<') {
    res.send("Undefined value Try Again !!!");
  }
  else {
    var dbarray = {}
    await User.find()
      .then((result) => {
        dbarray = result[0];
      })
      .catch((err) => {
        console.log(err);
      })

    let var1, var2;
    for (var key of Object.keys(dbarray._doc)) {
      if(key===arr[0]){
        var1=dbarray._doc[key];
      }
      if(key===arr[2]){
        var2=dbarray._doc[key];
      }
    }
    if (arr[1] === '+') {
      var1 = var1 + var2;
    }
    else if (arr[1] === '-') {
      var1 = var1 - var2;
    }
    else if (arr[1] === '*') {
      var1 = var1 * var2;
    }
    else if (arr[1] === '/') {
      var1 = var1 / var2;
    }

    if (arr[3] === '<') {
      res.send(var1 < arr[4]);
    }
    else if (arr[3] === '>') {
      res.send(var1 > arr[4]);
    }

  }



})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})