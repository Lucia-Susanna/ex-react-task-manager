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
        <form onSubmit={handlerNewTask}>
            <div>
                <label htmlFor="title">Nome della task </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Descrizione della task </label>
                <textarea name="" id="" ref={description} />
            </div>
            <div>
                <label htmlFor="status">Stato della task</label>
                <select name="status" id="status" ref={status} defaultValue='To do'>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <button type="submit">invia</button>
        </form>
    )
}

export default AddTask
