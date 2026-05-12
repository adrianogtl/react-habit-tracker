import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import { useState } from "react";
import { isSameDay } from "date-fns";

function App() {
  const [habits, setHabits] = useState([]);

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
    <div className="m-auto grid max-w-2xl gap-4 p-4">
      <Header />
      <Form addHabit={addHabit} />
      <List
        habits={habits}
        deleteHabit={deleteHabit}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;
