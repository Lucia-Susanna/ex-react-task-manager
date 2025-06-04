import { useGlobalContext } from "../context/GlobalContext"
import { useState, useMemo, useCallback } from "react"
import TaskRow from "../components/TaskRow"

function debounce(callback, delay) {
    let timer
    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

const TaskList = () => {
    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const debounceSearch = useCallback(debounce(setSearchQuery, 500)
        , [])

    const { tasks } = useGlobalContext()

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1) // inverti l'ordine
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const filteredAndSortedTasks = useMemo(() => {
        return [...tasks]
            .filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
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
    }, [tasks, sortBy, sortOrder, searchQuery])

    return (
        <div>

            <input
                type="text"
                placeholder="cerca una task"
                onChange={e => debounceSearch(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')}>Nome</th>
                        <th onClick={() => handleSort('status')}>Stato</th>
                        <th onClick={() => handleSort('createdAt')}>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedTasks.map((task) => (
                        <TaskRow key={task.id} item={task} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList
