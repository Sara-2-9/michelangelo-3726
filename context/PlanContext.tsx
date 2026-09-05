import React, { createContext, ReactNode, useContext, useState } from "react";

export type PlanContextValue = {
  budget: number;
  setBudget: (value: number) => void;
  diet: string[];
  setDiet: (value: string[]) => void;
  goal: string[];
  setGoal: (value: string[]) => void;
};

const PlanContext = createContext<PlanContextValue>({
  budget: 85,
  setBudget: () => {},
  diet: [],
  setDiet: () => {},
  goal: [],
  setGoal: () => {},
});

export function PlanProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState<number>(85);
  const [diet, setDiet] = useState<string[]>([]);
  const [goal, setGoal] = useState<string[]>([]);

  return (
    <PlanContext.Provider
      value={{ budget, setBudget, diet, setDiet, goal, setGoal }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
