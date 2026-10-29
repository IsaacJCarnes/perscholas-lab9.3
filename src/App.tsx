import "./App.css";
import { useState } from "react";
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
  const [tasks, setTasks] = useState(taskArray);
  const [filter, setFilter] = useState<{ priority?: string; status?: string }>(
    {},
  );

  function onStatusChange(id: string, newStatus: string) {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, status: newStatus } : task,
      ) as [Task],
    );
  }

  function onDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <TaskFilter onFilterChange={setFilter} />
      <TaskList
        tasks={tasks.filter(
          (task) =>
            task.priority.includes(filter["priority"] || "") &&
            task.status.includes(filter["status"] || ""),
        )}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;
