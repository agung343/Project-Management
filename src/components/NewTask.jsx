import { useState } from "react";

function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleClickTask() {
    //validation ...
    if (enteredTask.trim() === '') {
        return;
    }

    onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 p-2 rounded-sm"
        onChange={(e) => setEnteredTask(e.target.value)}
        value={enteredTask}
      />
      <button onClick={handleClickTask} className="text-stone-700 hover:text-stone-900">Add Task</button>
    </div>
  );
}

export default NewTask;
