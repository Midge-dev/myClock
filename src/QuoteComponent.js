import React, { Component } from 'react';

class Quotes extends Component {
    render() { 
        return (
            <h1>{this.props.randomQuote}</h1>
        )
    }
}
 
export default Quotes;