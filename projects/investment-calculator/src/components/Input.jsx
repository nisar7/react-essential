export default function Input({ label, value, ...props }) {

    return (<>

        <p >
            <label>
                {label}
            </label>
        </p>
        <input value={value} type="number" required {...props} />

    </>)
}