import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

export default function Meal() {
  const { isLoading, errors, sendRequest } = useHttp();
  const [mealData, setMealData] = useState([]);

  async function getMealData() {
    const mealList = await sendRequest("http://localhost:3000/meals" , {});
    console.log("mealList==>>" , mealList)
    setMealData(mealList);
  }
  useEffect(() => {
    getMealData();
  
  }, [sendRequest]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {errors && <p>{errors}</p>}
      <ol id="meals">
        {mealData?.map((meal) => (
          <li key={meal.id}>
            <MealItem item={meal}></MealItem>
          </li>
        ))}
      </ol>
    </>
  );
}
