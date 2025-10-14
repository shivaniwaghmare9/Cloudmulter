
//======================================================IMAGE UPLOAD USING MULTER================================================================
// const express=require("express");
// const app=express();
// const multer=require("multer")
// const cors=require("cors")
// const Port=8000


// app.use(cors());
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"uploads");     //save files to upload directory
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname); //keep original file name
//     }

   
// })
// const upload=multer({storage:storage})
//  app.post("/upload",upload.single("file"),(req,res)=>{
//     const filename=req.file.originalname;
//     console.log("file upload !!");
//     res.send({filename:filename})
//  })

//  app.listen(Port,()=>{
//     console.log(`Server run on port ${Port}`)
//  })




//======================================================IMAGE UPLOAD USING (MULTER-cloudinary)================================================================


 const express=require("express");
const cors=require("cors");
require("dotenv").config();
const multer=require("multer");

const app=express();
app.use(cors());
const {v2}=require("cloudinary");
const {CloudinaryStorage}=require("multer-storage-cloudinary");

// Cloudinary Config
v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

//Multer Storage
const storage=new CloudinaryStorage({
    cloudinary:v2,
    params:{
         folder: "mern_uploads",
         allowed_formats: ["jpg", "png", "jpeg", "pdf"],
 },
});
const upload = multer({ storage: storage });
// Multiple file upload API
app.post("/upload-multiple", upload.array("files", 10), (req, res) => {
 try {
 const urls = req.files.map(file => file.path); // Cloudinary URLs
 res.json({ success: true, files: urls });
 } catch (err) {
 res.status(500).json({ success: false, message: err.message });
 }
});

const Port=process.env.PORT ||4000
app.listen(Port,()=>{
   console.log(`server running on port ${Port}`);
})