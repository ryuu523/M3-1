import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, UpdateProfile } from "../api/api";
import AuthLayout from "../components/AuthLayout";

function ProfilePage() {
    const [username,setUsername]=useState("")
    const [nickname,setNickname]=useState("")
    const navigate=useNavigate()
    const handleGetProfile = async () => {
        try {
            const data = await getProfile()
            setUsername(data.profile.username)
            setNickname(data.profile.nickname)
        }
        catch (e) {
            alert(e.message);
        }
    }
    const handleUpdateProfile=async()=>{
        try{

            const data=await UpdateProfile(username,nickname)
            navigate("/select")
        }
        catch(e){
            alert(e.message)
        }
    }
    useEffect(()=>{
        handleGetProfile()
    },[])
  return (
    <>
    <h1>profilesettings</h1>
    username<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    nickname<input type="text" value={nickname} onChange={(e)=>setNickname(e.target.value)} />
    <button onClick={()=>handleUpdateProfile()}>update</button>
    </>
  );
}

export default ProfilePage;
