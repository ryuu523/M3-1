import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResults } from "../api/api";


function ClearPage() {
    const [results, setResults] = useState([])
    const navigate = useNavigate()
    const handleGetResults = async () => {
        try {
            const data = await getResults()
            console.log(data);
            setResults(data)
        }
        catch (e) {
            alert(e.message)
        }
    }
    useEffect(() => {
        handleGetResults()
    }, [])
    return (
        <>
            <h1>clear</h1>
            {
                results.map((data) => {
                    return data
                })
            }
            <button onClick={() => navigate("/select")}>replay</button>
        </>
    );
}

export default ClearPage;
