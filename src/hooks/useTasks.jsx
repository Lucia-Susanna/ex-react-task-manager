import { useState, useEffect } from "react";
import axios from "axios";

const useTasks = () => {
    const api_url = import.meta.env.VITE_API_URL;
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get(api_url + '/tasks')
            .then((res) => setTasks(res.data))
            .catch((err) => console.error(err));
    }, [api_url]);

    const addTask = (task) => {
        // da implementare
    };

    const removeTask = (taskId) => {
        // da implementare
    };

    const updateTask = (task) => {
        // da implementare
    };

    return {
        tasks,
        addTask,
        removeTask,
        updateTask,
    };
};

export default useTasks;
