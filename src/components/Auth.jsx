import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


function Auth({ children }) {
    const token = sessionStorage.getItem("token")
    if (!token) {
        return <Navigate to="/" replace />
    }
    else {
        return children
    }
}

export default Auth;
