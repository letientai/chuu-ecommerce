import { SET_ADD_CART } from "./constants";
import { SET_CURRENT_PAGE } from "./constants";



export const setAddCart = (payload) => ({
    type : SET_ADD_CART,
    payload : payload
});

export const setCurrentPage = (payload) => ({
    type : SET_CURRENT_PAGE,
    payload : payload
})