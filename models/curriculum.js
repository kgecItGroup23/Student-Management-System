import mongoose from "mongoose";

let paperSchema = new mongoose.Schema({
    paperName : {
        type: String,
        required: true,
    },
    paperCode : {
        type: String,
        required: true,
    }
})

let curriculumSchema = new mongoose.Schema({
    department : {
        type :String,
        required : true,
    },
    semester : {
        type :Number,
        required : true,
    },
    papers : {
        type: [paperSchema],
        required: true
    }

})


const Curriculum = mongoose.model("Curriculum", curriculumSchema);
export default Curriculum;
