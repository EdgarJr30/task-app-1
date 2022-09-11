import "./App.css";
import LogoApp from "./components/LogoApp";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="task-app">
      <LogoApp />

      <div className="task-list">
        <h1>Mis Tareas</h1>
        <p>Touch on your task to mark it as completed</p>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
