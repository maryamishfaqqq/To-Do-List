import { useState } from "react";

function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (!newText.trim()) return;

    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>

      {/* Complete Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {/* Todo Text */}
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      {/* Buttons */}
      <div className="buttons">
        {isEditing ? (
          <button onClick={handleSave}>
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;