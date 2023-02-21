import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";
import Snackbar from "./components/UI/Snackbar";
import { store } from "./store";
import { uiActions } from "./store/UI/UISlice";

function AppContent() {
  const dispatch=useDispatch()

 const snackbar=useSelector((state)=>state.ui.snackbar)

const [isBasketVisible, setBasketVisible] = useState(false)

  const showBasketHandler=()=>{
    setBasketVisible((prevState)=> ! prevState)
  }
  return (
    <>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket open={isBasketVisible} onClose={showBasketHandler} />}
        <Snackbar isOpen={snackbar.isOpen} severity={snackbar.severity} message={snackbar.message}
        onClose={()=>dispatch(uiActions.closeSnackbar())}/>
      </Content>
    </>
  );
}

const App=()=>{
  return <Provider store={store}>
    <AppContent/>
  </Provider>
}

export default App;

const Content=styled.div`
margin-top: 101px;
`


// GET /foods
// Headers: { UserID: "your_name"  } 


// GET /basket
// Headers: { UserID: "your_name"  } 


// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  } 

// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  } 

// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }