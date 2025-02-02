import { configureStore } from "@reduxjs/toolkit";
import Products from "../../components/Products";
import { productReducer } from "./ProductReducer";


export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState: {},
});

export default store;