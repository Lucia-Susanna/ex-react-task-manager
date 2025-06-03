import { createContext, useContext, useRef, useState } from "react";
import useTasks from "../hooks/useTasks.jsx";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [title, setTitle] = useState('')
    const description = useRef()
    const status = useRef()
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

    const {
        tasks,
        addTask,
        removeTask,
        updateTask
    } = useTasks();

    const newTask = (e) => {
        e.preventDefault()
        if (title.length < 1 || title.includes(symbols)) {
            alert('il titolo della task è obbligatorio e non può contenere caratteri speciali')
        } else {
            console.log(`${title}, ${description.current.value}, ${status.current.value}`);

        }



    }

    const value = {
        tasks,
        addTask,
        removeTask,
        updateTask,
        title,
        setTitle,
        description,
        status,
        newTask
    };

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }