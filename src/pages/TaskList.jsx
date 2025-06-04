import { useGlobalContext } from "../context/GlobalContext"
import { useState, useMemo } from "react"
import TaskRow from "../components/TaskRow"

const TaskList = () => {
    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)

    const { tasks } = useGlobalContext()

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1) // inverti l'ordine
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const sortedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let comparison = 0

            if (sortBy === 'title') {
                comparison = a.title.localeCompare(b.title)
            } else if (sortBy === 'status') {
                const statusOrder = ['To do', 'Doing', 'Done']
                comparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
            } else if (sortBy === 'createdAt') {
                comparison = new Date(a.createdAt) - new Date(b.createdAt)
            }

            return comparison * sortOrder
        })
    }, [tasks, sortBy, sortOrder])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')}>Nome</th>
                        <th onClick={() => handleSort('status')}>Stato</th>
                        <th onClick={() => handleSort('createdAt')}>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTasks.map((task) => (
                        <TaskRow key={task.id} item={task} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList
