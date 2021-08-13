var configValues=require("./config.json")

module.exports={
    getDbConnectionString:function(){
        return "mongodb://" + configValues.uname+":"
        + configValues.pwd + "@ds015849.mlab.com:15849/nodetodosample"
    }
}