const mongoose=require('mongoose');

exports.connectMongoose=()=>{
    mongoose
        .connect("mongodb+srv://aminul123:kagune<password>@arithmatic-drag-drop.asr6wqb.mongodb.net/?retryWrites=true&w=majority")
        .then((e)=>console.log(`Database connected at ${e.connection.host}`))
        .catch((e)=>console.log(e));
};

const userschema= new mongoose.Schema({

});

exports.User=mongoose.model("numdata",userschema);