import { PAGE, PRODUCT_ITEMS } from "../action/actionType";

const initialState = {
    products: [],
    page: 1
};

const reducer = (state = initialState, action: any) => {
    const newState = { ...state };

    switch (action.type) {
        case PRODUCT_ITEMS:
            return {
                ...state,
                products: action.data
            }
        case PAGE:
            return {
                ...state,
                page: action.data
            }
    }
    return newState;
};

export default reducer;