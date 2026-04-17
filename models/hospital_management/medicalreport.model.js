import mongoose from "mongoose"

const medicalreportschema = new mongoose.Schema({},{timestamps: true});

export const medicalreport = mongoose.model("medicalreport",medicalreportschema);