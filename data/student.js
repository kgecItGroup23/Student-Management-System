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
    "fullname": "Amit Sharma",
    "password": "pass123",
    "year": "1",
    "gmail": "amit.sharma1@gmail.com",
    "mobilenum": "9876543210",
    "department": "CSE",
    "rollno": "1001"
  },
  {
    "fullname": "Priya Verma",
    "password": "pass123",
    "year": "1",
    "gmail": "priya.verma1@gmail.com",
    "mobilenum": "9123456789",
    "department": "ECE",
    "rollno": "1002"
  },
  {
    "fullname": "Rohit Das",
    "password": "pass123",
    "year": "2",
    "gmail": "rohit.das2@gmail.com",
    "mobilenum": "9988776655",
    "department": "IT",
    "rollno": "1003"
  },
  {
    "fullname": "Sneha Iyer",
    "password": "pass123",
    "year": "2",
    "gmail": "sneha.iyer2@gmail.com",
    "mobilenum": "9876501234",
    "department": "EE",
    "rollno": "1004"
  },
  {
    "fullname": "Karan Gupta",
    "password": "pass123",
    "year": "3",
    "gmail": "karan.gupta3@gmail.com",
    "mobilenum": "9812345678",
    "department": "ME",
    "rollno": "1005"
  },
  {
    "fullname": "Neha Singh",
    "password": "pass123",
    "year": "3",
    "gmail": "neha.singh3@gmail.com",
    "mobilenum": "9955667788",
    "department": "CSE",
    "rollno": "1006"
  },
  {
    "fullname": "Arjun Reddy",
    "password": "pass123",
    "year": "4",
    "gmail": "arjun.reddy4@gmail.com",
    "mobilenum": "9765432109",
    "department": "ECE",
    "rollno": "1007"
  },
  {
    "fullname": "Meera Nair",
    "password": "pass123",
    "year": "4",
    "gmail": "meera.nair4@gmail.com",
    "mobilenum": "9345678901",
    "department": "IT",
    "rollno": "1008"
  },
  {
    "fullname": "Vikram Malhotra",
    "password": "pass123",
    "year": "1",
    "gmail": "vikram.malhotra1@gmail.com",
    "mobilenum": "9786543210",
    "department": "EE",
    "rollno": "1009"
  },
  {
    "fullname": "Anjali Rao",
    "password": "pass123",
    "year": "2",
    "gmail": "anjali.rao2@gmail.com",
    "mobilenum": "9123987654",
    "department": "ME",
    "rollno": "1010"
  },
  {
    "fullname": "Siddharth Jain",
    "password": "pass123",
    "year": "3",
    "gmail": "siddharth.jain3@gmail.com",
    "mobilenum": "9654321870",
    "department": "CSE",
    "rollno": "1011"
  },
  {
    "fullname": "Pooja Mehta",
    "password": "pass123",
    "year": "4",
    "gmail": "pooja.mehta4@gmail.com",
    "mobilenum": "9898765432",
    "department": "ECE",
    "rollno": "1012"
  },
  {
    "fullname": "Ravi Kumar",
    "password": "pass123",
    "year": "1",
    "gmail": "ravi.kumar1@gmail.com",
    "mobilenum": "9001122334",
    "department": "IT",
    "rollno": "1013"
  },
  {
    "fullname": "Shalini Mishra",
    "password": "pass123",
    "year": "2",
    "gmail": "shalini.mishra2@gmail.com",
    "mobilenum": "9112233445",
    "department": "EE",
    "rollno": "1014"
  },
  {
    "fullname": "Deepak Yadav",
    "password": "pass123",
    "year": "3",
    "gmail": "deepak.yadav3@gmail.com",
    "mobilenum": "9223344556",
    "department": "ME",
    "rollno": "1015"
  },
  {
    "fullname": "Kavya Kapoor",
    "password": "pass123",
    "year": "4",
    "gmail": "kavya.kapoor4@gmail.com",
    "mobilenum": "9334455667",
    "department": "CSE",
    "rollno": "1016"
  },
  {
    "fullname": "Manish Pandey",
    "password": "pass123",
    "year": "1",
    "gmail": "manish.pandey1@gmail.com",
    "mobilenum": "9445566778",
    "department": "ECE",
    "rollno": "1017"
  },
  {
    "fullname": "Aisha Khan",
    "password": "pass123",
    "year": "2",
    "gmail": "aisha.khan2@gmail.com",
    "mobilenum": "9556677889",
    "department": "IT",
    "rollno": "1018"
  },
  {
    "fullname": "Harsh Vardhan",
    "password": "pass123",
    "year": "3",
    "gmail": "harsh.vardhan3@gmail.com",
    "mobilenum": "9667788990",
    "department": "EE",
    "rollno": "1019"
  },
  {
    "fullname": "Ritika Sen",
    "password": "pass123",
    "year": "4",
    "gmail": "ritika.sen4@gmail.com",
    "mobilenum": "9778899001",
    "department": "ME",
    "rollno": "1020"
  },
  {
    "fullname": "John Doe",
    "password": "password123",
    "year": "1",
    "gmail": "johndoe@gmail.com",
    "mobilenum": "9876543210",
    "department": "CSE",
    "rollno": "1021"
  },
  {
    "fullname": "Jane Smith",
    "password": "password456",
    "year": "2",
    "gmail": "janesmith@gmail.com",
    "mobilenum": "8765432109",
    "department": "EE",
    "rollno": "1022"
  },
  {
    "fullname": "Peter Jones",
    "password": "password789",
    "year": "1",
    "gmail": "peterjones@gmail.com",
    "mobilenum": "7654321098",
    "department": "ME",
    "rollno": "1023"
  },
  {
    "fullname": "Sarah Williams",
    "password": "passwordabc",
    "year": "3",
    "gmail": "sarahwilliams@gmail.com",
    "mobilenum": "6543210987",
    "department": "ECE",
    "rollno": "1024"
  },
  {
    "fullname": "Michael Brown",
    "password": "passworddef",
    "year": "2",
    "gmail": "michaelbrown@gmail.com",
    "mobilenum": "5432109876",
    "department": "IT",
    "rollno": "1025"
  },
  {
    "fullname": "Emily Davis",
    "password": "passwordghi",
    "year": "1",
    "gmail": "emilydavis@gmail.com",
    "mobilenum": "4321098765",
    "department": "CSE",
    "rollno": "1026"
  },
  {
    "fullname": "David Wilson",
    "password": "passwordjkl",
    "year": "3",
    "gmail": "davidwilson@gmail.com",
    "mobilenum": "3210987654",
    "department": "EE",
    "rollno": "1027"
  },
  {
    "fullname": "Jessica Moore",
    "password": "passwordmno",
    "year": "2",
    "gmail": "jessicamoore@gmail.com",
    "mobilenum": "2109876543",
    "department": "ME",
    "rollno": "1028"
  },
  {
    "fullname": "Daniel Taylor",
    "password": "passwordpqr",
    "year": "1",
    "gmail": "danieltaylor@gmail.com",
    "mobilenum": "1098765432",
    "department": "ECE",
    "rollno": "1029"
  },
  {
    "fullname": "Olivia Anderson",
    "password": "passwordstu",
    "year": "3",
    "gmail": "oliviaanderson@gmail.com",
    "mobilenum": "0987654321",
    "department": "IT",
    "rollno": "1030"
  },
  {
    "fullname": "Matthew Thomas",
    "password": "passwordvwx",
    "year": "2",
    "gmail": "matthewthomas@gmail.com",
    "mobilenum": "9988776655",
    "department": "CSE",
    "rollno": "1031"
  },
  {
    "fullname": "Sophia Jackson",
    "password": "passwordyz1",
    "year": "1",
    "gmail": "sophiajackson@gmail.com",
    "mobilenum": "8877665544",
    "department": "EE",
    "rollno": "1032"
  },
  {
    "fullname": "Ethan White",
    "password": "passwordyz2",
    "year": "3",
    "gmail": "ethanwhite@gmail.com",
    "mobilenum": "7766554433",
    "department": "ME",
    "rollno": "1033"
  },
  {
    "fullname": "Isabella Harris",
    "password": "passwordyz3",
    "year": "2",
    "gmail": "isabellaharris@gmail.com",
    "mobilenum": "6655443322",
    "department": "ECE",
    "rollno": "1034"
  },
  {
    "fullname": "Jacob Martin",
    "password": "passwordyz4",
    "year": "1",
    "gmail": "jacobmartin@gmail.com",
    "mobilenum": "5544332211",
    "department": "IT",
    "rollno": "1035"
  },
  {
    "fullname": "Mia Thompson",
    "password": "passwordyz5",
    "year": "3",
    "gmail": "miathompson@gmail.com",
    "mobilenum": "4433221100",
    "department": "CSE",
    "rollno": "1036"
  },
  {
    "fullname": "Noah Garcia",
    "password": "passwordyz6",
    "year": "2",
    "gmail": "noahgarcia@gmail.com",
    "mobilenum": "3322110099",
    "department": "EE",
    "rollno": "1037"
  },
  {
    "fullname": "Ava Martinez",
    "password": "passwordyz7",
    "year": "1",
    "gmail": "avamartinez@gmail.com",
    "mobilenum": "2211009988",
    "department": "ME",
    "rollno": "1038"
  },
  {
    "fullname": "Liam Robinson",
    "password": "passwordyz8",
    "year": "3",
    "gmail": "liamrobinson@gmail.com",
    "mobilenum": "1100998877",
    "department": "ECE",
    "rollno": "1039"
  },
  {
    "fullname": "Chloe Clark",
    "password": "passwordyz9",
    "year": "2",
    "gmail": "chloeclark@gmail.com",
    "mobilenum": "0099887766",
    "department": "IT",
    "rollno": "1040"
  },
  {
    "fullname": "Mason Rodriguez",
    "password": "passwordyz10",
    "year": "1",
    "gmail": "masonrodriguez@gmail.com",
    "mobilenum": "9988776655",
    "department": "CSE",
    "rollno": "1041"
  },
  {
    "fullname": "Harper Lewis",
    "password": "passwordyz11",
    "year": "3",
    "gmail": "harperlewis@gmail.com",
    "mobilenum": "8877665544",
    "department": "EE",
    "rollno": "1042"
  },
  {
    "fullname": "Elijah Lee",
    "password": "passwordyz12",
    "year": "2",
    "gmail": "elijahlee@gmail.com",
    "mobilenum": "7766554433",
    "department": "ME",
    "rollno": "1043"
  },
  {
    "fullname": "Amelia Walker",
    "password": "passwordyz13",
    "year": "1",
    "gmail": "ameliawalker@gmail.com",
    "mobilenum": "6655443322",
    "department": "ECE",
    "rollno": "1044"
  },
  {
    "fullname": "James Hall",
    "password": "passwordyz14",
    "year": "3",
    "gmail": "jameshalle@gmail.com",
    "mobilenum": "5544332211",
    "department": "IT",
    "rollno": "1045"
  },
  {
    "fullname": "Evelyn King",
    "password": "passwordyz15",
    "year": "2",
    "gmail": "evelynking@gmail.com",
    "mobilenum": "4433221100",
    "department": "CSE",
    "rollno": "1046"
  },
  {
    "fullname": "Benjamin Scott",
    "password": "passwordyz16",
    "year": "1",
    "gmail": "benjaminscott@gmail.com",
    "mobilenum": "3322110099",
    "department": "EE",
    "rollno": "1047"
  },
  {
    "fullname": "Lily Green",
    "password": "passwordyz17",
    "year": "3",
    "gmail": "lilygreen@gmail.com",
    "mobilenum": "2211009988",
    "department": "ME",
    "rollno": "1048"
  },
  {
    "fullname": "Alexander Adams",
    "password": "passwordyz18",
    "year": "2",
    "gmail": "alexanderadams@gmail.com",
    "mobilenum": "1100998877",
    "department": "ECE",
    "rollno": "1049"
  },
  {
    "fullname": "Zoe Baker",
    "password": "passwordyz19",
    "year": "1",
    "gmail": "zoebaker@gmail.com",
    "mobilenum": "0099887766",
    "department": "IT",
    "rollno": "1050"
  },
  {
    "fullname": "Luke Carter",
    "password": "passwordyz20",
    "year": "3",
    "gmail": "lukecarter@gmail.com",
    "mobilenum": "9988776655",
    "department": "CSE",
    "rollno": "1051"
  },
  {
    "fullname": "Grace Hill",
    "password": "passwordyz21",
    "year": "2",
    "gmail": "gracehill@gmail.com",
    "mobilenum": "8877665544",
    "department": "EE",
    "rollno": "1052"
  },
  {
    "fullname": "Gabriel Turner",
    "password": "passwordyz22",
    "year": "1",
    "gmail": "gabrielturner@gmail.com",
    "mobilenum": "7766554433",
    "department": "ME",
    "rollno": "1053"
  },
  {
    "fullname": "Victoria Wright",
    "password": "passwordyz23",
    "year": "3",
    "gmail": "victoriawright@gmail.com",
    "mobilenum": "6655443322",
    "department": "ECE",
    "rollno": "1054"
  },
  {
    "fullname": "Henry Cook",
    "password": "passwordyz24",
    "year": "2",
    "gmail": "henrycook@gmail.com",
    "mobilenum": "5544332211",
    "department": "IT",
    "rollno": "1055"
  },
  {
    "fullname": "Audrey Murphy",
    "password": "passwordyz25",
    "year": "1",
    "gmail": "audreymurphy@gmail.com",
    "mobilenum": "4433221100",
    "department": "CSE",
    "rollno": "1056"
  },
  {
    "fullname": "Julian Ward",
    "password": "passwordyz26",
    "year": "3",
    "gmail": "julianward@gmail.com",
    "mobilenum": "3322110099",
    "department": "EE",
    "rollno": "1057"
  },
  {
    "fullname": "Lucy Cooper",
    "password": "passwordyz27",
    "year": "2",
    "gmail": "lucycooper@gmail.com",
    "mobilenum": "2211009988",
    "department": "ME",
    "rollno": "1058"
  },
  {
    "fullname": "Wyatt Evans",
    "password": "passwordyz28",
    "year": "1",
    "gmail": "wyattevans@gmail.com",
    "mobilenum": "1100998877",
    "department": "ECE",
    "rollno": "1059"
  },
  {
    "fullname": "Chloe Rivera",
    "password": "passwordyz29",
    "year": "3",
    "gmail": "chloeriverae@gmail.com",
    "mobilenum": "0099887766",
    "department": "IT",
    "rollno": "1060"
  },
  {
    "fullname": "Aarav Sharma",
    "password": "pass1061",
    "year": "1",
    "gmail": "aarav.sharma1@gmail.com",
    "mobilenum": "9876500001",
    "department": "CSE",
    "rollno": "1061"
  },
  {
    "fullname": "Isha Patel",
    "password": "pass1062",
    "year": "2",
    "gmail": "isha.patel2@gmail.com",
    "mobilenum": "9876500002",
    "department": "ECE",
    "rollno": "1062"
  },
  {
    "fullname": "Rohan Mehta",
    "password": "pass1063",
    "year": "3",
    "gmail": "rohan.mehta3@gmail.com",
    "mobilenum": "9876500003",
    "department": "EE",
    "rollno": "1063"
  },
  {
    "fullname": "Sneha Reddy",
    "password": "pass1064",
    "year": "4",
    "gmail": "sneha.reddy4@gmail.com",
    "mobilenum": "9876500004",
    "department": "ME",
    "rollno": "1064"
  },
  {
    "fullname": "Karan Verma",
    "password": "pass1065",
    "year": "1",
    "gmail": "karan.verma5@gmail.com",
    "mobilenum": "9876500005",
    "department": "IT",
    "rollno": "1065"
  },
  {
    "fullname": "Priya Nair",
    "password": "pass1066",
    "year": "2",
    "gmail": "priya.nair6@gmail.com",
    "mobilenum": "9876500006",
    "department": "CSE",
    "rollno": "1066"
  },
  {
    "fullname": "Arjun Das",
    "password": "pass1067",
    "year": "3",
    "gmail": "arjun.das7@gmail.com",
    "mobilenum": "9876500007",
    "department": "ECE",
    "rollno": "1067"
  },
  {
    "fullname": "Neha Gupta",
    "password": "pass1068",
    "year": "4",
    "gmail": "neha.gupta8@gmail.com",
    "mobilenum": "9876500008",
    "department": "EE",
    "rollno": "1068"
  },
  {
    "fullname": "Vikram Sinha",
    "password": "pass1069",
    "year": "1",
    "gmail": "vikram.sinha9@gmail.com",
    "mobilenum": "9876500009",
    "department": "ME",
    "rollno": "1069"
  },
  {
    "fullname": "Ananya Joshi",
    "password": "pass1070",
    "year": "2",
    "gmail": "ananya.joshi10@gmail.com",
    "mobilenum": "9876500010",
    "department": "IT",
    "rollno": "1070"
  },
  {
    "fullname": "Devansh Kapoor",
    "password": "pass1071",
    "year": "3",
    "gmail": "devansh.kapoor11@gmail.com",
    "mobilenum": "9876500011",
    "department": "CSE",
    "rollno": "1071"
  },
  {
    "fullname": "Ritika Malhotra",
    "password": "pass1072",
    "year": "4",
    "gmail": "ritika.malhotra12@gmail.com",
    "mobilenum": "9876500012",
    "department": "ECE",
    "rollno": "1072"
  },
  {
    "fullname": "Mohit Bansal",
    "password": "pass1073",
    "year": "1",
    "gmail": "mohit.bansal13@gmail.com",
    "mobilenum": "9876500013",
    "department": "EE",
    "rollno": "1073"
  },
  {
    "fullname": "Pooja Choudhary",
    "password": "pass1074",
    "year": "2",
    "gmail": "pooja.choudhary14@gmail.com",
    "mobilenum": "9876500014",
    "department": "ME",
    "rollno": "1074"
  },
  {
    "fullname": "Siddharth Jain",
    "password": "pass1075",
    "year": "3",
    "gmail": "siddharth.jain15@gmail.com",
    "mobilenum": "9876500015",
    "department": "IT",
    "rollno": "1075"
  },
  {
    "fullname": "Meera Krishnan",
    "password": "pass1076",
    "year": "4",
    "gmail": "meera.krishnan16@gmail.com",
    "mobilenum": "9876500016",
    "department": "CSE",
    "rollno": "1076"
  },
  {
    "fullname": "Aditya Rao",
    "password": "pass1077",
    "year": "1",
    "gmail": "aditya.rao17@gmail.com",
    "mobilenum": "9876500017",
    "department": "ECE",
    "rollno": "1077"
  },
  {
    "fullname": "Kavya Menon",
    "password": "pass1078",
    "year": "2",
    "gmail": "kavya.menon18@gmail.com",
    "mobilenum": "9876500018",
    "department": "EE",
    "rollno": "1078"
  },
  {
    "fullname": "Rajiv Mishra",
    "password": "pass1079",
    "year": "3",
    "gmail": "rajiv.mishra19@gmail.com",
    "mobilenum": "9876500019",
    "department": "ME",
    "rollno": "1079"
  },
  {
    "fullname": "Tanvi Kulkarni",
    "password": "pass1080",
    "year": "4",
    "gmail": "tanvi.kulkarni20@gmail.com",
    "mobilenum": "9876500020",
    "department": "IT",
    "rollno": "1080"
  },
  {
    "fullname": "Hrithik Anand",
    "password": "pass1081",
    "year": "1",
    "gmail": "hrithik.anand21@gmail.com",
    "mobilenum": "9876500021",
    "department": "CSE",
    "rollno": "1081"
  },
  {
    "fullname": "Aditi Desai",
    "password": "pass1082",
    "year": "2",
    "gmail": "aditi.desai22@gmail.com",
    "mobilenum": "9876500022",
    "department": "ECE",
    "rollno": "1082"
  },
  {
    "fullname": "Sameer Kulkarni",
    "password": "pass1083",
    "year": "3",
    "gmail": "sameer.kulkarni23@gmail.com",
    "mobilenum": "9876500023",
    "department": "EE",
    "rollno": "1083"
  },
  {
    "fullname": "Rashi Seth",
    "password": "pass1084",
    "year": "4",
    "gmail": "rashi.seth24@gmail.com",
    "mobilenum": "9876500024",
    "department": "ME",
    "rollno": "1084"
  },
  {
    "fullname": "Manav Chatterjee",
    "password": "pass1085",
    "year": "1",
    "gmail": "manav.chatterjee25@gmail.com",
    "mobilenum": "9876500025",
    "department": "IT",
    "rollno": "1085"
  },
  {
    "fullname": "Shreya Iyer",
    "password": "pass1086",
    "year": "2",
    "gmail": "shreya.iyer26@gmail.com",
    "mobilenum": "9876500026",
    "department": "CSE",
    "rollno": "1086"
  },
  {
    "fullname": "Arnav Bhattacharya",
    "password": "pass1087",
    "year": "3",
    "gmail": "arnav.bhatt27@gmail.com",
    "mobilenum": "9876500027",
    "department": "ECE",
    "rollno": "1087"
  },
  {
    "fullname": "Anjali Saxena",
    "password": "pass1088",
    "year": "4",
    "gmail": "anjali.saxena28@gmail.com",
    "mobilenum": "9876500028",
    "department": "EE",
    "rollno": "1088"
  },
  {
    "fullname": "Rudra Khanna",
    "password": "pass1089",
    "year": "1",
    "gmail": "rudra.khanna29@gmail.com",
    "mobilenum": "9876500029",
    "department": "ME",
    "rollno": "1089"
  },
  {
    "fullname": "Sanya Kapoor",
    "password": "pass1090",
    "year": "2",
    "gmail": "sanya.kapoor30@gmail.com",
    "mobilenum": "9876500030",
    "department": "IT",
    "rollno": "1090"
  },
  {
    "fullname": "Kabir Gill",
    "password": "pass1091",
    "year": "3",
    "gmail": "kabir.gill31@gmail.com",
    "mobilenum": "9876500031",
    "department": "CSE",
    "rollno": "1091"
  },
  {
    "fullname": "Nisha Arora",
    "password": "pass1092",
    "year": "4",
    "gmail": "nisha.arora32@gmail.com",
    "mobilenum": "9876500032",
    "department": "ECE",
    "rollno": "1092"
  },
  {
    "fullname": "Vedant Trivedi",
    "password": "pass1093",
    "year": "1",
    "gmail": "vedant.trivedi33@gmail.com",
    "mobilenum": "9876500033",
    "department": "EE",
    "rollno": "1093"
  },
  {
    "fullname": "Mira Sengupta",
    "password": "pass1094",
    "year": "2",
    "gmail": "mira.sengupta34@gmail.com",
    "mobilenum": "9876500034",
    "department": "ME",
    "rollno": "1094"
  },
  {
    "fullname": "Yash Thakur",
    "password": "pass1095",
    "year": "3",
    "gmail": "yash.thakur35@gmail.com",
    "mobilenum": "9876500035",
    "department": "IT",
    "rollno": "1095"
  },
  {
    "fullname": "Diya Bhandari",
    "password": "pass1096",
    "year": "4",
    "gmail": "diya.bhandari36@gmail.com",
    "mobilenum": "9876500036",
    "department": "CSE",
    "rollno": "1096"
  },
  {
    "fullname": "Rahul Mallick",
    "password": "pass1097",
    "year": "1",
    "gmail": "rahul.mallick37@gmail.com",
    "mobilenum": "9876500037",
    "department": "ECE",
    "rollno": "1097"
  },
  {
    "fullname": "Lavanya Pillai",
    "password": "pass1098",
    "year": "2",
    "gmail": "lavanya.pillai38@gmail.com",
    "mobilenum": "9876500038",
    "department": "EE",
    "rollno": "1098"
  },
  {
    "fullname": "Omkar Raut",
    "password": "pass1099",
    "year": "3",
    "gmail": "omkar.raut39@gmail.com",
    "mobilenum": "9876500039",
    "department": "ME",
    "rollno": "1099"
  },
  {
    "fullname": "Sakshi Dutta",
    "password": "pass1100",
    "year": "4",
    "gmail": "sakshi.dutta40@gmail.com",
    "mobilenum": "9876500040",
    "department": "IT",
    "rollno": "1100"
  },

];




await Student.insertMany(allStudent);

