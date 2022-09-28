const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === 'GETCARTS') {
    return {
      ...state,
      carts: payload,
      loading: false
    };
  }
  if(type=== 'LOADING') {
    return {
      ...state,    
      loading: true
    }
  }
  if (type === 'REMOVECART') {
    return {
      ...state,
      carts: state.carts.filter((cart) => cart.id !== payload),
    };
  }
  if (type === 'REMOVECARTS') {
    return {
      ...state,
      carts: [],
    };
  }
  if (type === 'INCREASE') {
    const newCarts = state.carts.map((cart) => {
      return cart.id === payload ? { ...cart, amount: cart.amount + 1 } : cart;
    });

    return {
      ...state,
      carts: newCarts
    };
  }
  if (type === 'DECREASE') {
    let newCarts = state.carts.map((cart) => {
      return cart.id === payload ? { ...cart, amount: cart.amount - 1 } : cart;
    });

    newCarts = newCarts.filter((cart)=> {
      return cart.amount > 0;
    })

    return {
      ...state,
      carts: newCarts
    };
  }

  if(type === "UPDATECARTNUM") {
    return {
      ...state,
      cartNum: state.carts.length    }
  }

  if(type === 'UPDATETOTAL') {
    let total = 0;
    state.carts.forEach((cart)=> {
      total += cart.price * cart.amount;
    })
    return {
      ...state,
      total: parseFloat(total.toFixed(2))
    }
  }
};

export default reducer;
