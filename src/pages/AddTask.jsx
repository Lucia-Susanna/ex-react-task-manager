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
        <form onSubmit={handlerNewTask} style={{ maxWidth: 500, margin: "0 auto", background: "#fafbfc", padding: 32, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Aggiungi una nuova task</h2>
            <div style={{ marginBottom: 18 }}>
                <label htmlFor="title" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Nome della task</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: 6,
                        border: "1px solid #e3e6ea",
                        fontSize: "1rem"
                    }}
                    required
                />
            </div>
            <div style={{ marginBottom: 18 }}>
                <label htmlFor="description" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Descrizione della task</label>
                <textarea
                    id="description"
                    ref={description}
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: 6,
                        border: "1px solid #e3e6ea",
                        fontSize: "1rem",
                        minHeight: 80,
                        resize: "vertical"
                    }}
                />
            </div>
            <div style={{ marginBottom: 24 }}>
                <label htmlFor="status" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>Stato della task</label>
                <select
                    name="status"
                    id="status"
                    ref={status}
                    defaultValue='To do'
                    style={{
                        width: "100%",
                        padding: "10px 12px",
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
            <button type="submit" style={{ width: "100%" }}>Invia</button>
        </form>
    )
}

export default AddTask
