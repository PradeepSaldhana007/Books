import React, { Component } from 'react';
import BookCard from './BookCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';

class CartList extends Component {

    constructor() {
        super();
        this.state = { books: [] };
    }

    componentDidMount() {
        let response = this.props.componentCartItems;
        this.setState({ books: response });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.componentCartItems.length !== nextProps.componentCartItems.length) {
            let response = nextProps.componentCartItems;
            this.setState({ books: response });
        }
    }

    deleteBookFromReduxStore(book) {
        this.props.deleteItem(book, 1);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    {this.state.books.map((book) =>
                        <Col style={{ padding: '10px' }}>
                            <BookCard key={book._id} title={book.title} author={book.author} price={book.price}
                                deleteFromCartClick={() => this.deleteBookFromReduxStore(book)}></BookCard>
                        </Col>
                    )}
                </Row>
            </React.Fragment>
        )
    }
}

// read from Redux
const mapStateToProps = state => {
    return {
        componentCartItems: state.cartItems
    }
}

// update the redux
const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (book, qty) => dispatch({ type: 'DELELTE_FROM_CART', book: book, qty: qty })
    }
}


// connect react component with redux and it accepts two parametr and return a function to Booklist
export default connect(mapStateToProps, mapDispatchToProps)(CartList);