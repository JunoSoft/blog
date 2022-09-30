const mongoose  =  require('mongoose');
mongoose.connect("mongodb://localhost/blog")
.then (()=>console.log("Database is wel connected"));

const userSchema =   new mongoose.Schema({
  name:String,
  email:String,
  age:Number
});
const User = mongoose.model("Users",userSchema)
async function saveUser(){
  const user  =  new User({
    name:"UBANJE Albert",
    email:"ubanje@gmail.com",
    age:30
  });
  const result =  await user.save();
  console.log(result);

}

module.exports = saveUser;