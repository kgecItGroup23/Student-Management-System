import mongoose from "mongoose";

let announcementSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,   
    },
    date: {
        type: String,     
        required: true,
    },
    papername : {
        type : String,
        required : true,
    }
});

const Annoucement = mongoose.model("Annoucement", announcementSchema);
export default Annoucement;
