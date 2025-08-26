import mongoose from "mongoose";
import Notice from "../models/notice.js";

main()
    .then(() =>
        console.log("Connectiion Sucessful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

const allnotice = [
    {
        url: "https://drive.google.com/file/d/10skqj8xI3uxXhtSoz_vPLVK1bYN8evWA/view?usp=drive_link",
        date: new Date("2025-01-15").toLocaleDateString("en-GB"),
    },
    {
        url: "https://drive.google.com/file/d/1kZQq_oWaQzbe9v4h5MXm8Z8yS7rWVd6u/view?usp=sharing",
        date: new Date("2025-02-05").toLocaleDateString("en-GB"),
    },
    {
        url: "https://drive.google.com/file/d/1xsz8c_xeA60WfMhEjqromGCUXOoBo8-W/view?usp=drive_link",
        date: new Date("2025-03-01").toLocaleDateString("en-GB"),
    },
    {
        url: "https://drive.google.com/file/d/17GIOYdwSubG-DqcGpIzcpwRH6znua9Ub/view?usp=drive_link",
        date: new Date("2025-04-10").toLocaleDateString("en-GB"),
    },
    {
        url: "https://drive.google.com/file/d/1Se7CP4uqkOnfMxYBtuuW3irzpQlmd55e/view?usp=drive_link",
        date: new Date("2025-05-20").toLocaleDateString("en-GB"),
    }
];

await Notice.insertMany(allnotice);
