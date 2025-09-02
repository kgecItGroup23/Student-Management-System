import mongoose from "mongoose";
let rotineschema = new mongoose.Schema({
    url: {     
        type: String,
        required: true,
    },
    department : {
        type: String,
        required : true,
    }
});

const Routine = mongoose.model("Routine", rotineschema);
export default Routine;