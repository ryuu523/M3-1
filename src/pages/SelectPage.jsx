import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, logout } from "../api/api";

function SelectPage() {
    const [nickname, setNickname] = useState("")
    const navigate = useNavigate();
    const handleGetProfile = async () => {
        try {
            const data = await getProfile()
            setNickname(data.profile.nickname)
        }
        catch (e) {
            alert(e.message);
        }
    }
    const handleLogout = () => {
        logout()
        navigate("/")
    }
    const selectDifficulty = (difficulty) => {
        navigate("/game", { state: { difficulty: difficulty } })
    }
    useEffect(() => {
        handleGetProfile()
    }, [])
    return (
        <>
            <h1>welcome {nickname} !</h1>
            <button onClick={() => { navigate("/profile") }}>profilesettings</button>
            <button onClick={() => handleLogout()}>logout</button>
            <button onClick={() => { selectDifficulty("easy") }}>easy</button>
            <button onClick={() => { selectDifficulty("normal") }}>normal</button>
        </>
    );
}

export default SelectPage;
