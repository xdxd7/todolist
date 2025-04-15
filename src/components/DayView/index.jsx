import styles from "./index.module.css";
import { useTask } from "../../hooks/useTask";
import { taskStatus } from "../../constans";
import { TasksList } from "../../components";

function DayView({ day, onBack }) {
  const {
    tasks,
    addTask,
    inputValue,
    setInputValue,
    setTaskStatus,
    category,
    setCategory,
  } = useTask(day.date);

  return (
    <div className={styles["day-view"]}>
      <TasksList />
      <button onClick={onBack}>Back</button>
      <h2>{day.day}</h2>
      <p>{day.date}</p>
      <div className={styles["task-controls"]}>
        <input
          type="text"
          placeholder="Add a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="grocery">Grocery</option>
          <option value="hobby">Hobby</option>
        </select>

        <button onClick={addTask}>Add Task</button>
      </div>
      <TasksList
        taskList={tasks}
        setTaskStatus={setTaskStatus}
        statusToDisplay={taskStatus.toDo}
        taskListHeader="To Do Tasks"
      />
      <TasksList
        taskList={tasks}
        setTaskStatus={setTaskStatus}
        statusToDisplay={taskStatus.done}
        taskListHeader="Done Tasks"
      />
      <TasksList
        taskList={tasks}
        setTaskStatus={setTaskStatus}
        statusToDisplay={taskStatus.trash}
        taskListHeader="Deleted Tasks"
      />
    </div>
  );
}

export default DayView;
