import React from 'react'
import styled from 'styled-components'

export const Button = ({ children, variant = "contained", borderStyle="rouder" }) => {
  return <StyledButton variant={variant} borderStyle={borderStyle}>{children}</StyledButton>;
};


const getBackgroauntColor=(props)=>{
  return props.variant === "contained" ? "#8a2b06" :"white"
}


const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return (props.variant === "contained" ? "white" : "#8a2b06");
};

const getRadius = (props) => {
  return props.borderStyle === "rouder" ? "20px" : "6px";
};

const StyledButton = styled.button`
  background-color: ${getBackgroauntColor};
  border-radius: ${getRadius};
  padding: 10px 32px;
  font-weight: 600;
  color: ${getColor};
  line-height: 24px;
  font-size: 16px;
  border: ${getBorder};
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #8a2b06;
    color: #ffffff;
  }
  :active {
    background-color: #993108;
  }
`;