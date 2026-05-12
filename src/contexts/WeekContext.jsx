import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { WeekContext } from "../hooks/useWeek.js";
import { useState } from "react";

export function WeekProvider({ children }) {
  const [weekOffSet, setWeekOffSet] = useState(0);

  const week = addWeeks(new Date(), weekOffSet);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week),
    end: endOfWeek(week),
  });

  const onPrev = () => setWeekOffSet((curr) => curr - 1);
  const onNext = () => setWeekOffSet((curr) => curr + 1);

  return (
    <WeekContext.Provider value={{ visibleDates, onPrev, onNext }}>
      {children}
    </WeekContext.Provider>
  );
}
