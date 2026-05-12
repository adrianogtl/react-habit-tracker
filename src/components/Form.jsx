import { useState } from "react";
import { Button } from "./Button.jsx";
import { useHabits } from "../hooks/useHabits.js";

export function Form() {
  const [habitName, setHabitName] = useState("");
  const { addHabit } = useHabits();

  const isInvalidInput =
    habitName.trim().length < 3 || habitName.trim().length > 30;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInvalidInput) return;

    addHabit(habitName.trim());
    setHabitName("");
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 rounded-lg bg-zinc-100 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:text-white"
        type="text"
        placeholder="New habit..."
        maxLength="30"
        minLength="3"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <Button disabled={isInvalidInput} className="rounded-lg px-4 py-2">
        Add Habit
      </Button>
    </form>
  );
}
