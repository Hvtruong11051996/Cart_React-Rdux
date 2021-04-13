import React, { Component } from 'react';
import * as Message from './../constains/Message';

class CartItem extends Component {

    // =================== Tính tổng tiền =================== //
    showTotal = (price, quantity) => {
        return price * quantity
    }
    // ====================================================== //

    // =================== Xóa sản phẩm trong giỏ hàng =================== //
    onDelete = (product) => {
        this.props.onDeleteProduct(product)
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    // ================================================================== //

    // =================== Tăng giảm sản phẩm trong giỏ hàng =================== //
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
        }
        this.props.onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
    }
    // ================================================================== //

    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    };
}

export default CartItem;
