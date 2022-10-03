const mongoose  =  require('mongoose');
const joi =  require("joi");



  const userSchema =   new mongoose.Schema({
    name:{
      type:String,
      required:true,
      minlength:1
    },
    email:{
      type:String,
      required:true,
      minlength:1,
      unique:true
    },
    age:{
      type:Number,
      required:true,
      minlength:1
    },
  });
  
  const User = mongoose.model("Users",userSchema)

  function validateUser(user){
const schema = {
  name:joi.string().max(25).min(1).required(),
  email:joi.string().min(5).required().email(),
  age:joi.number().min(1).required()
}
return joi.validate(user,schema)
  }


module.exports.User = User;
module.exports.validateUser = validateUser;