import { useOptimistic, startTransition } from "react";

export default function TaskList({ tasks, addTask }) {
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTask) => [
      ...state,
      { text: newTask, pending: true }
    ]
  );

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      addOptimisticTask(formData.get("task"));
      await addTask(formData);
    });

    e.currentTarget.reset();
  }

  return (
    <div>
      <h3>Tasks</h3>

      <ul>
        {optimisticTasks.map((task, index) => (
          <li key={index}>
            {task.text}
            {task.pending && <small> Adding Task...</small>}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Type in a task..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
