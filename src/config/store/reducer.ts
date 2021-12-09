import { PAGE, PRODUCT_ITEMS, SEARCH_CATEGORY, SEARCH_KEYWORD } from "../action/actionType";

const initialState = {
    products: [],
    page: 1,
    searchKeyword: '',
    searchCategory: ''
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
        case SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.data
            }
        case SEARCH_CATEGORY:
            return {
                ...state,
                searchCategory: action.data
            }
    }
    return newState;
};

export default reducer;