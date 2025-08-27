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
    designation : {
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
    
});
    
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;


