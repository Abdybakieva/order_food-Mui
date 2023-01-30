import React from 'react'
import styled from 'styled-components'
import MealItem from './meal-Item/MealItem'

const DUMMY_MEALS = [
  {
    id: "1",
    title: "Sushi",
    describe: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    title: "Schnitzel",
    describe: "A german specialty!",
    price: 16.0,
  },
  {
    id: "3",
    title: "Barbecue Burger",
    describe: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    title: "Green Bowl",
    describe: "Healthy...and green...",
    price: 19.99,
  },
];

export const Meals = () => {
  return (
    <Card>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} />;
        })}
    </Card>
  );
}

const Card=styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 75%;
  padding: 40px 40px 36px 40px;
  margin: 40px auto;
`
