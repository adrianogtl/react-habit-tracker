import { format, isSameDay, subDays, isFuture } from "date-fns";
import { Button } from "./Button.jsx";

export function List({ habits, visibleDates, deleteHabit, toggleCompletion }) {
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
        return (
          <Item
            key={habit.id}
            habit={habit}
            visibleDates={visibleDates}
            deleteHabit={deleteHabit}
            toggleCompletion={toggleCompletion}
          />
        );
      })}
    </main>
  );
}

function Item({ habit, visibleDates, deleteHabit, toggleCompletion }) {
  const getStreak = () => {
    let streak = 0;
    let date = new Date();
    while (habit.completions.some((d) => isSameDay(d, date))) {
      streak++;
      date = subDays(date, 1);
    }

    return streak;
  };

  return (
    <section className="grid gap-3 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <h2 className="font-medium capitalize dark:text-white">
            {habit.name}
          </h2>
          {getStreak() > 0 && (
            <span className="text-amber-600">🔥{getStreak()}</span>
          )}
        </div>
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
              disabled={isFuture(date)}
              variant={
                habit.completions.some((d) => isSameDay(d, date))
                  ? "primary"
                  : "secondary"
              }
              className="flex-1 flex-col rounded-lg"
              clickHandler={() => toggleCompletion(habit.id, date)}
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
