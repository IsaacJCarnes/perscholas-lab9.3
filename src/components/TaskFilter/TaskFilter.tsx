import { useEffect, useState, type ChangeEvent } from "react";
import type { TaskFilterProps } from "../../types";

export const TaskFilter = (props: TaskFilterProps) => {
  const [filter, setFilter] = useState({});
  useEffect(() => {
    props.onFilterChange(filter);
  }, [filter]);
  
  function formChangeEvent(event: ChangeEvent) {
    event.preventDefault();
    const { name, value } = event.target as HTMLSelectElement;
    setFilter({ ...filter, [name]: value });
  }

  return (
    <form onChange={(e) => formChangeEvent(e)} id="FilterForm">
      <label>Status</label>
      <select name="status">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <label>Priority</label>
      <select name="priority">
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </form>
  );
};
