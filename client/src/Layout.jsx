
import { Outlet } from 'react-router-dom';

import Topnav from "./Topnav";
const Layout=()=>{
    return(
        <>
          <Topnav/>
           <Outlet/>
        </>
    )
}
export default Layout;