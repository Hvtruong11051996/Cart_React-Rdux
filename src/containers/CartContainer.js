import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constains/Message';
import * as action from './../actions/index';

class CartContainer extends Component {

    showCartItem = (cart) => {
        var { onDeleteProduct, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProduct={onDeleteProduct}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    >
                    </CartItem>
                )
            })
        }
        return result;
    }

    // ================ Tính tổng tiền ===================== // 
    // showTotalAmount = (cart) => {
    //     var result = null;
    //     if (cart.length > 0) {
    //         result = <CartResult cart={cart}></CartResult>
    //     }
    //     return result;
    // }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            var total = 0;
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
            result = <CartResult cart={total} />
        }
        return result;
    }
    // ===================================================== //

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    };
}
// ======== Kiểm tra kiểu dữ liệu ======== //
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}
// ====================================== //

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const maDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(action.actDeleteProductInCart(product))
        },

        onChangeMessage: (message) => {
            dispatch(action.actChangeMessage(message))
        },

        onUpdateProductInCart: (product, quantity) => {
            dispatch(action.actUpdateProductInCart(product, quantity))
        },
    }
}

export default connect(mapStateToProps, maDispatchToProps)(CartContainer);
