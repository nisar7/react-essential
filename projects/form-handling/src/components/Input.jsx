export default function Input({ id , label, error, ...props }) {
    return (<>
        <div className="control no-margin">
            <label htmlFor={label}>{label}</label>
            <input
                id={id}
                {...props}
            />
            {error && <div>
                <p>{error}</p>
            </div>}
        </div>
    </>)
}