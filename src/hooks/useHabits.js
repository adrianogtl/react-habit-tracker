import { createContext, useContext } from "react";

export const HabitsContext = createContext();

export function useHabits() {
  const habitsContext = useContext(HabitsContext);
  return habitsContext;
}
