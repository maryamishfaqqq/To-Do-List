function Stats({ todos }) {
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="stats">
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed: {completedTasks}</p>
      <p>Remaining: {remainingTasks}</p>
    </div>
  );
}

export default Stats;