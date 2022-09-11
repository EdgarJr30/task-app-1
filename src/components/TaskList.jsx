import React, { useState, useEffect } from "react";
import Form from "./Form";
import "../stylesheets/TaskList.css";
import Task from "../components/Task";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saveTasks = window.localStorage.getItem("taskData");
    if (saveTasks) {
      return JSON.parse(saveTasks);
    } else {
      return []
    }
  });

  useEffect(() => {
    window.localStorage.setItem("taskData", JSON.stringify(tasks))
  }, [tasks])

  const addTask = task => {
    if (task.text.trim()) {
        task.text = task.text.trim();
        const updateTask = [task, ...tasks];
        setTasks(updateTask);
    }
  };

  const deleteTask = id => {
    const updateTask = tasks.filter(task => task.id !== id);
    setTasks(updateTask);
  };

  const completeTask = id => {
    const updateTask = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(updateTask);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className="task-list-container">
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text} 
              complete={task.complete}
              deleteTask={deleteTask} 
              completeTask={completeTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;
