import multer from "multer";
import path from "path";
import fs from "fs";

// absolute path to public folder
const uploadDir = path.join(process.cwd(), "server", "public");

// ensure folder exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + "-" + file.originalname;
        cb(null, filename);
    }
});

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function(req, file , cb){
//         cb(null , "public")
//     },
//     filename: function(req , file , cb){
//         const filename = Date.now() + "-" + file.originalname;
//         cb(null , filename)
//     }
// })


// export const upload = multer({
//     storage,
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// });
