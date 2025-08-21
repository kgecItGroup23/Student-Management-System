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
    address : {
        type :String,
        maxLength : 50,
    },
    year : {
        type :Number,
        required : true,
    },
    course : {
        type :String,
        required : true,
    },
    gmail : {
        type :String,
        required : true,
    },
    fatherName : {
        type :String,
       required : true,
    },
    motherName : {
    type :String,
       required : true,
    }
    
});
    
const Student = mongoose.model("Student", studentSchema);
export default Student;


