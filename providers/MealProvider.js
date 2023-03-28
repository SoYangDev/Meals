import { createContext, useState } from "react";

const MealContext = createContext({
  meal: null,
  setMeal: () => {},
  setMealAndNavigate: (meal, callback) => {},
});

export const MealProvider = ({ children }) => {
  const [meal, setMeal] = useState(null);

  const setMealAndNavigate = (newMeal, callback) => {
    setMeal(newMeal);
    callback();
  };

  return (
    <MealContext.Provider value={{ meal, setMeal, setMealAndNavigate }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
