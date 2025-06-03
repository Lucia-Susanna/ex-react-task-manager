import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
const TaskList = () => {

    const {
        fetchTasks
    } = useGlobalContext()

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            lista delle task
        </div>
    )
}

export default TaskList
