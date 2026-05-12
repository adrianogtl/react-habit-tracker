import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import { Footer } from "./components/Footer.jsx";
import { useState } from "react";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { HabitsProvider } from "./contexts/HabitsContext.jsx";

function App() {
  const [weekOffSet, setWeekOffSet] = useState(0);

  const week = addWeeks(new Date(), weekOffSet);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week),
    end: endOfWeek(week),
  });

  const onPrev = () => setWeekOffSet((curr) => curr - 1);
  const onNext = () => setWeekOffSet((curr) => curr + 1);

  return (
    <div className="m-auto flex min-h-screen max-w-2xl flex-col gap-6 p-4">
      <div className="flex flex-1 flex-col gap-4">
        <HabitsProvider>
          <Header visibleDates={visibleDates} onPrev={onPrev} onNext={onNext} />
          <Form />
          <List visibleDates={visibleDates} />
        </HabitsProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
