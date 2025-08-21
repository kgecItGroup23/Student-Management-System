import express from "express"
const app = express();
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
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
app.post("/student",(req,res) => {
    let {username,password} = req.body;
    let id = 1;
    let info = {username,id}
    res.render("student/home",{info});
})
app.post("/teacher",(req,res) => {
    let {username,password} = req.body;
    let id = 1;
    let info = {username,id}
    res.render("teacher/home",{info});
})

app.listen(port, () => {
    console.log("Server is created");
})