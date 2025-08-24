import express from "express"
const app = express();
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import Teacher from "./models/teacher.js";
import Student from "./models/student.js";
import session from "express-session";
import bodyParser from "body-parser";




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

main()
.then(() => 
console.log("Connectiion Sucessful"))
.catch((err) => console.log("err"));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/StudentDataBase');
}



const port = 5000;

// Landing Page
app.get("/", (req,res) => {
    res.render("landingPage/home");
})
app.get("/courses", (req,res) => {
    res.render("landingPage/courses");
})
app.get("/info", (req,res) => {
    res.render("landingPage/info");
})
app.get("/notices", (req,res) => {
    res.render("landingPage/notices");
})
app.get("/signin", (req,res) => {
    res.render("landingPage/signin");
})
app.get("/signup", (req,res) => {
    res.render("landingPage/signup");
})

// signin Page
app.get("/student/signin", (req,res) => {
    res.render("signinPage/studentlogin");
})
app.get("/teacher/signin", (req,res) => {
    res.render("signinPage/teacherlogin");
})

// Student Authentication
app.post("/student", async (req, res) => {
  let { username, password } = req.body;

  const user = await Student.findOne({ fullname: username, password });

  if (!user) {
    return res.redirect("/");
  }
  req.session.info = {
    id : user._id,
    fullname: user.fullname,
    rollno : user.rollno,
    address : user.address,
    year : user.year,
    course : user.course,
    gmail : user.gmail,
    fathername : user.fathername,
    mothername :user.mothername,
    birthdate : user.birthdate,
    department : user.department,
    mobilenum : user.mobilenum,
  };

  res.render("student/home", { info: req.session.info });
});

// Teacher Authentication
app.post("/teacher", async (req, res) => {
  let { username, password } = req.body;
  const user = await Teacher.findOne({ fullname: username, password });
  if (!user) {
    return res.redirect("/");
  }
  req.session.info = {
    id: user._id,
    fullname: user.fullname,
    
  };

  res.render("teacher/home", { info: req.session.info });
});

app.listen(port, () => {
    console.log("Server is created");
})