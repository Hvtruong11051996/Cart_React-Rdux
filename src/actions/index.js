import * as types from './../constains/ActionTypes';

export const actAddToCart = (product, quantity) => {
    type: types.ADD_TO_CART,
        product,
        quantity
}