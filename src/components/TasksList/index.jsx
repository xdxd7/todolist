import { taskStatus } from "../../constans";
import styles from "./index.module.css";
import clsx from "clsx";
//musze przekazac liste do wyswietlenia, akcje klikowe  (addTask, addDone itd)

export const TasksList = ({
  taskList = [],
  setTaskStatus,
  statusToDisplay,
  taskListHeader,
}) => {
  const taskListStyle = clsx({
    [styles["toDo"]]: statusToDisplay === taskStatus.toDo,
    [styles["done"]]: statusToDisplay === taskStatus.done,
    [styles["trash"]]: statusToDisplay === taskStatus.trash,
  });

  const filteredTasksByStatus = taskList.filter(
    (task) => task.status == statusToDisplay
  );

  // const groupedTasks = filteredTasksByStatus.reduce(
  //   (acc, task) => {
  //     if (task.category === "home") {
  //       acc.home.push(task);
  //     } else if (task.category === "work") {
  //       acc.work.push(task);
  //     } else if (task.category === "grocery") {
  //       acc.grocery.push(task);
  //     } else if (task.category === "hobby") {
  //       acc.hobby.push(task);
  //     }
  //     return acc;
  //   },
  //   {
  //     home: [],
  //     work: [],
  //     grocery: [],
  //     hobby: [],
  //   }
  // );
  const groupedTasks = filteredTasksByStatus.reduce(
    (acc, task) => {
      if (acc[task.category]) {
        acc[task.category].push(task);
      }
      return acc;
    },
    {
      home: [],
      work: [],
      grocery: [],
      hobby: [],
    }
  );
  console.log("groupedTasks", groupedTasks);

  return (
    <div className="">
      <h1>{taskListHeader}</h1>
      <ul>
        {groupedTasks.home.map((task, index) => (
          <li key={`${index}${task.id}`}>
            <p className={taskListStyle}>
              {" "}
              {task.text} - <strong>{task.category}</strong>
            </p>

            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.done)}>
                done
              </button>
            )}
            {statusToDisplay === taskStatus.done && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Back to toDo
              </button>
            )}
            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.trash)}>
                Delete
              </button>
            )}
            {statusToDisplay === taskStatus.trash && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Restore
              </button>
            )}
          </li>
        ))}
        {groupedTasks.work.map((task, index) => (
          <li key={`${index}${task.id}`}>
            <p className={taskListStyle}>
              {" "}
              {task.text} - <strong>{task.category}</strong>
            </p>

            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.done)}>
                done
              </button>
            )}
            {statusToDisplay === taskStatus.done && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Back to toDo
              </button>
            )}
            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.trash)}>
                Delete
              </button>
            )}
            {statusToDisplay === taskStatus.trash && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Restore
              </button>
            )}
          </li>
        ))}
        {groupedTasks.grocery.map((task, index) => (
          <li key={`${index}${task.id}`}>
            <p className={taskListStyle}>
              {" "}
              {task.text} - <strong>{task.category}</strong>
            </p>

            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.done)}>
                done
              </button>
            )}
            {statusToDisplay === taskStatus.done && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Back to toDo
              </button>
            )}
            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.trash)}>
                Delete
              </button>
            )}
            {statusToDisplay === taskStatus.trash && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Restore
              </button>
            )}
          </li>
        ))}
        {groupedTasks.grocery.map((task, index) => (
          <li key={`${index}${task.id}`}>
            <p className={taskListStyle}>
              {" "}
              {task.text} - <strong>{task.category}</strong>
            </p>

            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.done)}>
                done
              </button>
            )}
            {statusToDisplay === taskStatus.done && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Back to toDo
              </button>
            )}
            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.trash)}>
                Delete
              </button>
            )}
            {statusToDisplay === taskStatus.trash && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Restore
              </button>
            )}
          </li>
        ))}
        {groupedTasks.hobby.map((task, index) => (
          <li key={`${index}${task.id}`}>
            <p className={taskListStyle}>
              {" "}
              {task.text} - <strong>{task.category}</strong>
            </p>

            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.done)}>
                done
              </button>
            )}
            {statusToDisplay === taskStatus.done && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Back to toDo
              </button>
            )}
            {statusToDisplay === taskStatus.toDo && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.trash)}>
                Delete
              </button>
            )}
            {statusToDisplay === taskStatus.trash && (
              <button onClick={() => setTaskStatus(task.id, taskStatus.toDo)}>
                Restore
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

//ten komponent ma wyswietlac liste. jako 1szy prop musi dostawac liste do wyswietlenia
// jako 2gi prop musi dostawac status taskow ktory ma wyswietlac
// jako 3ci prop musi dostawac funkcje do zmiany statusu taskow i style maja sie dodawac wzgledem typu  np deleted taski maja byc czerwoene, done maja byc zielone, to do pomaranczowe
// jako 3ci prop ma nagłówek
