import { isSameDay } from "date-fns";
import { HabitsContext } from "../hooks/useHabits.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export function HabitsProvider({ children }) {
  const [habits, setHabits] = useLocalStorage("habits", []);
  const addHabit = (habitName) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name: habitName,
      completions: [],
    };

    setHabits((curr) => [...curr, newHabit]);
  };

  const toggleCompletion = (id, date) => {
    setHabits((curr) => {
      return curr.map((habit) => {
        if (habit.id !== id) return habit;

        let completions;
        const isComplete = habit.completions.some((d) => isSameDay(d, date));
        if (isComplete) {
          completions = habit.completions.filter((d) => !isSameDay(d, date));
        } else {
          completions = [...habit.completions, date];
        }

        return { ...habit, completions };
      });
    });
  };

  const deleteHabit = (id) => {
    const newHabbits = habits.filter((habit) => habit.id !== id);
    setHabits(() => newHabbits);
  };

  return (
    <HabitsContext.Provider
      value={{ habits, addHabit, toggleCompletion, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
}
