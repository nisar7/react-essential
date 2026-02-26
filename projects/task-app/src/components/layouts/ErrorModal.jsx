import {
    forwardRef,
    useImperativeHandle,
    useState,
    useEffect
} from "react";

const ErrorModal = forwardRef(({ }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    useImperativeHandle(ref, () => ({
        open(msg) {
            setMessage(msg);
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        }
    }));


    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            ></div>


            <div className="relative bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl animate-scaleIn">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 text-red-600 p-2 rounded-full">
                        ❌
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Validation Error
                    </h2>
                </div>

                <p className="text-gray-600 mb-6">
                    {message}
                </p>

                <div className="flex justify-end">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ErrorModal;