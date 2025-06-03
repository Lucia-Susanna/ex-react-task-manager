import { createContext, useContext, useState } from "react";
import axios from "axios";
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const api_url = import.meta.env.VITE_API_URL;
    const [tasks, setTasks] = useState([])

    const fetchTasks = () => {
        axios
            .get(api_url + '/tasks')
            .then((res) => {
                const newTasks = res.data;

                setTasks((prevTasks) => {
                    const isSame =
                        prevTasks.length === newTasks.length &&
                        prevTasks.every((t, i) => {
                            const n = newTasks[i];
                            return (
                                t.id === n.id &&
                                t.title === n.title &&
                                t.status === n.status &&
                                t.createdAt === n.createdAt
                            );
                        });

                    return isSame ? prevTasks : newTasks;
                });
            })
            .catch((err) => console.error(err));
    };
    const value = {
        tasks,
        fetchTasks,
    }

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }