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
  // CSE
  {
    department: "CSE",
    semester: 1,
    papers: [
      { paperName: "Mathematics I", paperCode: "M101" },
      { paperName: "Physics I", paperCode: "PH101" },
      { paperName: "Programming in C", paperCode: "CS101" }
    ]
  },
  {
    department: "CSE",
    semester: 2,
    papers: [
      { paperName: "Mathematics II", paperCode: "M102" },
      { paperName: "Data Structures", paperCode: "CS102" },
      { paperName: "Digital Logic", paperCode: "CS103" }
    ]
  },
  {
    department: "CSE",
    semester: 3,
    papers: [
      { paperName: "Discrete Mathematics", paperCode: "M201" },
      { paperName: "Computer Organization", paperCode: "CS201" },
      { paperName: "Object Oriented Programming", paperCode: "CS202" }
    ]
  },
  {
    department: "CSE",
    semester: 4,
    papers: [
      { paperName: "Operating Systems", paperCode: "CS301" },
      { paperName: "Database Management Systems", paperCode: "CS302" },
      { paperName: "Theory of Computation", paperCode: "CS303" }
    ]
  },
  {
    department: "CSE",
    semester: 5,
    papers: [
      { paperName: "Computer Networks", paperCode: "CS401" },
      { paperName: "Software Engineering", paperCode: "CS402" },
      { paperName: "Compiler Design", paperCode: "CS403" }
    ]
  },
  {
    department: "CSE",
    semester: 6,
    papers: [
      { paperName: "Artificial Intelligence", paperCode: "CS501" },
      { paperName: "Web Technologies", paperCode: "CS502" },
      { paperName: "Machine Learning", paperCode: "CS503" }
    ]
  },
  {
    department: "CSE",
    semester: 7,
    papers: [
      { paperName: "Cloud Computing", paperCode: "CS601" },
      { paperName: "Big Data Analytics", paperCode: "CS602" },
      { paperName: "Cyber Security", paperCode: "CS603" }
    ]
  },
  {
    department: "CSE",
    semester: 8,
    papers: [
      { paperName: "Project Work", paperCode: "CS701" },
      { paperName: "Seminar", paperCode: "CS702" },
      { paperName: "Internship", paperCode: "CS703" }
    ]
  },

  // IT
  {
    department: "IT",
    semester: 1,
    papers: [
      { paperName: "Mathematics I", paperCode: "M101" },
      { paperName: "Physics I", paperCode: "PH101" },
      { paperName: "Programming in C", paperCode: "IT101" }
    ]
  },
  {
    department: "IT",
    semester: 2,
    papers: [
      { paperName: "Mathematics II", paperCode: "M102" },
      { paperName: "Data Structures", paperCode: "IT102" },
      { paperName: "Computer Organization", paperCode: "IT103" }
    ]
  },
  {
    department: "IT",
    semester: 3,
    papers: [
      { paperName: "Discrete Mathematics", paperCode: "M201" },
      { paperName: "Database Systems", paperCode: "IT201" },
      { paperName: "Object Oriented Programming", paperCode: "IT202" }
    ]
  },
  {
    department: "IT",
    semester: 4,
    papers: [
      { paperName: "Operating Systems", paperCode: "IT301" },
      { paperName: "Software Engineering", paperCode: "IT302" },
      { paperName: "Web Technologies", paperCode: "IT303" }
    ]
  },
  {
    department: "IT",
    semester: 5,
    papers: [
      { paperName: "Computer Networks", paperCode: "IT401" },
      { paperName: "Information Security", paperCode: "IT402" },
      { paperName: "Mobile Computing", paperCode: "IT403" }
    ]
  },
  {
    department: "IT",
    semester: 6,
    papers: [
      { paperName: "Machine Learning", paperCode: "IT501" },
      { paperName: "Data Mining", paperCode: "IT502" },
      { paperName: "Cloud Computing", paperCode: "IT503" }
    ]
  },
  {
    department: "IT",
    semester: 7,
    papers: [
      { paperName: "Big Data Analytics", paperCode: "IT601" },
      { paperName: "AI & Neural Networks", paperCode: "IT602" },
      { paperName: "Cyber Security", paperCode: "IT603" }
    ]
  },
  {
    department: "IT",
    semester: 8,
    papers: [
      { paperName: "Project Work", paperCode: "IT701" },
      { paperName: "Seminar", paperCode: "IT702" },
      { paperName: "Internship", paperCode: "IT703" }
    ]
  },

  // MECHANICAL (ME)
  {
    department: "ME",
    semester: 1,
    papers: [
      { paperName: "Mathematics I", paperCode: "M101" },
      { paperName: "Engineering Physics", paperCode: "PH101" },
      { paperName: "Engineering Mechanics", paperCode: "ME101" }
    ]
  },
  {
    department: "ME",
    semester: 2,
    papers: [
      { paperName: "Mathematics II", paperCode: "M102" },
      { paperName: "Thermodynamics", paperCode: "ME102" },
      { paperName: "Basic Electrical Engineering", paperCode: "EE101" }
    ]
  },
  {
    department: "ME",
    semester: 3,
    papers: [
      { paperName: "Fluid Mechanics", paperCode: "ME201" },
      { paperName: "Strength of Materials", paperCode: "ME202" },
      { paperName: "Material Science", paperCode: "ME203" }
    ]
  },
  {
    department: "ME",
    semester: 4,
    papers: [
      { paperName: "Applied Thermodynamics", paperCode: "ME301" },
      { paperName: "Dynamics of Machinery", paperCode: "ME302" },
      { paperName: "Manufacturing Processes", paperCode: "ME303" }
    ]
  },
  {
    department: "ME",
    semester: 5,
    papers: [
      { paperName: "Heat Transfer", paperCode: "ME401" },
      { paperName: "Machine Design I", paperCode: "ME402" },
      { paperName: "Fluid Machinery", paperCode: "ME403" }
    ]
  },
  {
    department: "ME",
    semester: 6,
    papers: [
      { paperName: "Machine Design II", paperCode: "ME501" },
      { paperName: "IC Engines", paperCode: "ME502" },
      { paperName: "Refrigeration & Air Conditioning", paperCode: "ME503" }
    ]
  },
  {
    department: "ME",
    semester: 7,
    papers: [
      { paperName: "Robotics", paperCode: "ME601" },
      { paperName: "Automobile Engineering", paperCode: "ME602" },
      { paperName: "Industrial Engineering", paperCode: "ME603" }
    ]
  },
  {
    department: "ME",
    semester: 8,
    papers: [
      { paperName: "Project Work", paperCode: "ME701" },
      { paperName: "Seminar", paperCode: "ME702" },
      { paperName: "Internship", paperCode: "ME703" }
    ]
  },

  // ELECTRICAL (EE)
  {
    department: "EE",
    semester: 1,
    papers: [
      { paperName: "Mathematics I", paperCode: "M101" },
      { paperName: "Physics I", paperCode: "PH101" },
      { paperName: "Basic Electrical Engineering", paperCode: "EE101" }
    ]
  },
  {
    department: "EE",
    semester: 2,
    papers: [
      { paperName: "Mathematics II", paperCode: "M102" },
      { paperName: "Circuit Theory", paperCode: "EE102" },
      { paperName: "Electromagnetic Fields", paperCode: "EE103" }
    ]
  },
  {
    department: "EE",
    semester: 3,
    papers: [
      { paperName: "Electrical Machines I", paperCode: "EE201" },
      { paperName: "Power Systems I", paperCode: "EE202" },
      { paperName: "Control Systems", paperCode: "EE203" }
    ]
  },
  {
    department: "EE",
    semester: 4,
    papers: [
      { paperName: "Electrical Machines II", paperCode: "EE301" },
      { paperName: "Power Electronics", paperCode: "EE302" },
      { paperName: "Signals & Systems", paperCode: "EE303" }
    ]
  },
  {
    department: "EE",
    semester: 5,
    papers: [
      { paperName: "Power Systems II", paperCode: "EE401" },
      { paperName: "Digital Signal Processing", paperCode: "EE402" },
      { paperName: "High Voltage Engineering", paperCode: "EE403" }
    ]
  },
  {
    department: "EE",
    semester: 6,
    papers: [
      { paperName: "Renewable Energy Systems", paperCode: "EE501" },
      { paperName: "Electrical Drives", paperCode: "EE502" },
      { paperName: "Switchgear & Protection", paperCode: "EE503" }
    ]
  },
  {
    department: "EE",
    semester: 7,
    papers: [
      { paperName: "Smart Grids", paperCode: "EE601" },
      { paperName: "Power System Operation & Control", paperCode: "EE602" },
      { paperName: "Advanced Control Systems", paperCode: "EE603" }
    ]
  },
  {
    department: "EE",
    semester: 8,
    papers: [
      { paperName: "Project Work", paperCode: "EE701" },
      { paperName: "Seminar", paperCode: "EE702" },
      { paperName: "Internship", paperCode: "EE703" }
    ]
  },

  // ELECTRONICS & COMMUNICATION (ECE)
  {
    department: "ECE",
    semester: 1,
    papers: [
      { paperName: "Mathematics I", paperCode: "M101" },
      { paperName: "Physics I", paperCode: "PH101" },
      { paperName: "Basic Electronics", paperCode: "EC101" }
    ]
  },
  {
    department: "ECE",
    semester: 2,
    papers: [
      { paperName: "Mathematics II", paperCode: "M102" },
      { paperName: "Electronic Devices", paperCode: "EC102" },
      { paperName: "Network Theory", paperCode: "EC103" }
    ]
  },
  {
    department: "ECE",
    semester: 3,
    papers: [
      { paperName: "Signals & Systems", paperCode: "EC201" },
      { paperName: "Analog Circuits", paperCode: "EC202" },
      { paperName: "Digital Circuits", paperCode: "EC203" }
    ]
  },
  {
    department: "ECE",
    semester: 4,
    papers: [
      { paperName: "Electromagnetic Waves", paperCode: "EC301" },
      { paperName: "Communication Systems", paperCode: "EC302" },
      { paperName: "Microprocessors", paperCode: "EC303" }
    ]
  },
  {
    department: "ECE",
    semester: 5,
    papers: [
      { paperName: "Digital Communication", paperCode: "EC401" },
      { paperName: "VLSI Design", paperCode: "EC402" },
      { paperName: "Control Systems", paperCode: "EC403" }
    ]
  },
  {
    department: "ECE",
    semester: 6,
    papers: [
      { paperName: "Microwave Engineering", paperCode: "EC501" },
      { paperName: "Antenna & Wave Propagation", paperCode: "EC502" },
      { paperName: "Embedded Systems", paperCode: "EC503" }
    ]
  },
  {
    department: "ECE",
    semester: 7,
    papers: [
      { paperName: "Wireless Communication", paperCode: "EC601" },
      { paperName: "Optical Communication", paperCode: "EC602" },
      { paperName: "Digital Signal Processing", paperCode: "EC603" }
    ]
  },
  {
    department: "ECE",
    semester: 8,
    papers: [
      { paperName: "Project Work", paperCode: "EC701" },
      { paperName: "Seminar", paperCode: "EC702" },
      { paperName: "Internship", paperCode: "EC703" }
    ]
  }
];



await Curriculum.insertMany(myCurriculum);