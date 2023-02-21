import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMeals } from "../../store/meals/MealsReducer";
import MealItem from "./meal-Item/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "1",
//     title: "Sushi",
//     describe: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "2",
//     title: "Schnitzel",
//     describe: "A german specialty!",
//     price: 16.0,
//   },
//   {
//     id: "3",
//     title: "Barbecue Burger",
//     describe: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "4",
//     title: "Green Bowl",
//     describe: "Healthy...and green...",
//     price: 19.99,
//   },
// ];

export const Meals = () => {
  // const [meals, setMeals] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  const { maels, error, isLoading } = useSelector((state) => state.meals);
  // const getMeals = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await fetchApi("foodsss");
  //     setMeals(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError("failed to load meals");
  //   }
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Card>
      {isLoading && !error && <p>loading......</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {maels.map((meal) => {
        return <MealItem meal={meal}  key={meal.id}/>;
      })}
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 75%;
  padding: 40px 40px 36px 40px;
  margin: 40px auto;
`;
