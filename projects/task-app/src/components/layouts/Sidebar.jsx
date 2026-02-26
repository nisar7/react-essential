export default function Sidebar({ menuItems = [], handleProjectSelection, selectedProjectId, removeProjectSelection }) {


    return (
        <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col p-5">

            <h1 className="text-2xl font-bold mb-8">My App</h1>

            {/* Menu */}
            <nav className="flex flex-col gap-2">
                <button
                    onClick={removeProjectSelection}
                    className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
                >
                    + Add New Project
                </button>
                {(
                    menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => { handleProjectSelection(item.id) }}
                            className={`text-left px-4 py-2 rounded-lg transition-all duration-200 ${selectedProjectId === item.id
                                ? "bg-blue-600"
                                : "hover:bg-gray-700"
                                }`}
                        >
                            {item.title}
                        </button>
                    ))
                )}
            </nav>

            {/* Footer */}
            <div className="mt-auto text-sm text-gray-400">
                © 2026 My App
            </div>
        </aside>
    );
}