import { SET_ADD_CART } from "./constants"

const initialState = {
    productsInCart: '',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADD_CART : 
            return{
                ...state,
                productsInCart : [...state.productsInCart , action.payload],
            }
        default:
            return state;
    }
}
export default rootReducer;