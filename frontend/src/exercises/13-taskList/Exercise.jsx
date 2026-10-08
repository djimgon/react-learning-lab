import { useState } from "react";
import TaskList from "./TaskList";
import { saveTask } from "./actions";

export default function Exercise() {
  const [tasks, setTasks] = useState([]);

  async function addTask(formData) {
    const newTaskText = formData.get("task");

    // Добавляем временную задачу со статусом ожидания
    const tempTask = { id: Date.now(), text: newTaskText, pending: true };

    setTasks((prev) => [...prev, tempTask]);

    // Имитируем задержку в 3 секунды перед завершением
    setTimeout(async () => {
      const savedTask = await saveTask(newTaskText);

      setTasks((prev) =>
        prev.map((task) =>
          task.id === tempTask.id
            ? { ...task, text: savedTask, pending: false }
            : task
        )
      );
    }, 3000);
  }

  return <TaskList tasks={tasks} addTask={addTask} />;
}
