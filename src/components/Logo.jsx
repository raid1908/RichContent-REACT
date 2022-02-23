import React from "react";
import logo from "../media/lenovo-logo-01.svg";


export default function Logo(props){
    const {...rest} = props;
    return <>
        <div className="logo-container">
            <img {...rest} src={logo} />
        </div>
    </>
}