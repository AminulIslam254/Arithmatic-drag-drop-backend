const mongoose=require('mongoose');

exports.connectMongoose=()=>{
    mongoose
        .connect("mongodb+srv://aminul123:kagune@arithmatic-drag-drop.asr6wqb.mongodb.net/Assignment1")
        .then((e)=>console.log(`Database connected at ${e.connection.host}`))
        .catch((e)=>console.log(e));
};

const userschema= new mongoose.Schema({

});

exports.User=mongoose.model("numdatas",userschema);