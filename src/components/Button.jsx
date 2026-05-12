import { twMerge } from "tailwind-merge";

const BUTTON_VARIANTS = {
  primary: "bg-indigo-500 text-white  hover:bg-indigo-400",
  secondary:
    "bg-zinc-400 dark:bg-zinc-700  text-white dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-600",
  ghost_destructive: "text-red-800 hover:bg-red-800 hover:text-red-200",
};

export function Button({
  children,
  variant = "primary",
  className,
  disabled,
  clickHandler,
}) {
  return (
    <button
      className={twMerge(
        "flex rounded px-2 py-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30",
        BUTTON_VARIANTS[variant],
        className
      )}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
