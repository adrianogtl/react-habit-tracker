import { eachDayOfInterval, startOfWeek, endOfWeek, format } from "date-fns";
import { Button } from "./Button.jsx";

export function List({ habits }) {
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-400">
        No habits yet. Add one above to get started!
      </p>
    );
  }

  return (
    <main className="grid gap-3">
      {habits.map((habit) => {
        return <Item key={habit.id} habit={habit} />;
      })}
    </main>
  );
}

function Item({ habit }) {
  const today = new Date();
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return (
    <section className="grid gap-3 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
      <div className="flex justify-between">
        <h2>{habit.name}</h2>
        <Button>Delete</Button>
      </div>
      <div className="flex gap-2">
        {visibleDates.map((date) => {
          return (
            <Button id={date.toISOString()}>{format(date, "eee d")}</Button>
          );
        })}
      </div>
    </section>
  );
}
