export async function saveTask(task) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return task;
}
