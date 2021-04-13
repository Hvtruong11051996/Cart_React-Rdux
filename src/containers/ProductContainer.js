import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import * as action from './../actions/index';

class ProductContainer extends Component {

    // ========= Map lại danh sách sản phẩm ========= //
    showProduct = (products) => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                >
                </Product>
            })
        }
        return result;
    }
    // ============================================== //

    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    };
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.actAddToCart(product, 1));
        },

        onChangeMessage: (message) => {
            dispatch(action.actChangeMessage(message))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
