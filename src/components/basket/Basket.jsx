import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";

export const Basket = ({ onClose }) => {
  const { items, updeteBasketItem, deleteBasketItem } =
    useContext(BasketContext);


  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount=(id,amount)=>{
    if(amount > 1){
      updeteBasketItem({amount:amount -1,id})
    }
    else{
      deleteBasketItem(id)
    }
  }


  const incrementAmount=(id,amount)=>{
    updeteBasketItem({amount:amount +1,id})
  };

  return (
    <Modal  onClose={onClose}>
      <Content>
        {items.length ? (
          <FlexContainer>
            {items.map((item) => (
              <BasketItem
                key={item._id}
                incrementAmount={() => incrementAmount(item._id, item.amount)}
                decrementAmount={() => decrementAmount(item._id, item.amount)}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </FlexContainer>
        ) : null}
        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 100%;
`;
const FlexContainer = styled.div`
  height: 228px;
  overflow-y: scroll;
`;
