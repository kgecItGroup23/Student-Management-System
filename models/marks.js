import mongoose from "mongoose";
let marksSchema = new mongoose.Schema({
    rollno : {
        type :String,
        required : true
    },
    semester: {
        type: String,
        required: true
    },
    ca1 : {
        type : String,
    },
    ca2: {
        type: String,
    },
    final : {
        type : String,
    },
    grade : {
        type : String,
    }
});

const Mark = mongoose.model("Mark", marksSchema);
export default Mark;