import { PAGE, PRODUCT_ITEMS } from "./actionType"

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