import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basket/basketReducer";
import { MealsReducer } from "./meals/MealsReducer";

const rootReducer=combineReducers({
    meals:MealsReducer,
    basket:basketReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))