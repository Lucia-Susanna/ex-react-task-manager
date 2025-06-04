import Modal from "./Modal"
import { useState, useRef } from "react"

const EditTaskModal = ({ show, onClose, task, onSave }) => {
    const [editedTask, setEditedTask] = useState(task)
    const editFormRef = useRef()
    const changedEditedTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        onSave(editedTask)
    }

    const { title, description, status } = editedTask

    const formContent = (
        <form ref={editFormRef} onSubmit={handleSubmit} className="task-form">
            <div className="task-form-group">
                <label htmlFor="edit-title" className="task-form-label">Nome</label>
                <input
                    id="edit-title"
                    type="text"
                    value={title}
                    onChange={e => changedEditedTask('title', e)}
                    className="task-form-input"
                    required
                />
            </div>
            <div className="task-form-group">
                <label htmlFor="edit-description" className="task-form-label">Descrizione</label>
                <textarea
                    id="edit-description"
                    value={description}
                    onChange={e => changedEditedTask('description', e)}
                    className="task-form-textarea"
                />
            </div>
            <div className="task-form-group">
                <label htmlFor="edit-status" className="task-form-label">Stato</label>
                <select
                    id="edit-status"
                    value={status}
                    onChange={e => changedEditedTask('status', e)}
                    className="task-form-select"
                >
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </form>
    )

    return (
        <Modal
            title="Modifica Task"
            content={formContent}
            confirmText="Salva"
            onConfirm={() => editFormRef.current.requestSubmit()}
            show={show}
            onClose={onClose}
        />
    )
}

export default EditTaskModal
