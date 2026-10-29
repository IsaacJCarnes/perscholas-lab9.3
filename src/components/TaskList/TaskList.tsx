import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskList.css"

export const TaskList = (props: TaskListProps) => {
  return (
    <ul id="TaskList">
      {props.tasks.map((task) => (
        <TaskItem
          task={task}
          onStatusChange={props.onStatusChange}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};
