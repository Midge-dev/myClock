import React, { Component } from 'react';

class Quotes extends Component {
    render() { 
        return (
            <h1 className='quotes'>{this.props.randomQuote.text}<span>-{this.props.randomQuote.author}</span></h1>
        )
    }
}
 
export default Quotes;