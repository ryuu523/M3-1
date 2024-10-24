import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFieldData } from "../api/api";
import Block from "../components/Block";
import Field from "../components/Field";

function GamePage() {
    const navigate = useNavigate()
    const location = useLocation()
    const { difficulty } = location.state
    const [field, setField] = useState([])
    const [playerPos, setPlayerPos] = useState({ y: 1, x: 1 })
    const [gameEnd, setGameEnd] = useState(false)
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (field.length == 0) return
        console.log(playerPos);

        setField((prev) => {
            const clone = prev.map((row) => row.concat())
            const newField = clone.map((row, y) => {
                return row.map((type, x) => {
                    if (type == 2) {
                        return 0
                    }
                    else {
                        return type
                    }
                })
            })
            if (newField[playerPos.y][playerPos.x] == 4) {
                setGameEnd(true)
            }
            else {
                newField[playerPos.y][playerPos.x] = 2
            }
            return newField
        })
    }, [playerPos])

    useEffect(() => {
        if (!gameEnd) return
        navigate("/clear", { state: { difficulty: difficulty } })
    }, [gameEnd])
    const handleGetField = async () => {
        try {
            const data = await getFieldData()
            setField(data.objects)
        }
        catch (e) {
            alert(e.message)
        }
    }
    useEffect(() => {
        const handleKeyDown = (e) => {
            let vec = { y: 0, x: 0 }
            switch (e.key) {

                case "ArrowUp":
                    vec.y = -1
                    break
                case "ArrowDown":
                    vec.y = 1
                    break
                case "ArrowLeft":
                    vec.x = -1
                    break
                case "ArrowRight":
                    vec.x = 1
                    break
            }

            if (field[playerPos.y + vec.y][playerPos.x + vec.x] == 1) return

            if (field[playerPos.y + vec.y][playerPos.x + vec.x] == 3) {

                if (field[playerPos.y + vec.y * 2][playerPos.x + vec.x * 2] != 0) return

                setField((prev) => {
                    const clone = prev.map((row) => row.concat())
                    clone[playerPos.y + vec.y][playerPos.x + vec.x] = 0
                    clone[playerPos.y + vec.y * 2][playerPos.x + vec.x * 2] = 3
                    return clone
                })
                return
            }

            setPlayerPos((prev) => ({ ...prev, y: prev.y + vec.y, x: prev.x + vec.x }))
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)


    }, [field])
    useEffect(() => {
        handleGetField()
        const interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 100)
    }, [])
    const formatTime = (time) => {
        let m = Math.floor(time / 60)
        let s = time % 60
        if (s < 10) {
            s = "0" + s
        }
        return `${m}:${s}`
    }
    return (
        <>
            <h1>game</h1>
            <h1>{formatTime(time)}</h1>
            <Field field={field} />
        </>
    );
}

export default GamePage;
