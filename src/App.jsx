import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import { Footer } from "./components/Footer.jsx";
import { useState } from "react";
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  isSameDay,
  startOfWeek,
} from "date-fns";

function App() {
  const [habits, setHabits] = useState([]);
  const [weekOffSet, setWeekOffSet] = useState(0);
  const week = addWeeks(new Date(), weekOffSet);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week),
    end: endOfWeek(week),
  });

  const onPrev = () => setWeekOffSet((curr) => curr - 1);
  const onNext = () => setWeekOffSet((curr) => curr + 1);

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
    <div className="m-auto flex min-h-screen max-w-2xl flex-col gap-6 p-4">
      <div className="flex flex-1 flex-col gap-4">
        <Header
          habits={habits}
          visibleDates={visibleDates}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Form addHabit={addHabit} />
        <List
          habits={habits}
          visibleDates={visibleDates}
          deleteHabit={deleteHabit}
          toggleCompletion={toggleCompletion}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
