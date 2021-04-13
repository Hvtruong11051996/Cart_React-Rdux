import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer></ProductContainer>
                        <Message></Message>
                        <CartContainer></CartContainer>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        );
    };
}

export default App;
