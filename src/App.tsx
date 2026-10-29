import "./App.css";
import { type Task } from "./types";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";

const taskArray: Array<Task> = [
  {
    id: "001",
    title: "Task 1",
    description: "Description 1",
    priority: "low",
    status: "pending",
    dueDate: "12/31/2023",
  },
  {
    id: "002",
    title: "Task 2",
    description: "Description 2",
    priority: "medium",
    status: "in-progress",
    dueDate: "1/1/2024",
  },
  {
    id: "003",
    title: "Task 3",
    description: "Description 3",
    priority: "high",
    status: "completed",
    dueDate: "1/2/2024",
  },
];

function App() {
  function onStatusChange(id: string, status: string) {
    console.log(id, status);
  }

  function onDelete(id: string) {
    console.log(id, "Delete");
  }

  function onFilterChange(filter: Object) {
    console.log(filter);
  }
  return (
    <>
      <TaskFilter onFilterChange={onFilterChange} />
      <TaskList
        tasks={taskArray}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;
