import { useState } from "react";


const Single=()=>{
    const[image,setImage]=useState("")
    const handleImage=(e)=>{
        setImage(e.target.files[0]);
        //console.log(file)
    }
    const handleSubmit=async()=>{
        let api="http://api.cloudinary.com/v1_1/dw6g4l0ga/image/upload";
        const formData=new FormData();
        formData.append("file",image)
    }
    return(
        <>
         <h3>Single file uploding</h3>
         Upload Image: <input type="=file" onChange={handleImage} /><br/><br/>
         <button onClick={handleSubmit}>Upload</button>
        </>
    )
}
export default Single;
