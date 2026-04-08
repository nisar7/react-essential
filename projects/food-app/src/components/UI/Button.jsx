export default function Button({
  children,
  isTextOnly,
  customClass,
  ...props
}) {
  const buttonClass = `${isTextOnly ? "text-button" : "button"} ${customClass}`;
  return (
    <>
      <button className={buttonClass} {...props}>
        {children}
      </button>
    </>
  );
}
