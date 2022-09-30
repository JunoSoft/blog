const express  =  require("express");
const userRoute = require("./routes/users");
const app = express();



app.use('/',userRoute)

app.listen(3000,()=>console.log("server is successfully connected"));
