import mongoose from "mongoose";
import Curriculum from "../models/curriculum.js";

main()
    .then(() =>
        console.log("Connectiion Sucessful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}

const myCurriculum = [
  {
    department: "CSE",
    semester: 1,
    papers: [
      { paperName: "Mathematics I", paperCode: "M101" },
      { paperName: "Physics I", paperCode: "PH101" },
      { paperName: "Basic Electrical Engineering", paperCode: "EE101" }
    ]
  },
  {
    department: "CSE",
    semester: 2,
    papers: [
      { paperName: "Mathematics II", paperCode: "M201" },
      { paperName: "Chemistry", paperCode: "CH201" },
      { paperName: "Programming in C", paperCode: "CS201" }
    ]
  },
  {
    department: "CSE",
    semester: 3,
    papers: [
      { paperName: "Data Structures", paperCode: "CS301" },
      { paperName: "Digital Electronics", paperCode: "EC301" },
      { paperName: "Discrete Mathematics", paperCode: "M301" }
    ]
  },
  {
    department: "CSE",
    semester: 4,
    papers: [
      { paperName: "Computer Organization", paperCode: "CS401" },
      { paperName: "Operating Systems", paperCode: "CS402" },
      { paperName: "Design and Analysis of Algorithms", paperCode: "CS403" }
    ]
  },
  {
    department: "CSE",
    semester: 5,
    papers: [
      { paperName: "Database Management Systems", paperCode: "CS501" },
      { paperName: "Computer Networks", paperCode: "CS502" },
      { paperName: "Software Engineering", paperCode: "CS503" }
    ]
  },
  {
    department: "CSE",
    semester: 6,
    papers: [
      { paperName: "Compiler Design", paperCode: "CS601" },
      { paperName: "Artificial Intelligence", paperCode: "CS602" },
      { paperName: "Machine Learning", paperCode: "CS603" }
    ]
  },
  {
    department: "CSE",
    semester: 7,
    papers: [
      { paperName: "Big Data Analytics", paperCode: "CS701" },
      { paperName: "Cloud Computing", paperCode: "CS702" },
      { paperName: "Cyber Security", paperCode: "CS703" }
    ]
  },
  {
    department: "CSE",
    semester: 8,
    papers: [
      { paperName: "Distributed Systems", paperCode: "CS801" },
      { paperName: "Blockchain Technology", paperCode: "CS802" },
      { paperName: "Internet of Things", paperCode: "CS803" }
    ]
  }
]


await Curriculum.insertMany(myCurriculum);