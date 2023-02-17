import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBasket } from "../../store/basket/basketReducer";
import { BasketButton } from "./BasketButton";

export const Header = ({ onShowBasket }) => {
  const items = useSelector((state)=>state.basket.items);
  const [animationClass, setAnimationClass] = useState("");
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getBasket())
  },[dispatch])



  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  height: 101px;
  background-color: #8a2b06;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 120px;
  padding-right: 120px;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
