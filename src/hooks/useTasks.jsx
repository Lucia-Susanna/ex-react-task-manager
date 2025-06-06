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

    const removeTask = async (taskId) => {
        try {
            const res = await axios.delete(api_url + `/tasks/${taskId}`);
            if (res.data.success) {
                setTasks((prev) => prev.filter(task => task.id.toString() !== taskId.toString()));
            } else {
                throw new Error(res.data.message);
            }
        } catch (err) {
            throw new Error(err.response?.data?.message || err.message);
        }
    };

    const updateTask = async (updatedTask) => {
        try {
            const res = await axios.put(
                api_url + `/tasks/${updatedTask.id}`,
                updatedTask,
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (res.data.success) {
                setTasks((prev) =>
                    prev.map(task =>
                        task.id.toString() === updatedTask.id.toString() ? res.data.task : task
                    )
                );
                return res.data.task;
            } else {
                throw new Error(res.data.message);
            }
        } catch (err) {
            throw new Error(err.response?.data?.message || err.message);
        }
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
