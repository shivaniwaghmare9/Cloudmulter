import { useState } from "react";
import axios from "axios"

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
        formData.append("cloud_preset","shivaniphoto")
        formData.append("cloud_name","dw6g4l0ga")
        const response=await axios.post(api.formData)
        console.log(response)
        console.log(response.data.url)
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
