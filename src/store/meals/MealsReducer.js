import { type } from "@testing-library/user-event/dist/type";
import { fetchApi } from "../../lib/fetchAPI";

export const mealsactionsTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};
const initialState = {
  maels: [],
  isLoading: false,
};

export const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    //    case mealsactionsTypes.GET_MEALS_STARTED:
    //      return {
    //        ...state,
    //        isLoading: true  ,
    //      };
    case mealsactionsTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        maels: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const fetchMeals = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: mealsactionsTypes.GET_MEALS_STARTED });

      const { data } = await fetchApi("foods");
      
      dispatchEvent({
        tupe: mealsactionsTypes.GET_MEALS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: mealsactionsTypes.GET_MEALS_FAILED,
        payload: "something went wrong",
      });
    }
  };
};
