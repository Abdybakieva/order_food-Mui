import React from "react";
import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";

export const Basket = () => {

const items = [
  {
    id: "1",
    title: "Sushi",
    amount: 0,
    price: 22.99,
  },
  {
    id: "2",
    title: "Schnitzel",
    amount: 1,
    price: 16.0,
  },
  {
    id: "3",
    title: "Barbecue Burger",
    amount: 1,
    price: 12.99,
  },
  {
    id: "4",
    title: "Green Bowl",
    amount: 1,
    price: 19.99,
  },
];

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (<FlexContainer>
          {items.map((item)=>(
             <BasketItem 
             key={item.id}
             title={item.title}
             price={item.price}
             amount={item.amount}/>
          ))}
       
        </FlexContainer>) :null}
        <TotalAmount price={200.5034} onClose={() => {}} onOrder={()=>{}} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 100%;
`;
const FlexContainer=styled.div`
  height: 228px;
  overflow-y: scroll;
`