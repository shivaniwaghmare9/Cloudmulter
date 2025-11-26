import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Single from "./pages/Singlefile";
import Multer from "./pages/Multerfile";
import Multiple from "./pages/Multiplefile";


const App=()=>{
  return(
    <>
     <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Single/>}/>
          <Route path="single" element={<Single/>}/>
          <Route path="multer" element={<Multer/>}/>
          <Route path="multiple" element={<Multiple/>}/>
          
          
          </Route>
         </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;