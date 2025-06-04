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
        <form ref={editFormRef} onSubmit={handleSubmit} style={{ minWidth: 260 }}>
            <div style={{ marginBottom: 16 }}>
                <label htmlFor="edit-title" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Nome</label>
                <input
                    id="edit-title"
                    type="text"
                    value={title}
                    onChange={e => changedEditedTask('title', e)}
                    style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid #e3e6ea",
                        fontSize: "1rem"
                    }}
                    required
                />
            </div>
            <div style={{ marginBottom: 16 }}>
                <label htmlFor="edit-description" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Descrizione</label>
                <textarea
                    id="edit-description"
                    value={description}
                    onChange={e => changedEditedTask('description', e)}
                    style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid #e3e6ea",
                        fontSize: "1rem",
                        minHeight: 60,
                        resize: "vertical"
                    }}
                />
            </div>
            <div style={{ marginBottom: 0 }}>
                <label htmlFor="edit-status" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Stato</label>
                <select
                    id="edit-status"
                    value={status}
                    onChange={e => changedEditedTask('status', e)}
                    style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid #e3e6ea",
                        fontSize: "1rem"
                    }}
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
