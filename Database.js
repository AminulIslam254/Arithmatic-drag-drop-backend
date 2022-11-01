const mongoose=require('mongoose');

exports.connectMongoose=()=>{
    mongoose
        .connect("mongodb://localhost:27017/Assignment1")
        .then((e)=>console.log(`Database connected at ${e.connection.host}`))
        .catch((e)=>console.log(e));
};

const userschema= new mongoose.Schema({

});

exports.User=mongoose.model("numdata",userschema);