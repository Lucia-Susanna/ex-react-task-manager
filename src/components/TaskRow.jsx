
import { Link } from "react-router-dom";
import React from "react";
const TaskRow = ({ item }) => {
    const { title, status, createdAt, id } = item
    return (
        <tr>
            <td><Link to={`/tasks/${id}`}>{title}</Link></td>
            <td className={status.toLowerCase().replace(/ /g, "_")}>{status}</td>
            <td>{createdAt}</td>
        </tr>
    )
}

export default React.memo(TaskRow);
