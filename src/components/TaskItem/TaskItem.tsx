import type { TaskStatus, TaskItemProps } from "../../types";

export const TaskItem = (props: TaskItemProps) => {
  return (
    <li data-id={props.task.id}>
      <span>{props.task.title}</span>
      <p>{props.task.description}</p>
      <div>
        <p>Priority: {props.task.priority}</p> <p>Due: {props.task.dueDate}</p>
      </div>
      <div>
        <select
          defaultValue={props.task.status}
          onChange={(e) =>
            props.onStatusChange(props.task.id, e.target.value as TaskStatus)
          }
        >
          <option value={"pending"}>Pending</option>
          <option value={"in-progress"}>In Progress</option>
          <option value={"completed"}>Completed</option>
        </select>
        <button>Delete</button>
      </div>
    </li>
  );
};
