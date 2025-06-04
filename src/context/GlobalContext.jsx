import { createContext, useContext, useRef, useState } from "react";
import useTasks from "../hooks/useTasks.jsx";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [title, setTitle] = useState('')
    const description = useRef()
    const status = useRef()
    const [selectedTask, setSelectedTask] = useState()
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";
    const api_url = import.meta.env.VITE_API_URL;
    const {
        tasks,
        addTask,
        removeTask,
        updateTask,
        newTask
    } = useTasks();

    const handlerNewTask = async (e) => {
        e.preventDefault();
        if (title.length < 1 || title.split('').some(char => symbols.includes(char))) {
            alert('il titolo della task è obbligatorio e non può contenere caratteri speciali');
            return;
        }
        try {
            await addTask({
                title,
                description: description.current.value,
                status: status.current.value
            });
            alert('Task creata con successo!');
            setTitle('');
            description.current.value = '';
            status.current.value = 'To do';
        } catch (err) {
            alert(err.message);
        }
    };

    const value = {
        tasks,
        addTask,
        removeTask,
        updateTask,
        title,
        setTitle,
        description,
        status,
        handlerNewTask,
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