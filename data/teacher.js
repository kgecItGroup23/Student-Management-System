import mongoose from "mongoose";
import Teacher from "../models/teacher.js";

main()
.then(() => 
console.log("Connectiion Sucessful"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

let allTeachers = [
  {
    fullname: "Ramesh Chandra",
    password: "ramesh123",
    address: "Kolkata, West Bengal"
  },
  {
    fullname: "Anita Sharma",
    password: "anita456",
    address: "Delhi, India"
  },
  {
    fullname: "Vikram Patel",
    password: "vikram789",
    address: "Ahmedabad, Gujarat"
  }
];

await Teacher.insertMany(allTeachers);
