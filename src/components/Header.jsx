import { Button } from "./Button.jsx";
import { format, isToday } from "date-fns";

export function Header({ habits, visibleDates, onPrev, onNext }) {
  const weekRange = `${format(visibleDates[0], "MMM d")} - ${format(visibleDates.at(-1), "MMM d")}`;

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
        <span className="text-sm text-zinc-400">{weekRange}</span>
        <div className="flex gap-3">
          <Button clickHandler={onPrev}>Prev</Button>
          <Button
            disabled={visibleDates.some((d) => isToday(d))}
            clickHandler={onNext}
          >
            Next
          </Button>
        </div>
      </div>
    </header>
  );
}
