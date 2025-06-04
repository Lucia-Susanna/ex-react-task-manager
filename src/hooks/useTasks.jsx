import { useState, useEffect } from "react";
import axios from "axios";

const useTasks = () => {
    const api_url = import.meta.env.VITE_API_URL;
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: ''
    })
    useEffect(() => {
        axios
            .get(api_url + '/tasks')
            .then((res) => setTasks(res.data))
            .catch((err) => console.error(err));
    }, [api_url]);

    const addTask = async (newTask) => {
        try {
            const res = await axios.post(api_url + '/tasks', newTask, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.data.success) {
                setTasks((prev) => [...prev, res.data.task]);
                return res.data.task;
            } else {
                throw new Error(res.data.message);
            }
        } catch (err) {
            throw new Error(err.response?.data?.message || err.message);
        }
    };

    const removeTask = (taskId) => {
        console.log(`delete task con id ${taskId}`);

    };

    const updateTask = (task) => {
        // da implementare
    };

    return {
        tasks,
        addTask,
        removeTask,
        updateTask,
        newTask,

    };
};

export default useTasks;
