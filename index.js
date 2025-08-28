import express from "express"
const app = express();
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import Teacher from "./models/teacher.js";
import Student from "./models/student.js";
import Notice from "./models/notice.js";
import Curriculum from "./models/curriculum.js";
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
app.get("/notices", async (req,res) => {
    let notices = await Notice.find().sort({ date: -1 });
    res.render("landingPage/notices",{notices});
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

//signup page
app.post("/student/signup", async(req,res) => {
  let {fullname,rollno,address,year,course,department,mothername,fathername,gmail,mobilenum,birthdate,password} = req.body;
  try{
    await Student.insertOne({fullname,rollno,address,year,course,department,mothername,fathername,gmail,mobilenum,birthdate,password});
    res.render("landingPage/signinsucessful.ejs");
  }
  catch(err){
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
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
    year : user.year,
    gmail : user.gmail,
    department : user.department,
    mobilenum : user.mobilenum,
  };
  
  let department = user.department;
  let year = user.year;
  let curriculum = await findCurriculum(req, res, year, department);

  res.render("student/home", { info: req.session.info, curriculum });
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

// student
app.get("/student/:id/notices", async (req,res) => {
  let {id} = req.params;
  let info = await getinfoById(Student, req, id);
  let notices = await Notice.find().sort({ date: -1 });
  res.render("student/notices.ejs",{info, notices});
  
})

app.get("/student/:id/assignment", async (req,res) => {
  let {id} = req.params;
  res.render("student/assignment.ejs",{info : await getinfoById(Student,req,res,id)});
})

app.get("/student/:id/fees", async (req,res) => {
  let {id} = req.params;

  res.render("student/fees.ejs",{info : await getinfoById(Student,req,id)});
})

app.get("/student/:id/infoupdate", async (req,res) => {
  let {id} = req.params;

  res.render("student/infoupdate.ejs",{info : await getinfoById(Student,req,id)});
})

app.get("/student/:id/marks", async (req,res) => {
  let {id} = req.params;

  res.render("student/marks.ejs",{info : await getinfoById(Student,req,id)});
})

app.get("/student/:id/mentor", async (req,res) => {
  let {id} = req.params;

  res.render("student/mentor.ejs",{info : await getinfoById(Student,req,id)});
})

app.get("/student/:id/papers", async (req,res) => {
  let {id} = req.params;
  let info = await getinfoById(Student, req, id)

  res.render("student/papers.ejs",{info});
})

app.get("/student/:id/routine", async (req,res) => {
  let {id} = req.params;

  res.render("student/routine.ejs",{info : await getinfoById(Student,req,id)});
})

app.get("/student/:id/syllabus", async (req,res) => {
  let {id} = req.params;

  res.render("student/syllabus.ejs",{info : await getinfoById(Student,req,id)});
})
let findStudent = async (req,res,x,dep) => {
  try{
    let students = await Student.find({ year: x , department: dep });

    return students;
  }
  catch (err) {
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
}

app.get("/student/paper/:st/:pp",async (req,res) => {
  let { st, pp } = req.params;
  let student = await getinfoById(Student, req, res, st);
  let paper = await findpaperbyId(req,res,pp);
  
  res.render("student/papers.ejs", { student, paper })
})

// functions

const findpaperbyId = async (req,res,pp) => {
   try{
     let paper = await Curriculum.findOne({ "papers._id": pp }, { papers: { $elemMatch: { _id: pp } } })  //  only matching paper return not the ehole curriculum 
     return paper.papers[0];
   }
   catch(err){
    console.log(err);
     res.render("landingPage/errorpage.ejs")
   }
  }

const getinfoById = async (Student, req, res, id) => {
  try {
    const student = await Student.findById(id);
    return student;

  } catch (err) {
    console.error(err.message);
    res.render("landingPage/errorpage.ejs");
  }
};

let findCurriculum = async (req,res, x, dep) => {
  try {
    let curriculum = await Curriculum.find({ semester: { $in: [2 * x, 2 * x - 1] }, department: dep });
    return curriculum;
  }
  catch (err) {
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
}

let findDepartment = async (Database,res,id) => {
  try {
    let department = await Database.findById(id);
    return department.department;
  }
  catch (err) {
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
}


// Teacher
app.get("/teacher/:id/firstyear",async (req,res) => {
  let {id} = req.params;
  let department = await findDepartment(Teacher,res,id);
  let student = await findStudent(req,res, 1,department);
  let curriculum = await findCurriculum(req,res,1,department);
  res.render("teacher/firstyear", { curriculum, student });
});

app.get("/teacher/:id/secondyear", async(req, res) => {
  let { id } = req.params;
  let department = await findDepartment(Teacher,res, id);

  let student = await findStudent(req, res, 2, department);

  let curriculum = await findCurriculum(req, res, 2, department);

  res.render("teacher/secondyear", { curriculum, student });
});

app.get("/teacher/:id/thirdyear", async (req, res) => {
  let { id } = req.params;
  let department = await findDepartment(Teacher,res, id);
  let student = await findStudent(req, res, 3, department);
  let curriculum = await findCurriculum(req, res, 3, department);
  res.render("teacher/thirdyear", { curriculum, student });
});

app.get("/teacher/:id/fourthyear", async (req, res) => {
  let { id } = req.params;
  let department = await findDepartment(Teacher,res, id);
  let student = await findStudent(req, res, 4, department);
  let curriculum = await findCurriculum(req, res, 4, department);
  res.render("teacher/fourthyear", { curriculum, student });
});

app.get("/teacher/:id/analysis", (req, res) => {
  res.render("teacher/analysis");
});
app.get("/teacher/:id/facultymembers", (req, res) => {
  res.render("teacher/facultymember");
});
app.get("/teacher/:id/info", (req, res) => {
  res.render("teacher/info");
});
app.get("/teacher/:id/students", (req, res) => {
  res.render("teacher/students");
});
app.get("/teacher/:id/routine", (req, res) => {
  res.render("teacher/routine");
})



app.listen(port, () => {
    console.log("Server is created");
})