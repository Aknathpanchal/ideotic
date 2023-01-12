const mongoose=require("mongoose")
const validator = require('validator');


const Adminschema=new mongoose.Schema({
    name:{type:String,require:true},
    email: {
        type: String,
        validate: [validator.isEmail, 'Invalid email']
      },
    password:{type:String,require:true}

})

module.exports=mongoose.model("admin",Adminschema)