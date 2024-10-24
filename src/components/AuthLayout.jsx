import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "./Auth";


function AuthLayout({ children }) {
   return(
     <Auth>
        <Outlet />
     </Auth>
   )
}

export default AuthLayout;
