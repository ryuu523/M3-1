import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../api/api";

function StartPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async () => {
        try{
            const data = await login(name, password)
            console.log(data);
            
            sessionStorage.setItem("token",data.token)
            navigate("/select")
        }
        catch(e){
            alert(e.message);
        }
    }
    return (
        <>
            username<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => { handleLogin() }}>ログイン</button>
        </>
    );
}

export default StartPage;
