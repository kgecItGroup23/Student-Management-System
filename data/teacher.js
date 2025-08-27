import mongoose from "mongoose";
import Teacher from "../models/teacher.js";

main()
.then(() => 
console.log("Connectiion Sucessful"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

const allTeachers = [
  {
    "fullname": "Dr. Ramesh Sharma",
    "password": "teach123",
    "designation": "Professor",
    "gmail": "ramesh.sharma@csecollege.edu",
    "mobilenum": 9876543210,
    "department": "CSE"
  },
  {
    "fullname": "Anita Verma",
    "password": "teach123",
    "designation": "Assistant Professor",
    "gmail": "anita.verma@csecollege.edu",
    "mobilenum": 9123456789,
    "department": "CSE"
  },
  {
    "fullname": "Suresh Rao",
    "password": "teach123",
    "designation": "Professor",
    "gmail": "suresh.rao@ececollege.edu",
    "mobilenum": 9988776655,
    "department": "ECE"
  },
  {
    "fullname": "Meena Iyer",
    "password": "teach123",
    "designation": "Lecturer",
    "gmail": "meena.iyer@ececollege.edu",
    "mobilenum": 9876501234,
    "department": "ECE"
  },
  {
    "fullname": "Rajesh Gupta",
    "password": "teach123",
    "designation": "Associate Professor",
    "gmail": "rajesh.gupta@itcollege.edu",
    "mobilenum": 9812345678,
    "department": "IT"
  },
  {
    "fullname": "Kavita Singh",
    "password": "teach123",
    "designation": "Assistant Professor",
    "gmail": "kavita.singh@itcollege.edu",
    "mobilenum": 9955667788,
    "department": "IT"
  },
  {
    "fullname": "Dr. Arvind Reddy",
    "password": "teach123",
    "designation": "Professor",
    "gmail": "arvind.reddy@eecollege.edu",
    "mobilenum": 9765432109,
    "department": "EE"
  },
  {
    "fullname": "Poonam Nair",
    "password": "teach123",
    "designation": "Assistant Professor",
    "gmail": "poonam.nair@eecollege.edu",
    "mobilenum": 9345678901,
    "department": "EE"
  },
  {
    "fullname": "Dr. Sanjay Malhotra",
    "password": "teach123",
    "designation": "Professor",
    "gmail": "sanjay.malhotra@mecollege.edu",
    "mobilenum": 9786543210,
    "department": "ME"
  },
  {
    "fullname": "Anjali Rao",
    "password": "teach123",
    "designation": "Lecturer",
    "gmail": "anjali.rao@mecollege.edu",
    "mobilenum": 9123987654,
    "department": "ME"
  }
];


await Teacher.insertMany(allTeachers);
