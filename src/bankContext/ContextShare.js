import React, {  Children, createContext, useState } from 'react'


export const addContext = createContext()
export const deleteContext=createContext()

function ContextShare({children}) {

    const [addData, setAddData] = useState("")
    const [deletedata,setDeleteData]=useState("")

    return (
        <div>
            <deleteContext.Provider value={{deletedata,setDeleteData}}>
                <addContext.Provider value={{ addData, setAddData }}>
                    {children}
                </addContext.Provider>
            </deleteContext.Provider>
        </div>
    )
}

export default ContextShare