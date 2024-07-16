import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: { 
        itemsList: [],
        totalQuantity: 0,
        shortCart: false,
    },
    reducers: {
        addToCart ( state, action ) {
            const newItem = action.payload;
            // check if item already exists
            const existingItem = state.itemsList.find( item => item.id === newItem.id );
            if ( existingItem ) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push( {
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                } );
                state.totalQuantity++;
            }
         },
        removeFromCart ( state, action ) {
            const existingItem = state.itemsList.find( item => item.id === action.payload );
            if ( existingItem ) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
         },
        setShowCart ( state ) { state.setShowCart = true; },
    }
} )

export const cartActions = cartSlice.actions;

export default cartSlice;