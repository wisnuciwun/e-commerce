import { PAGE, PRODUCT_ITEMS, SEARCH_CATEGORY, SEARCH_KEYWORD } from "./actionType"

export const productItems = (data: any) => {
    return{
        type: PRODUCT_ITEMS,
        data: data
    }
}

export const page = (data: any) => {
    return{
        type: PAGE,
        data: data
    }
}

export const onChangeKeyword = (data: any) => {
    return{
        type: SEARCH_KEYWORD,
        data: data
    }
}

export const onChangeCategory = (data: any) => {
    return{
        type: SEARCH_CATEGORY,
        data: data
    }
}