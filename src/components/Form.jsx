import { Button } from "./Button.jsx";

export function Form() {
  return (
    <form className="flex gap-2">
      <input
        className="flex-1 rounded-lg bg-zinc-100 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:bg-zinc-800"
        type="text"
        placeholder="New habit..."
      />
      <Button>Add Habit</Button>
    </form>
  );
}
