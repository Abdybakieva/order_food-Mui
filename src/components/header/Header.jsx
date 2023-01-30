import React from "react";
import styled from "styled-components";
import { BasketButton } from "./BasketButton";


export const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton>
      </BasketButton>
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
