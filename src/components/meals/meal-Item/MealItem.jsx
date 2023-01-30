import React from 'react'
import styled from 'styled-components'
import MealForm from './MealForm';

function MealItem({meal}) {
  return (
    <Container>
      <StyledItemInfo>
        <StyledTitle>{meal.title}</StyledTitle>
        <p>{meal.description}</p>
        <span>${meal.prce}</span>
      </StyledItemInfo>
      <MealForm id={'amout' + Math.random().toString()}/>
      
    </Container>
  );
}

export default MealItem

const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;

  margin-bottom: 20px;
  :last-child {
    border: none;
    margin-bottom: o;
  }
`;
const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    margin-top: 4px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
    margin-top: 4px;
  }
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
`;
const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;
