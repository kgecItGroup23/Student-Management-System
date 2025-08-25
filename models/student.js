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
    fathername : {
        type :String,
       required : true,
    },
    mothername : {
        type :String,
       required : true,
    },
    mobilenum : {
        type : Number,
        required : true,
    },
    department : {
        type : String,
        required : true,
    },
    rollno : {
        type : Number,
        required : true,
        unique : true,
    },
    birthdate : {
        type : Date,
        required : true, 
    }

    
});
    
const Student = mongoose.model("Student", studentSchema);
export default Student;


