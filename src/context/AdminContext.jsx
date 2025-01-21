import { createContext, useState } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props)=>{

    const [admToken,setAdmToken] = useState(localStorage.getItem('admToken')?localStorage.getItem('admToken'):'')
    const backendUrl = import.meta.env.VITE_BACKEND_URL


    const value = {
        admToken,setAdmToken,
        backendUrl


    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider