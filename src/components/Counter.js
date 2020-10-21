import React, { Component } from 'react';

let counterValue = 0;
class Counter extends Component {

    constructor() {
        super();
        this.state = { counter: 0};
        this.incrementStateCounter = this.incrementStateCounter.bind(this);
    }


    incrementStateCounter() {
        this.setState({counter: this.state.counter + 1});
        console.log('state counter', this.state.counter);
    }

    incrementCounter() {
        counterValue = counterValue + 1;
        console.log('counter value', counterValue);
    }

    render() {
        return(
            <React.Fragment>
                <p>The counter value is {this.state.counter}</p>
                <button onClick={this.incrementStateCounter}>Increment</button>
            </React.Fragment>
        )
    }
}

export default Counter;