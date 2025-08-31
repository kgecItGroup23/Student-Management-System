import express from "express"
const app = express();
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import Teacher from "./models/teacher.js";
import Student from "./models/student.js";
import Notice from "./models/notice.js";
import Annoucement from "./models/annoucement.js";
import Curriculum from "./models/curriculum.js";
import Mark from "./models/marks.js";
import session from "express-session";
import bodyParser from "body-parser";
import multer from "multer";
import { log } from "console";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

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
app.get("/info", async (req,res) => {
  let teachers = await Teacher.find().sort({department : 1});
  let totalteacher = await Teacher.countDocuments();
  res.render("landingPage/info", { teachers, totalteacher });
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
  let {fullname,rollno,year,course,department,gmail,mobilenum,password} = req.body;
  try{
    await Student.create({ fullname, rollno, year, course, department, gmail, mobilenum, password });

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
    designation: user.designation,
    gmail: user.gmail,
    mobilenum: user.mobilenum,
    department: user.department,
  };
  const notices = await Notice.find(); 

  res.render("teacher/home", { info: req.session.info ,Notice : notices});
});



// student
app.get("/student/:id/notices", async (req,res) => {
  let {id} = req.params;
  let info = await getinfoById(Student, req,res, id);
  let notices = await Notice.find().sort({ date: -1 });
  res.render("student/notices.ejs",{info, notices});
  
})

app.get("/student/:id/assignment", async (req,res) => {
  let {id} = req.params;
  res.render("student/assignment.ejs",{info : await getinfoById(Student,req,res,id)});
})

app.get("/student/:id/fees", async (req,res) => {
  let {id} = req.params;

  res.render("student/fees.ejs",{info : await getinfoById(Student,req,res,id)});
})

app.get("/student/:id/infoupdate", async (req,res) => {
  let {id} = req.params;
  let student = await getinfoById(Student,req,res,id);
  res.render("student/infoupdate.ejs",{student});
})

app.get("/student/:id/marks", async (req,res) => {
  let {id} = req.params;

  res.render("student/marks.ejs",{info : await getinfoById(Student,req,res,id)});
})

app.get("/student/:id/mentor", async (req,res) => {
  let { id } = req.params;
  let department = await findDepartment(Student, res, id);
  let teachers = await findDatabydep(Teacher,req, res, department);
  res.render("student/mentor.ejs",{teachers});
})

app.get("/student/:id/papers", async (req,res) => {
  let {id} = req.params;
  let info = await getinfoById(Student, req, res, id)
  res.render("student/papers.ejs",{info});
})

app.get("/student/:id/routine", async (req,res) => {
  let {id} = req.params;

  res.render("student/routine.ejs", { info: await getinfoById(Student, req, res,id)});
})

app.get("/student/:id/syllabus", async (req,res) => {
  let {id} = req.params;

  res.render("student/syllabus.ejs",{info : await getinfoById(Student,req,res,id)});
})


app.get("/student/paper/:st/:pp",async (req,res) => {
  let { st, pp } = req.params;
  let student = await getinfoById(Student, req, res, st);
  let paper = await findpaperbyId(req,res,pp);
  let year = student.year, department = student.department;
  let allstudent = await findStudent(req, res, year,department);
  res.render("student/papers.ejs", { student, paper, allstudent });
})

app.patch("/student/:id/infoupdate",async (req,res) => {
  let {id} = req.params;
  let {password,mobilenum,gmail} = req.body;
  await Student.findByIdAndUpdate(id,{password : password, mobilenum : mobilenum, gmail : gmail});
  res.redirect(`/student/${id}/infoupdate`);
});


// functions

const findDepartmentByPaperId = async (res,paperId) => {
  try {
    const objectId = new mongoose.Types.ObjectId(paperId);

    const result = await Curriculum.findOne(
      { "papers._id": objectId },
      { department: 1 }  // Only return department field
    );

  

    return result.department;
  } catch (err) {
    res.render("landingPage/errorpage.ejs");

  }
};

let findStudent = async (req, res, x, dep) => {
  try {
    let students = await Student.find({ year: x, department: dep });

    return students;
  }
  catch (err) {
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
}
const findpaperbyId = async (req,res,pp) => {
   try{
     const paperId = new mongoose.Types.ObjectId(pp);
     let paper = await Curriculum.findOne({ "papers._id": paperId }, { papers: { $elemMatch: { _id: paperId } } })  //  only matching paper return not the ehole curriculum 
     console.log(paper._id)
     return paper.papers[0];
   }
   catch(err){
    console.log(err);
     res.render("landingPage/errorpage.ejs")
   }
  }

const getinfoById = async (Databse, req, res, id) => {
  try {
    const user = await Databse.findById(id);
    return user;

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
    let data = await Database.findById(id);
    return data.department;
  }
  catch (err) {
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
}

let findDatabydep = async (Database,req,res,dep) => {
  try{
    let user = await Database.find({ department: dep })
    return user;
  }
  catch(err){
    console.log(err);
    res.render("landingPage/errorpage.ejs");
  }
}





// Teacher

app.get("/teacher/:id/analysis",  (req, res) => {
  
  res.render("teacher/analysis");
});
app.get("/teacher/:id/facultymembers", async  (req, res) => {
  let { id } = req.params;
  let department = await findDepartment(Teacher, res, id);
  let teachers = await findDatabydep(Teacher,req, res, department);
  res.render("teacher/facultymember",{teachers});
});
app.get("/teacher/:id/info", (req, res) => {
  res.render("teacher/info");
});

app.get("/teacher/:id/routine", (req, res) => {
  res.render("teacher/routine");
})
app.get("/teacher/:id/view",async (req,res) => {
  let {id} = req.params;
  let teacher = await getinfoById(Teacher,req,res,id);
  
  res.render("teacher/viewSinglefaculty",{teacher});

})
app.get("/teacher/:id/students", async (req, res) => {
  let { id } = req.params;
  let department = await findDepartment(Teacher, res, id);
  let students = await findDatabydep(Student, req, res, department);
  students.sort((a, b) => a.year - b.year);
  let curriculum = await findDatabydep(Curriculum, req, res, department);
  res.render("teacher/students", { students, Mark, curriculum });
});
app.get("/teacher/:id/singleview", async (req,res) => {
  let { id } = req.params;
  let s = await getinfoById(Student,req,res,id)
  let department = s.department;
  let students = await findDatabydep(Student, req, res, department);
  let year = s.year;  
  let curriculum = await findCurriculum(req, res, year, department);
  res.render("teacher/viewSinglestudent", { students, Mark, curriculum ,year,s});
})

// papers
app.get("/teacher/year/:year/:id", async (req, res) => {
  let { year, id } = req.params;
  let paper = await findpaperbyId(req, res, id);
  let department = await findDepartmentByPaperId(res, id);
  let student = await findStudent(req, res, parseInt(year), department);
  let annoucement = await Annoucement.find({ papername : paper.paperName})
  console.log(annoucement)
  console.log(paper.paperName)
  res.render("teacher/paper", { paper, student, y: parseInt(year), annoucement })

});
// year
app.get("/teacher/:id/:year", async (req, res) => {
  let { id, year } = req.params;
  let department = await findDepartment(Teacher, res, id);
  let student = await findStudent(req, res, parseInt(year), department);
  let curriculum = await findCurriculum(req, res, parseInt(year), department);
  res.render("teacher/year", { curriculum, student });
});




// file Uploads

// annoucement upload

const annoucementstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/annoucement')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const annouceupload = multer({ storage: annoucementstorage })

app.post('/uploads/annoucement/:year/:id', annouceupload.single('annoucement'), async function (req, res, next) {
  let {id,year} =req.params;
  // console.log(req.body);
  // console.log(req.file.path);
  let { annoucement, title } = req.body;
  let date = new Date().toLocaleString("en-IN")
  let paper = await findpaperbyId(req,res,id);
  const newnAnnoucement = new Annoucement({
    url: `/uploads/annoucement/${req.file.filename}`,
    title,
    date,
    papername: paper.paperName,
  });
  await newnAnnoucement.save();
  // console.log(req.file.path)
  res.redirect(`/teacher/year/${year}/${id}`);
})

// notice Upload

const noticestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/notice')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const noticeupload = multer({ storage: noticestorage })

app.post('/uploads/notice', noticeupload.single('notice'),async function (req, res, next) {
  // console.log(req.body);
  // console.log(req.file.path);
  let {notice,title} = req.body;
  let date = new Date().toLocaleString("en-IN")
  const newNotice = new Notice({
    url: `/uploads/notice/${req.file.filename}`,
    title,
    date,
  });
  await newNotice.save();
  res.redirect("/teacher")
})






app.listen(port, () => {
    console.log("Server is created");
})