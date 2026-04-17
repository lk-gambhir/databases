import mongoose from "mongoose"

const doctorschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true,
    },
    qualification : {
        type : String,
        required : true
    },
    experience : {
        type : Number,
        required : true,
        default : 0
    },
    worksin : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "hospital"
    }]
}, {timestamps : true});

export const doctor = mongoose.model("doctor",doctorschema);