import mongoose from "mongoose";

const todoschema = new mongoose.Schema(
    {
        content : {
            type : String,
            required : true,
        },
        complete : {
            type : Boolean,
            default : false
        },
        createdby : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        subtodo : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Subtodo"
            },
        ],
    },
    {timestamps : true}
)

export const todo = mongoose.model("Todo",todoschema)