import { createContext, useContext, useState } from "react";
import axios from "axios";
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const api_url = import.meta.env.VITE_API_URL;

    const fetchTasks = () => {
        axios
            .get(api_url + '/tasks')
            .then((res) => {
                console.log(res.data);

            })
            .catch((err) => console.error(err))
    }

    const value = {
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