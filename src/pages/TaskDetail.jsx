import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"


const TaskDetail = () => {
    const { id } = useParams()
    const { tasks, removeTask } = useGlobalContext()
    const selectedTask = tasks.find(task => task.id.toString() === id)


    return (
        <div>
            <h2>{selectedTask?.title}</h2>
            <p>{selectedTask?.description}</p>
            <p>{selectedTask?.status}</p>
            <p>{selectedTask?.createdAt}</p>

            <button onClick={() => removeTask(id)}>Elimina task</button>
        </div>
    )
}

export default TaskDetail
