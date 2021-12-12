import React, { Component } from 'react';
import DropDown from './DropDown';

class MainClock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/Los_Angeles' }).format(new Date()),
            timeZone: "America/Los_Angeles"
		};
        this.onClick = this.onClick.bind(this)
	}

	tick() {
		this.setState({
			time: new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: this.state.timeZone }).format(new Date())
		});
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

    onClick(e) {
        this.setState({timeZone: e.target.value.length > 1 ? e.target.value : "America/Los_Angeles"})
    }

	render() {
		return (
        <div>
            <div className="clock">
                {this.state.time}
            </div>
            <div className="dropDown" >
                <DropDown onClick={this.onClick} />
            </div>
        </div>
        )
	}
}

export default MainClock;
