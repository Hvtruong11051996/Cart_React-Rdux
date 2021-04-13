var initialState = [
    {
        id: 1,
        name: 'Điện thoại Iphone 6',
        image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/iphone-6-gold.jpg',
        description: 'Sản xuất bởi Apple',
        price: 500,
        inventory: 10, // hàng tồn kho
        rating: 5
    },

    {
        id: 2,
        name: 'Điện thoại Iphone 7',
        image: 'https://dienthoaihay.vn/images/products/2020/06/25/large/iphone-7-plus-bac_1593097981-copy.jpg',
        description: 'Sản xuất bởi Apple',
        price: 500,
        inventory: 10, // hàng tồn kho
        rating: 4
    },

    {
        id: 3,
        name: 'Điện thoại Iphone 8',
        image: 'https://didongviet.vn/pub/media/catalog/product//8/p/8p-min_1.jpg',
        description: 'Sản xuất bởi Apple',
        price: 500,
        inventory: 10, // hàng tồn kho
        rating: 5
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {

        default: return [...state];

    }
}

export default products;