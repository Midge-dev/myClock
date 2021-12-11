import React, { Component } from 'react';
import DropDown from './DropDown';

class MainClock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleString()
		};
	}

	tick() {
		this.setState({
			time: new Date().toLocaleString()
		});
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
        <div>
            <div className="clock">
                {this.state.time}
            </div>
            <div>
                <DropDown className="dropDown"/>
            </div>
        </div>
        )
	}
}

export default MainClock;
