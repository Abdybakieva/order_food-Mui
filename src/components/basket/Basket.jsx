import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteBasketItem,
  submitOrder,
  updeteBasketItem,
} from "../../store/basket/basketReducer";
import { uiActions } from "../../store/UI/UISlice";
import {Modal as MuiModal} from "@mui/material"
import Snackbar from "../UI/Snackbar";
import {Box} from "@mui/material"
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";

export const Basket = ({ onClose ,open}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      dispatch(updeteBasketItem({ amount: amount - 1, id }));
    } else {
      dispatch(deleteBasketItem(id));
    }
  };

  const incrementAmount = (id, amount) => {
    dispatch(updeteBasketItem({ amount: amount + 1, id }));
  };

  const orderSubmitHandler = async () => {
    try {
      await dispatch(submitOrder({ orderData: { items } })).unwrap();
      dispatch(
        uiActions.showSnackBar({
          severity: "success",
          message: "order completed successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.closeSnackbar({
          severity: "error",
          message: "Failed, Try again later",
        })
      );
    } finally {
      onClose(  )
    }
  };

  return (
    <>
      <MuiModal onClose={onClose} open={open}>
        <Container>
          <Content>
            {items.length ? (
              <FlexContainer>
                {items.map((item) => (
                  <BasketItem
                    key={item._id}
                    incrementAmount={() =>
                      incrementAmount(item._id, item.amount)
                    }
                    decrementAmount={() =>
                      decrementAmount(item._id, item.amount)
                    }
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
              onOrder={orderSubmitHandler}
            />
          </Content>
        </Container>
      </MuiModal>
    </>
  );
};
console.log(Snackbar);
const Content = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 100%;
`;
const FlexContainer = styled.div`
  height: 228px;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  position: fixed;
   top: 20vh;
    left: 5%;
     width: 90%;
     background-color: white;
     padding: 1rem;
     border-radius: 14px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
     z-index: 30;
     animation: slide-down 300ms ease-out forwards;
     width: 40rem;
     left: calc(50% - 20rem);

    @keyframes slide-down {
     from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} 
`;