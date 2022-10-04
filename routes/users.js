const express = require('express');
const userController  = require("../controllers/users");


const router = express.Router();

router.post('/',userController.user);
router.get('/',(req,res)=>{
  res.send("<h2>Welcome...</h2>");
})
router.get('/users',userController.getUsers)
module.exports = router;