import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFieldData } from "../api/api";
import flag from "../images/file.png"
import player from "../images/26.png"
import wall from "../images/28.jpeg"
import block from "../images/17.jpeg"
import "../styles/block.css"
function Block({ type }) {
    const getImageSrc = (type) => {

        switch (type) {
            case 1:
                return wall
            case 2:
                return player
            case 3:
                return block
            case 4:
                return flag
        }
    }

    return (
        <div className="relative">
            <div className="block back"></div>
            {type != 0 ? <img className="block" src={getImageSrc(type)} /> : <></>}
        </div>
    );
}

export default Block;
