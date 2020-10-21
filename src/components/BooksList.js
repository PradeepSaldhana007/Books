import React, { Component } from 'react';
// import { Table, Button } from 'react-bootstrap';
import styled from 'styled-components';
import BookCard from './BookCard';
import appService from './../app-service';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';

class BookList extends Component {

    constructor() {
        super();
        this.addToCart = this.addToCart.bind(this);
        this.state = { books: [] };
    }

    componentDidMount() {
        let response = appService.getBooks2();
        this.setState({ books: response });
    }

    addBookToReduxStore(book) {
        this.props.addItem(book, 1);
        console.log(this.props.componentCartItems);
    }

    // Below function is either normal function or arrow function.
    // if it is arrow function we dont need to refer this in constructor
    addToCart(book) {
        let cartItems = [];

        // check the session storage
        if (sessionStorage.getItem('cart-items')) {
            cartItems = JSON.parse(sessionStorage.getItem('cart-items'));
        }

        let idx = cartItems.findIndex(function (cItem) {
            return book._id === cItem._id
        });

        if (idx >= 0) {
            cartItems[idx]['qty'] = cartItems[idx]['qty'] + 1;
            cartItems[idx]['sub_total'] = cartItems[idx]['qty'] * cartItems[idx]['price'];
        } else {
            let cartItem = {
                id: book._id,
                title: book.title,
                qty: 1,
                price: book.price,
                sub_total: book['sub_total']
            }
            // push cartItem
            cartItems.push(cartItem);
        }
        sessionStorage.setItem('cart-items', JSON.stringify(cartItems));
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    {this.state.books.map((book) =>
                        <Col style={{ padding: '10px' }}>
                            <BookCard key={book._id} title={book.title} author={book.author} price={book.price}
                                action='add' addToCartClick={() => this.addBookToReduxStore(book)}></BookCard>
                        </Col>
                    )}
                </Row>
            </React.Fragment>
        )
    }
}

// read from Redux
// const mapStateToProps = state => {
//     return {
//         componentCartItems: state.cartItems
//     }
// }

const mapStateToProps = (state) => ({
    componentCartItems: state.cartItems
  });

// update the redux
const mapDispatchToProps = dispatch => {
    return {
        addItem: (book, qty) => dispatch({ type: 'ADD_TO_CART', book: book, qty: qty })
    }
}

// connect react component with redux and it accepts two parametr and return a function to Booklist
export default connect(mapStateToProps, mapDispatchToProps)(BookList);