const express  =  require("express");
const userRoute = require("./routes/users");
const app = express();


const mongoose =  require("mongoose");
mongoose.connect("mongodb://localhost/blog")
.then (()=>console.log("DATABASE is well connected")).catch(error =>console.log(error.message));

app.use(express.json());
app.use('/',userRoute);

app.listen(3000,()=>console.log("SERVER is successfully connected"));
