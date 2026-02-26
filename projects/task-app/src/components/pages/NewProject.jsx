
import { useState } from "react";
export default function NewProject({ handleOnAddProject }) {


    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOnAddProject(formData)
        setFormData({
            title: "",
            description: "",
            dueDate: "",
        })
    };



    return (
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Create New Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Title */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter project title"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Enter project description"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Due Date */}
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-gray-700">
                        Due Date
                    </label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                >
                    Create Project
                </button>
            </form>
        </div>
    );
}