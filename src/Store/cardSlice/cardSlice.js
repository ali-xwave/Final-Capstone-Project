import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isItemExisting = state.items.find(
        item=> item.id === action.payload.id
      );
      if (!isItemExisting) {
        state.items.push({...action.payload, quantity:1 });
      }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item=>item.id !== action.payload.id)
    },
    increaseQuantity: (state, action) => {
        const item = state.items.find(i=> i.id === action.payload.id)
        if(item){
            item.quantity +=1
        }
    },
    decreaseQuantity: (state, action) => {
        const item = state.items.find(i=> i.id === action.payload.id)
        if(item){
            item.quantity -=1
        }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
