
import { Link } from "react-router-dom";
import { memo } from "react";
const TaskRow = memo(({ item }) => {
    const { title, status, createdAt, id } = item
    return (
        <tr>
            <td><Link to={`/tasks/${id}`}>{title}</Link></td>
            <td className={status.toLowerCase().replace(/ /g, "_")}>{status}</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
        </tr>
    )
})

export default TaskRow
