import React, { Children, createContext, useEffect, useState } from 'react';
export const StoreContext = createContext(null);
import { food_list } from '../assets/assets';

const Context = (props) => {
    const[cartItems,setCartItems] = useState({})

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeFromCart=(itemId)=>
        { setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    useEffect(()=>{
        console.log(cartItems)

    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default Context;