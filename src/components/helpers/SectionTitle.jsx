import React from "react";

export default function SectionTitle(props) {
    const {type,text,...rest} = props;
    if(type === "h1"){
        return <h1 {...rest}>{text}</h1>
    }
    return <h2 {...rest}>{text}</h2>
}