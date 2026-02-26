import { useState } from "react";

export default function NewTask({ tasks = [], onAddTask, onTaskRemoval }) {

    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskText.trim()) return;

        onAddTask(taskText);
        setTaskText("");
    };

    return (
        <div className="max-w-xl bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Tasks
            </h3>


            <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter new task..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Add
                </button>
            </form>

            {/* Task List */}
            <ul className="space-y-3">
                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                        No tasks added yet.
                    </p>
                ) : (
                    tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                        >
                            <span className="text-gray-700">
                                {task.text}
                            </span>

                            {/* Clear Button */}
                            <button
                                onClick={() => onTaskRemoval(task.id)}
                                className="text-gray-400 hover:text-red-500 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}