import React from "react";

export default function TableRow(props) {
    const {specTitle,children} = props;

    return <>
        <tr cell>
            <td className="col-3">{specTitle}</td>
            <td>{children}</td>
        </tr>
    </>
}