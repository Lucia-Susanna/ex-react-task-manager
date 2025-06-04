import { useParams, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import Modal from "../components/Modal"
import EditTaskModal from "../components/EditTaskModal"
import { useState } from "react"
const TaskDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask, updateTask } = useGlobalContext()
    const selectedTask = tasks.find(task => task.id.toString() === id)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)


    const handleDelete = async () => {
        try {
            await removeTask(id)
            alert("Task eliminata con successo.")
            navigate("/")
        } catch (err) {
            alert(err.message)
        }
    }

    const handleUpdate = async updatedTask => {
        try {
            await updateTask(updatedTask)
            setShowEditModal(false)
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }
    return (
        <div>
            <h2>{selectedTask?.title}</h2>
            <p>{selectedTask?.description}</p>
            <p>{selectedTask?.status}</p>
            <p>{new Date(selectedTask?.createdAt).toLocaleDateString()}</p>

            <button onClick={() => setShowDeleteModal(true)}>Elimina task</button>
            <button onClick={() => setShowEditModal(true)}>Modifica task</button>

            <Modal
                title="Eliminazione task"
                content="Sei sicuro di voler eliminare questa task?"
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"

            />

            <EditTaskModal
                task={selectedTask}
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleUpdate}
            />
        </div>
    )
}
export default TaskDetail
