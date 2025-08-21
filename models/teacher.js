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
    
});
    
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;


