import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class WeatherCard extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						{/* {JSON.stringify(this.props.weather)}{this.props.weather.temp_f} */}
						<img src={this.props.weather.icon} />
						<h1>{`${this.props.weather.temp_f}&deg;F`}</h1>
						{/* <img src={this.props.weather.condition.icon} /> */}
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default WeatherCard;
