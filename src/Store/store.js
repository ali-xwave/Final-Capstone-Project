import cartReducer from "./cardSlice/cardSlice"

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
});
