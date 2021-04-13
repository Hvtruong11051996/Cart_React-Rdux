import * as types from './../constains/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = [
    {
        product: {
            id: 1,
            name: 'Điện thoại Iphone 6',
            image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/iphone-6-gold.jpg',
            description: 'Sản xuất bởi Apple',
            price: 500,
            inventory: 10, // hàng tồn kho
            rating: 5
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'Điện thoại Iphone 7',
            image: 'https://dienthoaihay.vn/images/products/2020/06/25/large/iphone-7-plus-bac_1593097981-copy.jpg',
            description: 'Sản xuất bởi Apple',
            price: 500,
            inventory: 10, // hàng tồn kho
            rating: 4
        },
        quantity: 9
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state]

        default: return [...state];

    }
}

export default cart;