import mongoose from "mongoose";
import Mark from "../models/marks.js";

main()
    .then(() =>
        console.log("Connectiion Sucessful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

const allmarks = {
        rollno : "1020",
        semester : '7',
        ca1 : "23",
        ca2 : "22",
        final : "60",
        grade : "E",
    };


await Mark.insertOne(allmarks);
