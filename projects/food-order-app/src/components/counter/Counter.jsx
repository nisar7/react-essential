export default function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
