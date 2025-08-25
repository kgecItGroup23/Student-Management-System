import mongoose from "mongoose";
import Student from "../models/student.js";

main()
.then(() => 
console.log("Connectiion Sucessful"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

const allStudent = [
  {
    fullname: "Aarav Sharma",
    rollno: 2025000001,
    password: "pass@123",
    address: "12 Park Street, Kolkata",
    year: 3,
    course: "B.Tech",
    gmail: "aarav.sharma01@example.com",
    fathername: "Rajesh Sharma",
    mothername: "Sunita Sharma",
    mobilenum: 9876543210,
    // birthdate: new Date("2004-03-12"),
    department: "IT"
  },
  {
    fullname: "Priya Verma",
    rollno: 2025000002,
    password: "priya@321",
    address: "45 Lake View, Delhi",
    year: 2,
    course: "M.Tech",
    gmail: "priya.verma02@example.com",
    fathername: "Anil Verma",
    mothername: "Rekha Verma",
    mobilenum: 9876504321,
    // birthdate: new Date("2005-07-18"),
    department: "CSE"
  },
  {
    fullname: "Rohan Das",
    rollno: 2025000003,
    password: "rohan#22",
    address: "78 MG Road, Bengaluru",
    year: 1,
    course: "B.Tech",
    gmail: "rohan.das03@example.com",
    fathername: "Suresh Das",
    mothername: "Anita Das",
    mobilenum: 9831209876,
    // birthdate: new Date("2006-01-25"),
    department: "ECE"
  },
  {
    fullname: "Sneha Mukherjee",
    rollno: 2025000004,
    password: "sneha@111",
    address: "90 Howrah Lane, Kolkata",
    year: 4,
    course: "M.Tech",
    gmail: "sneha.mukherjee04@example.com",
    fathername: "Pradip Mukherjee",
    mothername: "Aloka Mukherjee",
    mobilenum: 9800012345,
    // birthdate: new Date("2003-11-05"),
    department: "ME"
  },
  {
    fullname: "Aditya Singh",
    rollno: 2025000005,
    password: "adi@2025",
    address: "67 Civil Line, Lucknow",
    year: 3,
    course: "B.Tech",
    gmail: "aditya.singh05@example.com",
    fathername: "Manoj Singh",
    mothername: "Pooja Singh",
    mobilenum: 9812345678,
    // birthdate: new Date("2004-05-22"),
    department: "CIVIL"
  },
  {
    fullname: "Neha Gupta",
    rollno: 2025000006,
    password: "neha@007",
    address: "34 Station Rd, Patna",
    year: 2,
    course: "M.Tech",
    gmail: "neha.gupta06@example.com",
    fathername: "Ramesh Gupta",
    mothername: "Shalini Gupta",
    mobilenum: 9876001111,
    // birthdate: new Date("2005-08-10"),
    department: "EE"
  },
  {
    fullname: "Karan Mehta",
    rollno: 2025000007,
    password: "karan@it7",
    address: "22 Rose Villa, Mumbai",
    year: 1,
    course: "B.Tech",
    gmail: "karan.mehta07@example.com",
    fathername: "Sanjay Mehta",
    mothername: "Deepa Mehta",
    mobilenum: 9898123456,
    // birthdate: new Date("2006-02-14"),
    department: "IT"
  },
  {
    fullname: "Ananya Roy",
    rollno: 2025000008,
    password: "roy@cse88",
    address: "11 Ballygunge, Kolkata",
    year: 4,
    course: "M.Tech",
    gmail: "ananya.roy08@example.com",
    fathername: "Amit Roy",
    mothername: "Ritu Roy",
    mobilenum: 9811122233,
    // birthdate: new Date("2003-09-30"),
    department: "CSE"
  },
  {
    fullname: "Vivek Nair",
    rollno: 2025000009,
    password: "vivek@99",
    address: "55 MG Nagar, Kochi",
    year: 2,
    course: "B.Tech",
    gmail: "vivek.nair09@example.com",
    fathername: "Hari Nair",
    mothername: "Lakshmi Nair",
    mobilenum: 9822004455,
    // birthdate: new Date("2005-12-19"),
    department: "ECE"
  },
  {
    fullname: "Isha Chatterjee",
    rollno: 2025000010,
    password: "isha@me10",
    address: "77 Salt Lake, Kolkata",
    year: 3,
    course: "M.Tech",
    gmail: "isha.chatt10@example.com",
    fathername: "Subhas Chatterjee",
    mothername: "Leena Chatterjee",
    mobilenum: 9800556677,
    // birthdate: new Date("2004-04-27"),
    department: "ME"
  }
];



await Student.insertMany(allStudent);

