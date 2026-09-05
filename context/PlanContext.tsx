import React, { createContext, ReactNode, useContext, useState } from "react";

export type PlanContextValue = {
  budget: number;
  setBudget: (value: number) => void;
  diet: string | null;
  setDiet: (value: string | null) => void;
  goal: string | null;
  setGoal: (value: string | null) => void;
};

const PlanContext = createContext<PlanContextValue>({
  budget: 82,
  setBudget: () => {},
  diet: null,
  setDiet: () => {},
  goal: null,
  setGoal: () => {},
});

export function PlanProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState<number>(82);
  const [diet, setDiet] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);

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
