import mongoose from "mongoose";

let teacherSchema = new mongoose.Schema({
    fullname : {
        type :String,
        required : true,
    },
    password : {
        type :String,
        required : true,
    },
    address : {
        type :String,
        maxLength : 50,
    },
    highestQualification :{
        type : String,
    },
    position : {
        type : String,
    },
    gmail : {
        type :String,
    },
    mobilenum : {
        type : Number,
    },
    department : {
        type : String,
    },
    birthdate : {
        type : Date,
    },
    
});
    
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;


