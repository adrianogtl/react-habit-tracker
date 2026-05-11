import { eachDayOfInterval, startOfWeek, endOfWeek, format } from "date-fns";
import { Button } from "./Button.jsx";

export function List({ habits, deleteHabit }) {
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
        return <Item key={habit.id} habit={habit} deleteHabit={deleteHabit} />;
      })}
    </main>
  );
}

function Item({ habit, deleteHabit }) {
  const today = new Date();
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return (
    <section className="grid gap-3 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
      <div className="flex justify-between">
        <h2 className="text-dec font-medium capitalize dark:text-white">
          {habit.name}
        </h2>
        <Button
          variant="ghost_destructive"
          className="text-sm"
          clickHandler={() => deleteHabit(habit.id)}
        >
          Delete
        </Button>
      </div>
      <div className="flex gap-2">
        {visibleDates.map((date) => {
          return (
            <Button
              key={date.toISOString()}
              variant="secondary"
              className="flex-1 flex-col rounded-lg"
            >
              <span className="font-medium">{format(date, "eee")}</span>
              <span>{format(date, "d")}</span>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
