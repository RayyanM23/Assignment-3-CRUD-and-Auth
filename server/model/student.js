const mongoose = require("mongoose");

let studentModel = mongoose.Schema({
    firstName: String,
    lastName: String,
    Program: String,
    Degree: String,
    GPA: Number,
    feesDue: Number
},
{
    collection:"Students"
});
module.exports = mongoose.model('student',studentModel);