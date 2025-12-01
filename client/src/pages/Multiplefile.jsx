

// //==============================================================FILE UPLOAD(MULTIPLE-FILE UPLOADIN USING CLOUDINARY)========================

// import { useState } from "react";
// import axios from "axios";
// const Multiple=()=>{
//   const [files, setFiles] = useState([]);
//  const [uploadedUrls, setUploadedUrls] = useState([]);
//  const handleUpload = async () => {
//   if (!files.length) return alert("Please select files");
//  const formData = new FormData();
//  for (let i = 0; i < files.length; i++) {
//  formData.append("files", files[i]);
//  }
//  try {
//  const res = await axios.post("http://localhost:4000/upload-multiple",
// formData, {
//  headers: { "Content-Type": "multipart/form-data" },
//  });
//  setUploadedUrls(res.data.files);
//  } catch (err) {
//  console.error(err);
//  }
//  };
//  return (
//  <div>
//  <h2>Upload Multiple Files to Cloudinary</h2>
//  <input type="file" multiple onChange={(e) => setFiles([...e.target.files])}/>
//  <button onClick={handleUpload}>Upload</button>


//  {uploadedUrls.length > 0 && (
//  <div>
//  <h3>Uploaded Files:</h3>
//  {uploadedUrls.map((url, index) => (
//  <div key={index} style={{ margin: "10px 0" }}>
//  <a href={url} target="_blank" rel="noreferrer">{url}</a>
//  <br />
//  {url.match(/\.(jpg|jpeg|png)$/) && (
//  <img src={url} alt="uploaded" style={{ width: "200px", marginTop:"5px" }} />
//  )}
//  </div>
//  ))}
//  </div>
//  )}
//  </div>
//  );
// }
// export default Multiple;


//==============================================================FILE UPLOAD(MULTIPLE-FILE UPLOADIN USING CLOUDINARY)========================

import { useState } from "react";
import axios from "axios";
const Multiple=()=>{
  const [files, setFiles] = useState([]);
 const [uploadedUrls, setUploadedUrls] = useState([]);
 const handleUpload = async () => {
  if (!files.length) return alert("Please select files");
 const formData = new FormData();
 for (let i = 0; i < files.length; i++) {
 formData.append("files", files[i]);
 }
 try {
 const res = await axios.post("http://localhost:4000/upload-multiple",
formData, {
 headers: { "Content-Type": "multipart/form-data" },
 });
 setUploadedUrls(res.data.files);
 } catch (err) {
 console.error(err);
 }
 };
 return (
 <div>
 <h2>Upload Multiple Files to Cloudinary</h2>
 <input type="file" multiple onChange={(e) => setFiles([...e.target.files])}/>
 <button onClick={handleUpload}>Upload</button>


 {uploadedUrls.length > 0 && (
 <div>
 <h3>Uploaded Files:</h3>
 {uploadedUrls.map((url, index) => (
 <div key={index} style={{ margin: "10px 0" }}>
 <a href={url} target="_blank" rel="noreferrer">{url}</a>
 <br />
 {url.match(/\.(jpg|jpeg|png)$/) && (
 <img src={url} alt="uploaded" style={{ width: "200px", marginTop:"5px" }} />
 )}
 </div>
 ))}
 </div>
 )}
 </div>
 );
}
export default Multiple;