import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class BookCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem', height: '12rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        Author: {this.props.author} Price: {this.props.price}
                    </Card.Text>

                    {/* <Button variant="primary" id="addButton" onClick={this.addCart}>Add To Cart</Button> */}

                    {
                       this.props.action === 'add' ?  
                       <Button variant="primary" id="addButton" onClick={this.props.addToCartClick}>Add To Cart</Button> : 
                       <Button variant="danger" id="deleteButton" onClick={this.props.deleteFromCartClick}>Delete</Button>
                    }
                    
                </Card.Body>
            </Card>
        );
    }

    // addCart = () => {
    //     this.props.addToCartClick();
    //     console.log('added');
    // }
}

export default BookCard;