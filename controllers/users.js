
const {validateUser,User} =  require("../models/users")

exports.user = async (req, res, next) => {

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    const {error}  = validateUser(req.body);
    if(error){
      res.status(400).send(error.details[0].message);
      res.status(500).send(error.details[0].message);
      return ;
    }
    const result = await user.save();
    res.send(result);
    console.log(result);

    res.send("user is created Well...");


next();
};

exports.getUsers =async (req,res)=>{
const result =  await User.find().pretty();
res.send(result);
console.log(result);
}
