import mongoose from "mongoose";
import Student from "../models/student.js";

main()
.then(() => 
console.log("Connectiion Sucessful"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

let allStudent = [
  {
    "fullname": "Amit Sharma",
    "password": "amit123",
    "address": "Kolkata, WB",
    "year": 1,
    "course": "B.Sc Computer Science",
    "gmail": "amit.sharma@gmail.com",
    "fatherName": "Ramesh Sharma",
    "motherName": "Sita Sharma"
  },
  {
    "fullname": "Priya Verma",
    "password": "priya456",
    "address": "Delhi",
    "year": 2,
    "course": "B.A English",
    "gmail": "priya.verma@gmail.com",
    "fatherName": "Mahesh Verma",
    "motherName": "Anita Verma"
  },
  {
    "fullname": "Rahul Kumar",
    "password": "rahul789",
    "address": "Patna, Bihar",
    "year": 3,
    "course": "B.Tech Mechanical",
    "gmail": "rahul.kumar@gmail.com",
    "fatherName": "Suresh Kumar",
    "motherName": "Rekha Kumar"
  },
  {
    "fullname": "Sneha Gupta",
    "password": "sneha321",
    "address": "Lucknow, UP",
    "year": 1,
    "course": "B.Com",
    "gmail": "sneha.gupta@gmail.com",
    "fatherName": "Vikram Gupta",
    "motherName": "Sunita Gupta"
  },
  {
    "fullname": "Arjun Singh",
    "password": "arjun654",
    "address": "Jaipur, Rajasthan",
    "year": 4,
    "course": "B.Tech Civil",
    "gmail": "arjun.singh@gmail.com",
    "fatherName": "Rajendra Singh",
    "motherName": "Kavita Singh"
  },
  {
    "fullname": "Neha Patel",
    "password": "neha987",
    "address": "Ahmedabad, Gujarat",
    "year": 2,
    "course": "B.Sc Chemistry",
    "gmail": "neha.patel@gmail.com",
    "fatherName": "Kiran Patel",
    "motherName": "Pooja Patel"
  },
  {
    "fullname": "Ravi Yadav",
    "password": "ravi432",
    "address": "Varanasi, UP",
    "year": 3,
    "course": "B.A History",
    "gmail": "ravi.yadav@gmail.com",
    "fatherName": "Manoj Yadav",
    "motherName": "Shobha Yadav"
  },
  {
    "fullname": "Pooja Rani",
    "password": "pooja111",
    "address": "Chennai, Tamil Nadu",
    "year": 1,
    "course": "B.Sc Mathematics",
    "gmail": "pooja.rani@gmail.com",
    "fatherName": "Dinesh Rani",
    "motherName": "Meena Rani"
  },
  {
    "fullname": "Karan Mehta",
    "password": "karan222",
    "address": "Mumbai, Maharashtra",
    "year": 4,
    "course": "B.Tech CSE",
    "gmail": "karan.mehta@gmail.com",
    "fatherName": "Ashok Mehta",
    "motherName": "Rekha Mehta"
  },
  {
    "fullname": "Anjali Das",
    "password": "anjali333",
    "address": "Bhubaneswar, Odisha",
    "year": 2,
    "course": "B.Sc Physics",
    "gmail": "anjali.das@gmail.com",
    "fatherName": "Sanjay Das",
    "motherName": "Lata Das"
  }
];

await Student.insertMany(allStudent);

