import axios from "axios";
import { useState } from "react";

const Multer=()=>{
    const [file,setFile]=useState("");
   const handleImage=(e)=>{
    setFile(e.target.files[0]);
    console.log(file)
   }
   const handleSubmit=async()=>{
    const formData=new FormData();
    formData.append("file",file)
     let api=""
     try {
        const response=await axios.post(api,formData)
        console.log(response)
        alert(`File:+response.data.filename+" successfully uploaded"`)
     } catch (error) {
        console.log(error)
     }
   }
    return(
        <>
         <h3>Multer using file uploding</h3>
         Upload Your Image: <input type="file" onChange={handleImage}/><br/><br/>
         <button onClick={handleSubmit}>Upload</button>
        </>
    )
}
export default Multer;