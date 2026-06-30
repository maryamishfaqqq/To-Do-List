import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;