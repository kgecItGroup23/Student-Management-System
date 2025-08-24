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
    fullname: "Dr. Ramesh Chandra",
    password: "ramesh@123",
    address: "45 Park Street, Kolkata",
    highestQualification: "Ph.D. in Computer Science",
    position: "Professor",
    gmail: "ramesh.chandra@univ.edu",
    mobilenum: 9876543210,
    department: "Computer Science",
    birthdate: new Date("1975-06-15")
  },
  {
    fullname: "Prof. Meena Sharma",
    password: "meena@456",
    address: "78 Lake Road, Delhi",
    highestQualification: "M.Tech in Electronics",
    position: "Associate Professor",
    gmail: "meena.sharma@univ.edu",
    mobilenum: 9812345678,
    department: "Electronics",
    birthdate: new Date("1980-09-22")
  },
  {
    fullname: "Dr. Arvind Kumar",
    password: "arvind@789",
    address: "12 MG Road, Bengaluru",
    highestQualification: "Ph.D. in Mechanical Engineering",
    position: "Head of Department",
    gmail: "arvind.kumar@univ.edu",
    mobilenum: 9822334455,
    department: "Mechanical",
    birthdate: new Date("1972-03-10")
  },
  {
    fullname: "Prof. Sushmita Banerjee",
    password: "sushmita@111",
    address: "90 Salt Lake, Kolkata",
    highestQualification: "M.Sc. in Mathematics",
    position: "Assistant Professor",
    gmail: "sushmita.banerjee@univ.edu",
    mobilenum: 9876001122,
    department: "Mathematics",
    birthdate: new Date("1985-12-05")
  },
  {
    fullname: "Dr. Vivek Nair",
    password: "vivek@222",
    address: "34 Marine Drive, Kochi",
    highestQualification: "Ph.D. in Electrical Engineering",
    position: "Professor",
    gmail: "vivek.nair@univ.edu",
    mobilenum: 9898123000,
    department: "Electrical",
    birthdate: new Date("1978-04-18")
  }
];


await Teacher.insertMany(allTeachers);
