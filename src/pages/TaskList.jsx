import { useGlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"
const TaskList = () => {

    const {
        tasks
    } = useGlobalContext()

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => <TaskRow key={task.id} item={task} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList
