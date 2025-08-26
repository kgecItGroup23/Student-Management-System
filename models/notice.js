import mongoose from "mongoose";
let noticeschema = new mongoose.Schema({
    url: {     
        type: String,
        required: true,
    },
    date : {
        type: String,
        required : true,
    }
});

const Notice = mongoose.model("Notice", noticeschema);
export default Notice;