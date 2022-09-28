import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  carts: [],
  totoal: '',
  cartNum: '',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({type: 'LOADING'})
    try {
      const response = await fetch(url);
      const data = await response.json();
     dispatch({type:'GETCARTS', payload: data});
    } catch (err) {
      dispatch({type:'GETCARTS', payload: []});
      console.log(err);
    }
  };

  const removeCart =(id)=> {
    dispatch({type: 'REMOVECART', payload:id})
  }

  const removeCarts =()=> {
    dispatch({type: 'REMOVECARTS'})
  }
  


  const increase =(id)=> {
    dispatch({type: 'INCREASE', payload:id})
  } 
  const decrease =(id)=> {
    dispatch({type: 'DECREASE', payload:id})
  } 

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(()=> {
    dispatch({type: 'UPDATECARTNUM'})
  }, [state.carts.length]);

  useEffect(()=> {
    dispatch({type: 'UPDATETOTAL'})
  }, [state.carts]);

  return (
    <AppContext.Provider
      value={{
        ...state, removeCart, increase, decrease, removeCarts
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
