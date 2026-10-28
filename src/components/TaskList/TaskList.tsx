import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = (props: TaskListProps) => {
  return (
    <ul>
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
