import multer from "multer";
import path from "path";

// Store file temporarily in /public/temp
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}- ${(file.originalname)}`);
    }
});

const upload = multer({ storage });

export default upload;
