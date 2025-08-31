import mongoose from "mongoose";
import Notice from "../models/notice.js";

main()
    .then(() =>
        console.log("Connectiion Sucessful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

const allmarks = [
    {
    url: "./uploads/notice/1756583540936-42e5dd65acf9fbb9df8a23b6131ba3db.pdf",
    title : "this is  title",
    date : Date.now().toLocaleString("en"-"In"),
},
]


await Notice.insertOne(allmarks);
