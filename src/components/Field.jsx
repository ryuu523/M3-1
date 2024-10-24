import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFieldData } from "../api/api";
import Block from "./Block";
import "../styles/field.css"
function Field({field}) {
    return (
        <div className="flex">
            {
                field.map((row, y) => {
                    return row.map((data, x) => {
                        return <Block type={data} key={"block:" + y + x} />
                    })
                })
            }
        </div>
    );
}

export default Field;
