import { isToday } from "date-fns";
import { Button } from "./Button.jsx";

export function Header({ habits }) {
  const countCompleteToday = () => {
    return habits.filter((habit) => {
      return habit.completions.some((d) => isToday(d));
    }).length;
  };

  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold dark:text-white">
          Habit Tracker
        </h1>
        <span className="text-sm text-zinc-400">
          {countCompleteToday()} / {habits.length} done today
        </span>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm text-zinc-400">May 11 - May 17</span>
        <div className="flex gap-3">
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </header>
  );
}
