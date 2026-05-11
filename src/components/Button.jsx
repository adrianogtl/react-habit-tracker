export function Button({ children, disabled, clickHandler }) {
  return (
    <button
      className="rounded bg-indigo-500 px-2 py-1 font-medium text-indigo-50 transition-colors hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
