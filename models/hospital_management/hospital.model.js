import mongoose from "mongoose"

const hospitalschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    addressline1 : {
        type : String,
        required : true
    },
    addressline2 : {
        type : String
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true
    },
    specializedin : [{
        type : String
    }]
},{timestamps: true});

export const hospital = mongoose.model("hospital",hospitalschema);