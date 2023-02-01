import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketLogo } from "../../assets/icons/Group.svg";
export const BasketButton = ({ count, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
        <BasketLogo/>
         <StyledTitle>Your Cart</StyledTitle>
        <StyledCount id="counter">{count || 0}</StyledCount>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #8a2b06;
  border-radius: 30px;
  padding: 12px 32px;
  font-weight: 600;
  color: #fff0f4b2;
  line-height: 24px;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2c0d00;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledTitle=styled.span`
    margin-left: 12px;
    margin-right: 24px;

`
const StyledCount = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  color: white;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
  
`;