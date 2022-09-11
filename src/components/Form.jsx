import React, { useState } from "react";
import "../stylesheets/Form.css";
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

  const [input, setInput] = useState('');
  
  const handleSend = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }
    props.onSubmit(newTask);
  }

  const setLocalStorage = value => {
    try {
      setInput(value)
      window.localStorage.setItem("input", value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form 
      className="form-task" action=""
      onSubmit={handleSend}>
      <input
        className="input-task"
        type="text"
        placeholder="Write your task"
        name="text"
        value={input}
        onChange={e => setLocalStorage(e.target.value)}
      />
      <button 
        className="button-task">
        Add Task
      </button>
    </form>
  );
}

export default Form;
