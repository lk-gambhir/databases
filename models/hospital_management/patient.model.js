import mongoose from "mongoose"

const patientschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    diagnosedwith : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    bloodgroup : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ["MALE","FEMALE", "OTHERS"],
        required : true
    },
    hospital : {
        type : mongoose.Schema.Types.objectid,
        ref : "doctor"
    }
},{timestamps : true});

export const patient = mongoose.model("patient",patientschema);