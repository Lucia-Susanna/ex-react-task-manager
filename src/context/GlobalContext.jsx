import { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks.jsx";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const {
        tasks,
        addTask,
        removeTask,
        updateTask
    } = useTasks();

    const value = {
        tasks,
        addTask,
        removeTask,
        updateTask
    };

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }