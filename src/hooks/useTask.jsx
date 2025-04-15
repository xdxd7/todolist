import { useState, useEffect } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../utils/handleLocalStorage";
import { taskStatus } from "../constans";

export const useTask = (day) => {
  const [tasks, setTasks] = useState();

  const [category, setCategory] = useState("home");

  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const storedTasks = getFromLocalStorage(`tasks-${day}`);

    if (!storedTasks) {
      setTasks([]);
      return;
    }

    setTasks(storedTasks);
  }, []);

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        category,
        status: taskStatus.toDo,
      };
      setTasks([...tasks, newTask]);
      setToLocalStorage(`tasks-${day}`, [...tasks, newTask]);
      setInputValue("");
    }
  };

  const setTaskStatus = (id, status) => {
    const isTaskExist = tasks.find((t) => t.id === id); // Znajdź zadanie
    if (!isTaskExist) {
      return;
    }
    const updatedTask = { ...isTaskExist, status }; // Oznacz jako "done"
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return updatedTask;
      }
      return t;
    });
    setTasks(updatedTasks); // Dodaj do listy
    setToLocalStorage(`tasks-${day}`, updatedTasks); // Zaktualizuj w localStorage
  };

  return {
    tasks,
    setTasks,
    addTask,
    inputValue,
    setInputValue,
    setTaskStatus,
    category,
    setCategory,
  };
};
