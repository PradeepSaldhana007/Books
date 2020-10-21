import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    return (
        <p>Title: {props.title}, Author: {props.author}, Price: {props.price}</p>
    )
}

// validation
Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number
}


export default Book;