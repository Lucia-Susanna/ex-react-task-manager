import { useParams, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"


const TaskDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask } = useGlobalContext()
    const selectedTask = tasks.find(task => task.id.toString() === id)

    const handleDelete = async () => {
        try {
            await removeTask(id)
            alert("Task eliminata con successo.")
            navigate("/")
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div>
            <h2>{selectedTask?.title}</h2>
            <p>{selectedTask?.description}</p>
            <p>{selectedTask?.status}</p>
            <p>{new Date(selectedTask?.createdAt).toLocaleDateString()}</p>

            <button onClick={handleDelete}>Elimina task</button>
        </div>
    )
}

export default TaskDetail
