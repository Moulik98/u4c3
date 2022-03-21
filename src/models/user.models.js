const mongoose = require("mongoose");

const userSchema= new mongoose.Schema(
    {
        firstName: { type: String , required: true},
        lastName: {type: String, required: false},
        age: { type: Number,required : true, minimun:1, maximum:150},
        email:{ type: String, required : true},
        profileImages:{type : Image, required: true, min: 1 },
        
    },
    {
        timestamps: {type : String, required : true}
    }
)
module.exports =mongoose.model("user",userSchema)