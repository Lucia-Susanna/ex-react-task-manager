
import React from "react";
const TaskRow = ({ item }) => {
    const { title, status, createdAt } = item
    return (
        <tr>
            <td>{title}</td>
            <td className={status.toLowerCase().replace(/ /g, "_")}>{status}</td>
            <td>{createdAt}</td>
        </tr>
    )
}

export default React.memo(TaskRow);
