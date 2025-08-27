import mongoose from "mongoose";

let studentSchema = new mongoose.Schema({
    fullname : {
        type :String,
        required : true,
    },
    password : {
        type :String,
        required : true,
    },
    year : {
        type :String,
        required : true,
    },
    gmail : {
        type :String,
        required : true,
    },
    mobilenum : {
        type : String,
        required : true,
    },
    department : {
        type : String,
        required : true,
    },
    rollno : {
        type : String,
        required : true,
        unique : true,
    },
    
});
    
const Student = mongoose.model("Student", studentSchema);
export default Student;


