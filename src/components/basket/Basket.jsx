import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteBasketItem, updeteBasketItem } from "../../store/basket/basketReducer";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";

export const Basket = ({ onClose }) => {
  const dispatch=useDispatch()
  const items =useSelector((state)=>state.basket.items)


  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount=(id,amount)=>{
    if(amount > 1){
     dispatch(updeteBasketItem({amount:amount -1,id}))
    }
    else{
      dispatch(deleteBasketItem(id))
    }
  }


  const incrementAmount=(id,amount)=>{
   dispatch(updeteBasketItem({amount:amount +1,id}))
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
