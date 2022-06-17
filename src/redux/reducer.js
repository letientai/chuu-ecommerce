import { 
    SET_ADD_CART,
    SET_CURRENT_PAGE,
} from "./constants"

const initialState = {
    productsInCart: '',
    currentPage : 1,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADD_CART : 
            return{
                ...state,
                productsInCart : [...state.productsInCart , action.payload],
            };
        case SET_CURRENT_PAGE : 
            return{
                ...state,
                currentPage : action.payload,
            }
        default:
            return state;
    }
}
export default rootReducer;