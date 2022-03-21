const app = require("./index");

const connect= require("./configs/d.js");


app.listen(5000,async function(){
    try {
        await connect();
        console.log("listen to the port 5000")
    }catch(err){
        console.log(err.message)
    }
})