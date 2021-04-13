import * as Types from './../constains/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

var findProductToCart = (cart, product) => {
    console.log(cart);
    console.log(product);
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;

    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductToCart(state, product);
            console.log(state);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default: return [...state];

    }
}

export default cart;