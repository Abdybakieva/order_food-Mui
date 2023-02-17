import { fetchApi } from "../../lib/fetchAPI";

export const basketActionsTypes = {
  ADD_ITEM_SUCCESS: "ADD_ITEM_SUCCESS",
  GET_BASKET_SUCCESS: "GET_BASKET_SUCCESS",
};

const initialState = {
  items: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionsTypes.GET_BASKET_SUCCESS:
      return {
        ...state,
        items:action.payload
      };
    default:
      return state;
  }
};

export const getBasket = ()=> async (dispatch) => {
  try {
    const { data } = await fetchApi("basket");

   dispatch({type:basketActionsTypes.GET_BASKET_SUCCESS,payload:data.items})
  } catch (error) {
    console.log(error);
  }
};

export const addtoBasket=(newItem)=>async (dispatch)=>{
    try {
    await fetchApi(`foods/${newItem.id}/addToBasket`, {
       method: "POST",
       body: { amount: newItem.amount },
     });

   dispatch(getBasket())
  } catch (error) {
    console.log(error);
  }
}

export const updeteBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket())
    } catch (error) {
      console.log(error);
    }
  };

export const deleteBasketItem = (id)=> async (dispatch) => {
  try {
    const { data } = await fetchApi(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket())
  } catch (error) {
    console.log(error);
  }
};