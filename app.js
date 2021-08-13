var express = require("express")
var app = express()
var mongoose=require("mongoose")
var config=require("./config/index")
var port=process.env.PORT || 3000
var setupController=require("./controllers/setupController")
app.use("/assets",express.static(__dirname + "/public"))
app.set("view-engine","ejs")
app.listen(port)


mongoose.connect(config.getDbConnectionString())
setupController(app)
