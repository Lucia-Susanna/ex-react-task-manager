import { useGlobalContext } from "../context/GlobalContext"

const AddTask = () => {

    const {
        title,
        setTitle,
        description,
        status,
        handlerNewTask
    } = useGlobalContext()

    return (
        <form onSubmit={handlerNewTask} className="task-form">
            <h2 className="task-form-title">Aggiungi una nuova task</h2>
            <div className="task-form-group">
                <label htmlFor="title" className="task-form-label">Nome della task</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="task-form-input"
                    required
                />
            </div>
            <div className="task-form-group">
                <label htmlFor="description" className="task-form-label">Descrizione della task</label>
                <textarea
                    id="description"
                    ref={description}
                    className="task-form-textarea"
                />
            </div>
            <div className="task-form-group">
                <label htmlFor="status" className="task-form-label">Stato della task</label>
                <select
                    name="status"
                    id="status"
                    ref={status}
                    defaultValue='To do'
                    className="task-form-select"
                >
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <button type="submit" className="task-form-submit">Invia</button>
        </form>
    )
}

export default AddTask
