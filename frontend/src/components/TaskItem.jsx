import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim() === "") return;
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
      {isEditing ? (
        <input
          className="border p-1 flex-1 mr-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => toggleTask(task.id)}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEdit} className="text-green-500 mr-2">
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">
          Edit
        </button>
      )}

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;