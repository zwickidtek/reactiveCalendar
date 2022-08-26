import {FaPlus} from 'react-icons/fa'
import axios from 'axios'
import React, { useState } from "react"


const AddTask = ({stateVar, actionName}) => {
    let [input, setInput ] = useState("")

    const handleChange = e => {
        setInput(e.target.value)
    }



    const handleSubmit = () => {
    const todoObject = {
    content: input,
    important: Math.random() < 0.5}          
    axios    
    .post('http://localhost:3001/todos', todoObject)    
    .then(response => {  
        actionName(stateVar.concat(response.data))
            })
    setInput("")
}

    
    return(<div className="add-task">
          <input type="text" className="addTask" value={input} onChange={handleChange}/>
          <FaPlus className="addBtn" onClick={handleSubmit} />
        </div>)
}


export default AddTask;