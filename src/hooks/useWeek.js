import { createContext, useContext } from "react";

export const WeekContext = createContext();

export function useWeek() {
  const weekContext = useContext(WeekContext);
  return weekContext;
}
