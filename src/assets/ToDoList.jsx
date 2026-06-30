import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  editTodo,
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-message">
        <p>No tasks found.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;