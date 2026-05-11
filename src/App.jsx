import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import { useState } from "react";

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habitName) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name: habitName,
    };

    setHabits((curr) => [...curr, newHabit]);
  };

  const deleteHabit = (id) => {
    const newHabbits = habits.filter((habit) => habit.id !== id);
    setHabits(() => newHabbits);
  };

  return (
    <div className="m-auto grid max-w-3xl gap-4 p-4">
      <Header />
      <Form addHabit={addHabit} />
      <List habits={habits} deleteHabit={deleteHabit} />
    </div>
  );
}

export default App;
