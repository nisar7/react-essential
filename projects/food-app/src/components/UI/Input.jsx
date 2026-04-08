export default function Input({ label, id, ...props }) {
  return (
    <>
      <div className="control">
        <label htmlFor={label}>{label}</label>
        <input id={id} name={id} {...props}></input>
      </div>
    </>
  );
}
